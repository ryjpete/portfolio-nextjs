"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { useMotionValue, MotionValue } from "framer-motion";

interface ScrollContextValue {
  scrollY: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handler = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [scrollY]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollY() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScrollY must be used within ScrollProvider");
  return ctx;
}
