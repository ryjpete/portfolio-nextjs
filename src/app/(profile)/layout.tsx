"use client";

import ProfileIntro from "@/components/profile-intro";

export default function ProfileLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <div className="container">
      <ProfileIntro />
      {children}
      {modal && modal}
    </div>
  );
}
