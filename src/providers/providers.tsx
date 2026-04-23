import { ReactNode } from "react";

import { ProjectProvider } from "@/context/ProjectContext";

import HtmlProvider from "./html-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HtmlProvider>
      <ProjectProvider>
        {children}
      </ProjectProvider>
    </HtmlProvider>
  );
}
