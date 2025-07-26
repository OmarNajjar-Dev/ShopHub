import "./index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AppProviders } from "./contexts/AppProviders";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
