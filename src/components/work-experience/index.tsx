"use client";

import { useEffect, useState } from "react";
import Experience from "../experience";

interface Experience {
  id: number;
  company: string;
  position: string[];
  tenure: { start: string; end: string; };
  description: string;
  logo: string;
  responsibilities: string[];
  contact: { url: string; };
  tech: { name: string; icon: string }[];
}

export default function WorkExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading work experience...</div>

  return (
    <>
      <h3>Work Experience</h3>

      {experiences.map((exp) => <Experience key={exp.id} {...exp} />)}
    </>
  );
}
