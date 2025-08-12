// src/context/Walkthrough.tsx
import React, { createContext, useContext, useState } from "react";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const WalkthroughCtx = createContext<Ctx | null>(null);

export const WalkthroughProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <WalkthroughCtx.Provider value={{ open, close, isOpen }}>
      {children}
    </WalkthroughCtx.Provider>
  );
};

export const useWalkthrough = () => {
  const ctx = useContext(WalkthroughCtx);
  if (!ctx) throw new Error("useWalkthrough must be used inside WalkthroughProvider");
  return ctx;
};
