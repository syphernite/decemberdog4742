// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
