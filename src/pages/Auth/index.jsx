import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const { setUser } = useAuth();
  const [mode, setMode] = useState("sign-in");
  const navigate = useNavigate();

  const handleSubmit = (userData) => {
    setUser(userData);
    navigate("/");
  };

  return mode === "sign-in" ? (
    <SignIn setMode={setMode} onSubmit={handleSubmit} />
  ) : (
    <SignUp setMode={setMode} onSubmit={handleSubmit} />
  );
}
