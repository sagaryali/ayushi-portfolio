import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayushi — Designer",
  description: "Portfolio of Ayushi, a designer crafting meaningful impact.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
