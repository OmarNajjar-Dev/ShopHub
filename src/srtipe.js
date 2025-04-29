import { loadStripe } from "@stripe/stripe-js";

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(PUBLISHABLE_KEY);

export default stripePromise;
