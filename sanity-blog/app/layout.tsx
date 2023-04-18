import "../styles/globals.css";
export const metadata = {
  title: "| L.B. Deyo, Designer |",
  description: "Full service web design and full-stack web development",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
