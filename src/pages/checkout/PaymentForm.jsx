/* eslint-disable react/prop-types */
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function PaymentForm({ formData, onChange, onPay }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleStripePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4242/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 8999 }), // Price of the product in cents (8999 = $89.99)
        }
      );

      const { clientSecret } = await response.json();

      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
            },
          },
        }
      );

      if (error) {
        console.error(error);
        alert(error.message);
      } else if (paymentIntent.status === "succeeded") {
        console.log("✅ Payment succeeded:", paymentIntent);
        alert("✅ Payment successful!");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while processing the payment.");
    }
  };

  return (
    <div className="bg-white px-2 py-6 md:px-6 rounded-lg shadow-xs">
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      <div className="space-y-6">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            name="paymentMethod"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
            value={formData.paymentMethod}
            onChange={onChange}
          >
            <option value="">Select a method</option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
          </select>
        </div>

        {/* Card Number */}
        {(formData.paymentMethod === "visa" ||
          formData.paymentMethod === "mastercard") && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="p-4 border rounded-md">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          </div>
        )}

        {/* Expiry Date and CVV */}
        {formData.paymentMethod === "visa" ||
          formData.paymentMethod === "mastercard"}

        {/* Pay Button */}
        <button
          type="button"
          onClick={
            formData.paymentMethod === "visa" ||
            formData.paymentMethod === "mastercard"
              ? handleStripePayment
              : onPay
          }
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
