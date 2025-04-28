// src/stripe.js
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe("YOUR_PUBLISHABLE_KEY_HERE");

export default stripePromise;
