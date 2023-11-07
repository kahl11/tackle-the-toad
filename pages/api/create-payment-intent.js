const stripe = require("stripe")('sk_test_51H7oYJAGMEbbtoZlhsJOnJCnqRK8pphCqhJG0dl33WiYQNCzxJN8vou4cPO7zZbbX7H4LrjFFUGg8b1amKbY6IwQ00tAtuif5C');

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "cad",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.status(200).json({ clientSecret: paymentIntent.client_secret });
}
