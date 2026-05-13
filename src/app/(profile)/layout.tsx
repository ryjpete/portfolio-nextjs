"use client";

import PageHeader from "@/components/page-header";

// import ProfileIntro from "@/components/profile-intro";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
