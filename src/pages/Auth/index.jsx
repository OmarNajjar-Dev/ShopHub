import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const { setIsUser } = useAuth();
  const [mode, setMode] = useState("sign-in");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUser(true);
    navigate("/");
  };

  return mode === "sign-in" ? (
    <SignIn setMode={setMode} handleSubmit={handleSubmit} />
  ) : (
    <SignUp setMode={setMode} handleSubmit={handleSubmit} />
  );
}
