/* eslint-disable react/prop-types */
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../stripe";
import { useAuth } from "../../contexts/AuthContext";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import PaymentButton from "./PaymentButton";
import OrderSummary from "./OrderSummary";

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
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: user?.email || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting order:", formData);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <ShippingForm
                email={formData.email}
                formData={formData}
                onChange={handleInputChange}
              />
              <PaymentForm formData={formData} onChange={handleInputChange} />
              <PaymentButton formData={formData} onPay={() => {}} />
            </form>
          </div>
          <div className="lg:col-span-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </Elements>
  );
}
