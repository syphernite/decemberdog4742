// src/components/Layout.tsx
import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallFab from "./CallFab";
import bgUrl from "../assets/background.jpg";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col text-base-text">
      {/* Background image with overlay */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${bgUrl}')`,
          filter: "blur(10.2px) brightness(0.7)",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />
      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen bg-black/40 backdrop-blur-sm">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallFab />
      </div>
    </div>
  );
}
