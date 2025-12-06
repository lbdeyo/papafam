import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import React from "react";
import Script from "next/script";
import type { Metadata } from "next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BBJ534GQEW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BBJ534GQEW');
          `}
        </Script>
      </head>
      <body>
        <nav className="bg-black">{/* Navigation content */}</nav>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "L.B. Deyo, Designer",
    template: "%s | L.B. Deyo",
  },
  description:
    "Full service web design and full‑stack development. Motion graphics, video, print, and illustration.",
  openGraph: {
    title: "L.B. Deyo, Designer",
    description:
      "Full service web design and full‑stack development. Motion graphics, video, print, and illustration.",
    type: "website",
    url: "/",
    siteName: "L.B. Deyo",
    images: [
      {
        url: "/seo/social-preview-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L.B. Deyo, Designer",
    description:
      "Full service web design and full‑stack development. Motion graphics, video, print, and illustration.",
    images: ["/seo/social-preview-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
