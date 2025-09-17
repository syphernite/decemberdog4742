// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { tokens } from "../styles/tokens";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className={`min-h-screen ${tokens.colors.background}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
