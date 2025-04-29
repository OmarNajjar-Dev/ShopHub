/* eslint-disable react/prop-types */

import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ fallback: Fallback, children }) {
  const { isUser } = useAuth();

  if (!isUser) {
    return <Fallback />;
  }

  return <>{children}</>;
}
