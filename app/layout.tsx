import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
// import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ABOHADID",
  description:
    "",
  generator: "Next.js",
  applicationName: "ABOHADID",
  keywords: [
    "freelance",
    "developer",
    "Film Producer",
    "production",
    "modelling",
    "model",
    "photography",
    "fashion",
    "creative",
    "portfolio",
    "designer portfolio",
    "creative developer portfolio",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "ABOHADID",
    description:
      "Film Production services and Modeling management. Based in Saudi Arabia",
    url: "https://www.abohadid.com",
    siteName: "www.abohadid.com",
    images: [
      {
        url: "https://github.com/mostafamaa1/folio-v1/assets/81513055/bc1e3a1b-c42b-4b2e-b5f7-ec779efc0e81",
        width: 1200,
        height: 630,
        alt: "ABOHADID",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABOHADID",
    description:
      "Film Production services and Modeling management. Based in Saudi Arabia",
    creator: "m1dev",
    creatorId: "1243720976552144897",
    images: [
      "../public/hadid.JPG",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
          {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
