"use client";

import GlitchEffect from "@/components/glitch-effect";
import RippleEffect from "@/components/ripple-effect";

import "@/app/globals.css";

export default function EffectsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ripple = <RippleEffect />;
  const glitch = <GlitchEffect />;

  return (
    <>
      {ripple}
      {glitch}
      {children}
    </>
  );
}
