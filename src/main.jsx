import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.js";
import { CartProvider } from "./contexts/CartContext.js";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
