import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Trust Nutramax",
  description: "I Trust Nutramax landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
