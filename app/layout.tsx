import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your E-Commerce Store",
  description: "A modern e-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${cabin.className} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
