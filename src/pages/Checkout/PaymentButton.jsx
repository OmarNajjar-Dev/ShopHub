/* eslint-disable react/prop-types */
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function PaymentButton({ formData, onPay }) {
  const stripe = useStripe();
  const elements = useElements();
  const isStripe = ["visa", "mastercard"].includes(formData.paymentMethod);

  const handleStripePayment = async () => {
    if (!stripe || !elements) return;
    try {
      const { clientSecret } = await (
        await fetch("http://localhost:4242/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 8999 }),
        })
      ).json();

      const card = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
          },
        },
      });

      if (error) alert(error.message);
      else if (paymentIntent.status === "succeeded") alert("✅ Payment successful!");
    } catch {
      alert("Payment error");
    }
  };

  return (
    <button
      type="submit"
      onClick={isStripe ? handleStripePayment : () => onPay(formData)}
      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Place Order
    </button>
  );
}
