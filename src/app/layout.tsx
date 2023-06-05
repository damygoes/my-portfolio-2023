import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damilola Bada | Full Stack Developer",
  description: "I am a full stack developer based in Offenburg, Germany",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full h-full inline-block z-0 bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
