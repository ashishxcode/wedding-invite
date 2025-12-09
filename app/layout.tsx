import type { Metadata, Viewport } from "next";
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

import { Noto_Serif_Gujarati } from "next/font/google";

const notoSerifGujarati = Noto_Serif_Gujarati({
  variable: "--font-noto-serif-gu",
  subsets: ["gujarati"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wedding Invitation | Ashish & Anushka",
  description: "You are cordially invited to the wedding of Ashish and Anushka.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFFBF0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifGujarati.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
