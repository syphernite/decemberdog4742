import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import CheckoutPage from "@/pages/CheckoutPage";
import NotFound from "@/pages/not-found";

/**
 * Clean URLs under /dash with Wouter base.
 */
function AppRoutes() {
  return (
    <Switch>
      <Route path="/dash" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base="/dash">
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
