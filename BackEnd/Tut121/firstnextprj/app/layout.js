import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Geetansh's 1st Next.js App",
  description: "Geetansh's First Next.js App - a simple react app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* If i want my Navbar to be before body in the entire app */}
      <body className={inter.className}>
      <Navbar />
      {children}</body>
    </html>
  );
}
