import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Reza Pahlepi | Informatics Engineering & Full-Stack Developer",
  description: "Portfolio of Reza Pahlepi, an Informatics Engineering student at USU. Specialized in building high-performance web and mobile applications.",
  keywords: ["Reza Pahlepi", "Informatics Engineering USU", "Full-Stack Developer Medan", "Web Developer Indonesia", "Portfolio"],
  authors: [{ name: "Reza Pahlepi" }],
  openGraph: {
    title: "Reza Pahlepi - Digital Portfolio",
    description: "Informatics Engineering Student & Full-Stack Developer.",
    url: "https://domain-kamu.com", // Ganti dengan link Vercel kamu nanti
    siteName: "Reza Pahlepi Portfolio",
    images: [
      {
        url: "/ppgithub.jpg", // Gambar yang akan muncul saat link dibagikan
        width: 1200,
        height: 630,
        alt: "Reza Pahlepi Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Pahlepi | Full-Stack Developer",
    description: "Informatics Engineering Student at USU & Freelance Developer.",
    images: ["/ppgithub.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
