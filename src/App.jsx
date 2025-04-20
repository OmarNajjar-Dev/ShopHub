import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

// Lazy loaded pages (for better performance)
const HomePage = lazy(() => import("./pages/HomePage"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

import ProtectedRoute from "./components/ProtectedRoute"; // For pages that require authentication

function App() {
  // Global state to manage the favorite products
  const [favorites, setFavorites] = useState([]);

  // Function to add or remove a product from favorites
  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <Router>
      {/* Suspense fallback will be shown while lazy-loaded components are being fetched */}
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
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categories"
            element={
              <CategoriesPage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Authentication routes grouped under /auth */}
          <Route path="/auth">
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Protected route: only accessible if user is authenticated */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
