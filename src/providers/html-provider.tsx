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
        <meta name="apple-mobile-web-app-title" content="Grateful Dev" />
      </Head>
      <body className={`${russoOne.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
