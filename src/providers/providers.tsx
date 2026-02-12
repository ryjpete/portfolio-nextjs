"use client";

import { ReactNode } from "react";
import HtmlProvider from "./html-provider";
import EffectsProvider from "./effects-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HtmlProvider>
      <EffectsProvider>
        {children}
      </EffectsProvider>
    </HtmlProvider>
  );
}
