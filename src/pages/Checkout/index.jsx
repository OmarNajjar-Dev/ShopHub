import { useState } from "react";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../stripe";
import { useAuth } from "../../contexts/AuthContext";

export default function Checkout() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePay = async () => {
    if (!formData.paymentMethod) {
      return alert("Please select a payment method first.");
    }
    if (["visa", "mastercard"].includes(formData.paymentMethod)) {
      alert("✅ Processing Stripe Payment...");
    } else {
      alert("⚠ Unknown payment method!");
    }
  };

  const orderItems = [{ name: "Running Shoes", quantity: 1, price: 89.99 }];

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side: forms */}
          <div className="lg:col-span-8 space-y-8">
            <ShippingForm
              email={user?.email || ''}
              formData={formData}
              onChange={handleInputChange}
            />
            <PaymentForm
              formData={formData}
              onChange={handleInputChange}
              onPay={handlePay}
            />
          </div>

          {/* Right side: summary */}
          <div className="lg:col-span-4">
            <OrderSummary items={orderItems} />
          </div>
        </div>
      </div>
    </Elements>
  );
}
