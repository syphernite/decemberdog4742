import React from "react";
import { Router, Route } from "wouter";
import "./index.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Router base="#/">
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/:rest*" component={NotFound} />
    </Router>
  );
}
