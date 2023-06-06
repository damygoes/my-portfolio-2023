import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} w-full h-full inline-block z-0 bg-neutral text-text-dark scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
