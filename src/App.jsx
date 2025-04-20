import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CategoriesPage from "./pages/CategoriesPage";
import FavoritesPage from "./pages/FavoritesPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route
          path="/checkout"
          element={
          
              <CheckoutPage />
          
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
