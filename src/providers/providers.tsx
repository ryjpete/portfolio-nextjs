import { ReactNode } from "react";

import { ProjectProvider } from "@/context/ProjectContext";
import { ScrollProvider } from "@/context/ScrollContext";

import HtmlProvider from "./html-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HtmlProvider>
      <ScrollProvider>
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </ScrollProvider>
    </HtmlProvider>
  );
}
