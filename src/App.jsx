import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import useLocalStorage from "./hooks/useLocalStorage";
import SignInFavoritesPrompt from "./pages/Favorites/SignInFavoritesPrompt";
import SignInCheckout from "./pages/Checkout/SignInCheckout";

// Lazy loaded pages (for better performance)
const HomePage = lazy(() => import("./pages/Home"));
const AuthPage = lazy(() => import("./pages/Auth"));
const CategoriesPage = lazy(() => import("./pages/Categories"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [favorites, setFavorites] = useLocalStorage("favorite", []);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const updated = prev.some((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product];
      return updated;
    });
  };

  // Global state for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existingItem = prev?.find((item) => item.id === product.id);
      if (existingItem) {
        return prev?.map((item) =>
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
    setCartItems((prev) => prev?.filter((item) => item.id !== productId));
  };

  // Function to update cart item quantity
  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems((prev) =>
      prev?.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
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
                <ProtectedRoute fallback={SignInFavoritesPrompt}>
                  <FavoritesPage
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    addToCart={addToCart}
                  />
                </ProtectedRoute>
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

            {/* Auth flow under /auth */}
            <Route
              path="/auth"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            />

            {/* Protected route: only accessible if user is authenticated */}
            <Route
              path="/checkout"
              element={
                <ProtectedRoute fallback={SignInCheckout}>
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
