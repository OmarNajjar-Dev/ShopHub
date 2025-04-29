import { useState, useEffect } from "react";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../srtipe"; 

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "", // Initialize email as empty, will populate it from localStorage
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
  });

  // Fetch the user's email from localStorage when the component mounts
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail"); // Retrieve email from localStorage
    if (userEmail) {
      setFormData((prevData) => ({
        ...prevData,
        email: userEmail, // Set the email from localStorage
      }));
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePay = async () => {
    if (!formData.paymentMethod) {
      alert("Please select a payment method first.");
      return;
    }

    if (formData.paymentMethod === "visa" || formData.paymentMethod === "mastercard") {
      alert("✅ Processing Stripe Payment...");
      console.log("Processing Stripe Payment...");
    } 
     else {
      alert("⚠ Unknown payment method!");
    }
  };

  const orderItems = [
    { name: "Running Shoes", quantity: 1, price: 89.99 },
  ];

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <ShippingForm formData={formData} onChange={handleInputChange} />
              <PaymentForm formData={formData} onChange={handleInputChange} onPay={handlePay} />
            </div>
          </div>
          <div className="lg:col-span-4">
            <OrderSummary items={orderItems} />
          </div>
        </div>
      </div>
    </Elements>
  );
}
