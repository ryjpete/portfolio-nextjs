"use client";

import { Google_Sans_Code } from "next/font/google";
import Head from "next/head";

import "@/app/globals.css";

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export default function HtmlProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head> 
        <meta name="apple-mobile-web-app-title" content="Grateful Dev" />
      </Head>
      <body className={`${googleSansCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
