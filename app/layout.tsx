import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayushi — Designer",
  description: "Portfolio of Ayushi, a designer crafting meaningful impact.",
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
