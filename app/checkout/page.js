"use client"
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";
import "./style.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51H7oYJAGMEbbtoZl130sEQEc3TiJvSYocAiM1R6q7L5pNmxyUC0Bv7zuQmkc8aSPobn4NK95ZvtoqUUHZqtE0X5U00JsxrWKFo");

export default function Checkout() {
    const [clientSecret, setClientSecret] = useState("");
    const fetchPaymentIntent = async () => {
        if (typeof window !== "undefined") {

            const res = await fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
            })
            const data = await res.json();
            setClientSecret(data.clientSecret);
        }
    };

    useEffect(() => {
        fetchPaymentIntent();
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
            {clientSecret && (typeof window !== "undefined") (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );
}