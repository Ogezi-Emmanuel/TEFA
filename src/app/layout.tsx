import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TÉFA | Pre-Order",
  description: "Premium Custom-Made & Pre-Order Silhouettes. Handcrafted in Nigeria.",
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
