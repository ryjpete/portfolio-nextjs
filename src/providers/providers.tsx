"use client";

import { ReactNode } from "react";
import HtmlProvider from "./html-provider";
import { ProjectProvider } from "@/context/ProjectContext";
// import EffectsProvider from "./effects-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HtmlProvider>
      <ProjectProvider>
        {/* <EffectsProvider> */}
          {children}
        {/* </EffectsProvider> */}
      </ProjectProvider>
    </HtmlProvider>
  );
}
