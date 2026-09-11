import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "L.B. Deyo, Designer",
  description: "Full service web design and full-stack web development",
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
