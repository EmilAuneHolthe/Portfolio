import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emil Aune Holthe | Personal Portfolio",
  description: "Emil Aune Holthe's personal portfolio. Under development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
