import React, { useEffect, useState, useContext, useMemo } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { Box, Button, Card, Typography } from "@mui/material";
import { GlobalContext } from "@/src/components/GlobalContextProvider";
import Cookies from "js-cookie";
import { db } from "@/src/constants/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { green } from "@mui/material/colors";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const globalDataContext = useContext(GlobalContext);

    const email = useMemo(() => Cookies.get("email") ?? "", []);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        if (typeof window !== "undefined") {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            redirect: "if_required",
            elements,
        })
        try {
            updateDoc(doc(db, "registration", email), { paid: true });
        } catch (e) {
            console.log(e);
            setMessage(
                "failed to set payment status, please contact race organizers"
            );
        }
        console.log(error);
        if (error && "key" in error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("An unexpected error occurred.");
            }
        } else {
            setIsLoading(false);
            router.push('/thank-you')
        }
        setIsLoading(false);
    }
    };

    const paymentElementOptions = {
        layout: "tabs",
    };

    return (
        <Box display="flex" sx={{ justifyContent: "center" }}>
            <Card sx={{ marginTop: "4rem", width: "50rem", p: "1rem" }}>
                <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                    Payment Form
                </Typography>
                {globalDataContext.data.firstName &&
                    globalDataContext.data.firstName && (
                        <Typography fontSize={"1rem"}>
                            {globalDataContext.data.firstName}{" "}
                            {globalDataContext.data.lastName}
                        </Typography>
                    )}
                <Typography fontSize={"1rem"}>Tackle the Toad 50km</Typography>
                <Typography sx={{ mb: '1rem' }} fontSize={"1rem"}>Total: $50 (tax included)</Typography>
                <form id="payment-form" onSubmit={handleSubmit}>
                    <LinkAuthenticationElement
                        options={{ defaultValues: { email: String(email) } }}
                        id="link-authentication-element"
                    />
                    <Box sx={{ height: "2rem", width: "100%" }} />
                    <PaymentElement
                        id="payment-element"
                        options={paymentElementOptions}
                    />
                    <Box sx={{ height: "2rem", width: "100%" }} />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        type="submit"
                    >
                        {isLoading ? (
                            <PulseLoader color={green[100]} />
                        ) : (
                            <Typography
                                fontSize={"1.2rem"}
                                fontWeight={"500"}
                                fontFamily={"Open Sans"}
                            >
                                Pay Now
                            </Typography>
                        )}
                    </Button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </Card>
        </Box>
    );
}
