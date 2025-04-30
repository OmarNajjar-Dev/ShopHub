import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransition } from "./animations/pageTransitions";

// Layouts
import Layout from "./layouts";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

// Static pages (non-lazy)
import SignInFavoritesPrompt from "./pages/Favorites/SignInFavoritesPrompt";
import SignInCheckout from "./pages/Checkout/SignInCheckout";

// Utils
import ScrollToTop from "./utils/ScollToTop";

// Lazy loaded pages
const HomePage = lazy(() => import("./pages/Home"));
const AuthPage = lazy(() => import("./pages/Auth"));
const CategoriesPage = lazy(() => import("./pages/Categories"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const ContactPage = lazy(() => import("./pages/Contact"));
const CartPage = lazy(() => import("./pages/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
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
          {/* Routes wrapped with Layout */}
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <motion.div {...pageTransition}>
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/categories"
              element={
                <motion.div {...pageTransition}>
                  <CategoriesPage />
                </motion.div>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute fallback={SignInFavoritesPrompt}>
                  <motion.div {...pageTransition}>
                    <FavoritesPage />
                  </motion.div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div {...pageTransition}>
                  <ContactPage />
                </motion.div>
              }
            />
            <Route
              path="/cart"
              element={
                <motion.div {...pageTransition}>
                  <CartPage />
                </motion.div>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute fallback={SignInCheckout}>
                  <motion.div {...pageTransition}>
                    <CheckoutPage />
                  </motion.div>
                </ProtectedRoute>
              }
            />
            {/* Auth under layout if desired */}
            <Route
              path="/auth/*"
              element={
                <PublicRoute>
                  <motion.div {...pageTransition}>
                    <AuthPage />
                  </motion.div>
                </PublicRoute>
              }
            />
            <Route
              path="*"
              element={
                <motion.div {...pageTransition}>
                  <NotFound />
                </motion.div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
