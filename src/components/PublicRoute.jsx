/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ children }) {
  const { isUser } = useAuth();

  if (isUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}
