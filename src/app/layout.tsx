import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ankur | Full-Stack Developer & AI Enthusiast",
  description:
    "Full-stack developer specializing in AI-driven platforms and ML-powered recommendation systems with a strong foundation in Data Structures and Algorithms.",
  keywords: [
    "Ankur",
    "Full-Stack Developer",
    "AI",
    "Machine Learning",
    "React",
    "Next.js",
    "Portfolio",
  ],
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
