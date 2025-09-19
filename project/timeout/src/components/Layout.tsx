// src/components/Layout.tsx
import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CallFab from "./CallFab";
import bgUrl from "../assets/background.jpg";

/**
 * Global layout with background, header, footer, and call FAB.
 * Keeps App.tsx minimal by moving presentational chrome here.
 */
export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen text-base-text">
      {/* Background image with overlay. Blur reduced by ~15%: 12px -> 10.2px */}
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
      <div className="relative z-10 min-h-screen bg-black/40 backdrop-blur-sm">
        <Header />
        {children}
        <Footer />
        <CallFab />
      </div>
    </div>
  );
}
