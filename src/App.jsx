import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

// Lazy loaded pages
const HomePage = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const CategoriesPage = lazy(() => import("./pages/Categories"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ContactPage = lazy(() => import("./pages/Contact/"));
const CartPage = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorite")) ?? []
  );
  const [cartItems, setCartItems] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <span className="text-lg font-semibold animate-pulse">
            Loading...
          </span>
        </div>
      }
    >
      <Routes>
        <Route element={<Layout cartItems={cartItems} />}>
          <Route
            path="/"
            element={
              <HomePage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <CategoriesPage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                updateCartItemQuantity={updateCartItemQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />

          {/* Authentication routes */}
          <Route path="/auth">
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Checkout */}
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
