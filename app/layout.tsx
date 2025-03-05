import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cuberto | Digital Product Agency",
    template: "%s | Cuberto | Digital Product Agency",
  },
  authors: [{ name: "Prajyot Khadse", url: "https://github.com/Rajyo" }],
  description: "Cuberto is a UI/UX design agency based in USA. We specialise in UI/UX design, branding, web, and mobile development.",
  keywords:
    "Cuberto, Nextjs, Tailwind CSS, Framer Motion, UI/UX design, branding, web, mobile development, USA, design agency",
  openGraph: {
    title: "Cuberto",
    description: "Cuberto is a UI/UX design agency based in USA. We specialise in UI/UX design, branding, web, and mobile development.",
    type: "website",
    url: "https://assignment-frontend-three-ashen.vercel.app/",
    siteName: "Cuberto",
    images: [
      "https://res.cloudinary.com/djghl1dtn/image/upload/v1741200830/s0ah1geqtvb51jojh4jb.png",
    ],
  },
  twitter: {
    title: "Cuberto",
    description: "Cuberto is a UI/UX design agency based in USA. We specialise in UI/UX design, branding, web, and mobile development.",
    images: [
      "https://res.cloudinary.com/djghl1dtn/image/upload/v1741200830/s0ah1geqtvb51jojh4jb.png",
    ],
    card: "summary_large_image",
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
        <SmoothScroll>
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
