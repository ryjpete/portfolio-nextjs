"use client";

import { createContext, useContext, useState } from "react";

interface Project {
  title: string;
  slug: string;
  url?: string;
  target?: string;
  client?: string;
  type?: string;
  blurb?: string;
  description?: string;
  cats?: string[];
  images: {
    thumb: string;
    imageSet?: string[];
  };
  techs?: {
    [category: string]: string[];
  };
}

interface ProjectContextType {
	activeProject: Project | null;
	setActiveProject: (project: Project | null) => void;
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
	const [activeProject, setActiveProject] = useState<Project | null>(null);

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
