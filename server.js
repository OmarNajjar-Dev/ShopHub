// server.js
import express from "express";
import Stripe from "stripe";
import cors from "cors";

const SECRET_KEY = import.meta.env.VITE_STRIPE_SECRET_KEY;

const app = express();
const stripe = new Stripe(SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(4242, () => console.log("Server running on port 4242"));
