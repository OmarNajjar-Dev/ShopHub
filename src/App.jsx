import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./layouts";

// Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

// Hooks
import useLocalStorage from "./hooks/useLocalStorage";

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
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((i) => i.id === product.id);
      return exists
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product];
    });
  };

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
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute fallback={SignInCheckout}>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            {/* Auth under layout if desired */}
            <Route
              path="/auth/*"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
