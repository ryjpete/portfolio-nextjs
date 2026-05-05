"use client";

import { createContext, useContext, useState } from "react";

export interface ProjectCntxt {
  title: string;
  slug: string;
  client: string;
  description: string;
  stack: string;
  thumb?: string;
  imageSet?: string[];
  specs?: Array<{
    display: string;
    label: string;
  }>;
  
  url?: string;
  target?: string;
  isActive?: boolean;
  type?: string;
  blurb?: string;
  cats?: string[];
  techs?: Array<{
    category: string;
    isActive?: boolean;
    items: string[];
  }>;
}

interface ProjectContextType {
	activeProject: ProjectCntxt | null;
	setActiveProject: (project: ProjectCntxt | null) => void;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
	const [activeProject, setActiveProject] = useState<ProjectCntxt | null>(null);

	return (
		<ProjectContext.Provider value={{ activeProject, setActiveProject }}>
			{children}
		</ProjectContext.Provider>
	);
}

export function useProject() {
	const context = useContext(ProjectContext);
	if (!context)
		throw new Error("useProject must be used within a ProjectProvider");
	return context;
}
