import "../styles/globals.css";
import React from "react";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-[#15232c]">{/* Navigation content */}</nav>
        {children}
      </body>
    </html>
  );
}
