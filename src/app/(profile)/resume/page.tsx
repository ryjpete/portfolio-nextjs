"use client";

import LinkList from "@/components/link-list";
import PageHeader from "@/components/page-header";

export default function ResumePage() {
  const LINKS = [
    { label: "Experience", href: "/resume/experience" },
    // { label: "Skills",     href: "/resume/skills" },
    { label: "Education",  href: "/resume/education" },
  ];

  return (
    <>
      <PageHeader />
      <LinkList links={LINKS} />
    </>
  );
}
