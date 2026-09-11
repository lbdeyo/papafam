import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
