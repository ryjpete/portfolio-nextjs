"use client";

import ProfileIntro from "@/components/profile-intro";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="container">
      <ProfileIntro />
      {children}
    </div>
  );
}
