import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyApp - By Geetansh",
  description: "Made by Geetansh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100vh]">
        <Navbar />
        <div className="border-4 border-red-800 min-h-[88%]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
