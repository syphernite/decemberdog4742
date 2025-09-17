// src/components/Layout.tsx
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { tokens } from "../styles/tokens";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`min-h-screen ${tokens.colors.background}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
