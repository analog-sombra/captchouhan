import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Captain Chouhan",
  description: "Personal portfolio of Captain Chouhan",
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
