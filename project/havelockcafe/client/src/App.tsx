import React from "react";
import { Router, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Hero from "./components/Hero";

/**
 * Normalize routing for GitHub Pages:
 * - We use Hash routing so deep links work on /havelockcafe#/
 * - Your internal routes should be declared under the Router below.
 */

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
    </main>
  );
}

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/">
        {() => (
          <div className="min-h-screen bg-background">
            <Home />
          </div>
        )}
      </Route>
    </Router>
  );
}
