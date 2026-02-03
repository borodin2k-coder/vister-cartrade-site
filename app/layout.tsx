import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vister CarTrade - International Car Broker",
  description: "Global sourcing of premium vehicles from USA, UAE, Europe. Headquarters in Dubai, UAE.",
  openGraph: {
    images: "/og-image.jpg", // Добавь своё изображение в public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}