"use client";

import Project from "@/components/project";
import { use } from "react";

export default function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return <Project slug={slug} />;
}
