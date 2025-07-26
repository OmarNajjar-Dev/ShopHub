import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import { CategoryProvider } from "./CategoryContext";
import { FavoritesProvider } from "./FavoritesContext";

// eslint-disable-next-line react/prop-types
export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <CategoryProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  );
}
