import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

import ProtectedRoute from "./components/ProtectedRoute"; // For protected pages like checkout

function App() {
  return (
    <Router>
      {/* Suspense will show fallback (e.g. "Loading...") while lazy components load */}
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
          {/* Main public pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Auth routes under /auth */}
          <Route path="/auth">
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Protected page */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          {/* Not found fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
