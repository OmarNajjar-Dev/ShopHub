import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/guards/ProtectedRoute";

// Lazy loaded pages (for better performance)
const HomePage = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const CategoriesPage = lazy(() => import("./pages/Categories"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  // Global state to manage favorite products
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorite")) ?? []
  );
  // Global state for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add or remove a product from favorites
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];

      // Save the updated favorites to localStorage
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));

      return updatedFavorites; // return the updated favorites to set the state
    });
  };

  // Function to add item to cart
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

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Function to update cart item quantity
  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <Router>
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
          {/* Main public routes */}
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

            {/* Protected route: only accessible if user is authenticated */}
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage cartItems={cartItems} />
                </ProtectedRoute>
              }
            />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
