import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Site header always visible */}
      <Header />

      {/* Main content area grows to fill space */}
      <main className="flex-grow">
        {/* Outlet renders the matched child route component here */}
        <Outlet />
      </main>

      {/* Site footer always visible */}
      <Footer />
    </div>
  );
}
