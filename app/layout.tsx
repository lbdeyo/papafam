import "../styles/globals.css";
import React from "react";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans">
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
      <body className="font-cormorant">
        <nav className="bg-[#15232c]">{/* Navigation content */}</nav>
        {children}
      </body>
    </html>
  );
}
