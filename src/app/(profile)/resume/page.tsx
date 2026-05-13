"use client";

import LinkList from "@/components/link-list";
import PageHeader from "@/components/page-header";

export default function ResumePage() {
  const LINKS = [
    { label: "Experience", href: "/resume/experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
  ];

  return (
    <>
      <PageHeader />
      <LinkList links={LINKS} />
    </>
  );
}
