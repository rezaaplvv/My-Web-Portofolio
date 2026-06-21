import './globals.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import PageTransitionProvider from "./components/PageTransitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reza Pahlepi | Full-Stack Developer", // Diperbarui agar lebih profesional
  description: 'Full-Stack Developer building modern, secure, and user-centric web solutions for businesses and startups. Based in Medan, Indonesia.',
  keywords: ['Reza Pahlepi', 'Full-Stack Developer', 'Web Developer Medan', 'Next.js Developer', 'Laravel Developer'],
  authors: [{ name: "Reza Pahlepi" }],
  openGraph: {
    title: "Reza Pahlepi - Digital Portfolio",
    description: "Full-Stack Developer building modern, secure, and user-centric web solutions.", // Diperbarui tanpa unsur kuliah
    url: "https://www.rezapahlepi.me", // Diperbarui dengan domain asli kamu
    siteName: "Reza Pahlepi Portfolio",
    images: [
      {
        url: "/ppgithub.jpg", 
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
    description: "Focused on performance, scalability, and clean design.", // Diperbarui sesuai opsi 3 kemarin
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
        <CustomCursor />
        <PageTransitionProvider>
          {children}
        </PageTransitionProvider>
      </body>
    </html>
  );
}