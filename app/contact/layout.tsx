import "../../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "L.B. Deyo, Designer",
  description: "Full service web design and full-stack web development",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
