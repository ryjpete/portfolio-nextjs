import type { Metadata } from "next";

import { Providers } from "@/providers/providers";

import Header from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Peterson <UI Dev />",
  description: "This crappy site is in progress. Enjoy the emptiness.",
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = <Header />;

  return (
    <Providers>
      {header}

      <main className="main">
        {children}
      </main>
    </Providers>
  );
}
