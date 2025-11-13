import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Navbar, Banner, Footer } from "@/components/layout";

const headingFont = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web3 App - Modern Web3 Boilerplate",
  description: "A modern Web3 application built with Next.js, Wagmi, and RainbowKit",
  keywords: ["web3", "ethereum", "dapp", "blockchain", "crypto"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${headingFont.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}



