import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Andrew Cofield | Creative Director & Systems Builder",
  description: "Creative Director, systems builder, and storyteller. From photography professor aspirant to AI platform builder. View my portfolio and story.",
  keywords: ["Creative Director", "DAM", "PIM", "AI", "marketing", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased min-h-screen">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}