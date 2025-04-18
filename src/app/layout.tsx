import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Relief",
  description: "Made by Krish Ahlawat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="__variable_4d318d __variable_ea5f4b antialiased"
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
