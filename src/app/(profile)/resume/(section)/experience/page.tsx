"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import ResumeItem from "@/components/resume-item";
import ExperienceDetail from "@/components/experience-detail";

import styles from "./experience.module.css";

interface Experience {
  id: number;
  company: string;
  route: string;
  logo: string;
  role: string;
  roleDesc: string;
  position: string[];
  tenure: { start: string; end: string; };
  description: string;
  responsibilities: string[];
  contact: { url: string; };
  tech: { name: string; icon: string }[];
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selected, setSelected] = useState<Experience | null>(null);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data.experience.workExperiences || []);
      });
  }, []);

  // Push a history entry when modal opens so the back button closes it.
  useEffect(() => {
    if (selected) {
      window.history.pushState({ modal: true }, "");
    }
  }, [selected]);

  // Intercept popstate (back button) to close the modal instead of navigating away.
  useEffect(() => {
    const handlePopState = () => {
      if (selected) {
        setSelected(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selected]);

  return (
    <>
      <div className={styles.experiences}>
        {experiences.map((exp) => (
          <ResumeItem key={exp.id} exp={exp} onClick={() => setSelected(exp)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ExperienceDetail exp={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
