"use client";

import { Russo_One } from "next/font/google";
import { Inter } from "next/font/google";
import Head from "next/head";

import "@/app/globals.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo-one",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function HtmlProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const page =
      pathname === "/"
        ? "home"
        : pathname.startsWith("/resume")
        ? "resume"
        : pathname.startsWith("/skills")
        ? "skills"
        : "default";

    document.body.dataset.page = page;
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        {/* <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <meta name="apple-mobile-web-app-title" content="Grateful Dev" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <body className={`${russoOne.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
