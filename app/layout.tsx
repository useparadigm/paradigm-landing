import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paradigm — Find where your codebase leaks quality",
  description:
    "Paradigm analyzes your PR history to find recurring bug patterns, prescribes fixes, helps implement them, and monitors outcomes. Free scan for any public GitHub repo.",
  openGraph: {
    title: "Paradigm — Find where your codebase leaks quality",
    description:
      "Diagnose recurring bug patterns. Prescribe fixes. Implement them. Monitor outcomes.",
    url: "https://useparadigm.app",
    siteName: "Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradigm — Find where your codebase leaks quality",
    description:
      "Diagnose recurring bug patterns. Prescribe fixes. Implement them. Monitor outcomes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
