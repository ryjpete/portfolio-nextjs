import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";

import Header from "@/components/header";
import GlitchEffect from "@/components/glitch-effect";
import RippleEffect from "@/components/ripple-effect";

import "./globals.css";

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Peterson <Dev />",
  description: "This crappy site is in progress. Enjoy the emptiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ripple = <RippleEffect />;
  const glitch = <GlitchEffect />;
  const header = <Header />;
  const content = <main className="main">{children}</main>;

  return (
    <html lang="en">
      <body className={`${googleSansCode.variable} antialiased`}>
        {ripple}
        {glitch}
        {header}
        {content}
      </body>
    </html>
  );
}
