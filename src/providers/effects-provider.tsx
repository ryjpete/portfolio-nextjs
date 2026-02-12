"use client";

import GlitchEffect from "@/components/glitch-effect";
import RippleEffect from "@/components/ripple-effect";

import "@/app/globals.css";
import BreatheEffect from "@/components/breathe-effect";

export default function EffectsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ripple = <RippleEffect />;
  const glitch = <GlitchEffect />;

  return (
    <BreatheEffect>
      {ripple}
      {glitch}
      {children}
    </BreatheEffect>
  );
}
