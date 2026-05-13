"use client";

import LinkList from "@/components/link-list";

export default function ResumePage() {
  const LINKS = [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },

  ];

  return <LinkList links={LINKS} />;
}
