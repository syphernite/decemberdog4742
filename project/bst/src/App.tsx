import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageTransition } from './components/PageTransition';
import LandingPage from './pages/LandingPage';
import BarberPage from './pages/BarberPage';
import SneakersPage from './pages/SneakersPage';
import ClothingPage from './pages/ClothingPage';

function App() {
  return (
    <div className="min-h-screen bg-stone-900">
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <LandingPage />
            </PageTransition>
          }
        />
        <Route
          path="/barber"
          element={
            <PageTransition>
              <BarberPage />
            </PageTransition>
          }
        />
        <Route
          path="/sneakers"
          element={
            <PageTransition>
              <SneakersPage />
            </PageTransition>
          }
        />
        <Route
          path="/clothing"
          element={
            <PageTransition>
              <ClothingPage />
            </PageTransition>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
