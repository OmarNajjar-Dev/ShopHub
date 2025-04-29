/* eslint-disable react/prop-types */

import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ fallback: Fallback, children }) {
  const { user } = useAuth();

  if (!user) {
    return <Fallback />;
  }

  return <>{children}</>;
}
