"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../public/lb-logo.svg";
import { NAV } from "@/lib/site";

function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ivory/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-frame items-center justify-between px-5 py-3.5 md:px-8">
        <Link
          href="/"
          aria-label="L.B. Deyo home"
          className="group relative z-10 inline-flex"
        >
          <Image
            className="h-8 w-auto origin-left transition duration-300 ease-out md:h-9 motion-safe:group-hover:scale-[1.06] group-hover:brightness-0 group-hover:invert group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.45)]"
            src={Logo}
            width={200}
            height={60}
            alt="L.B. Deyo, Designer"
            priority
          />
        </Link>
        <nav className="flex items-center gap-0.5 md:gap-1">
          {NAV.map((item) => {
            const isActive =
              item.href === "/about" || item.href === "/contact"
                ? pathname === item.href
                : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors md:px-4 ${
                  isActive
                    ? "text-ivory"
                    : "text-ivory/55 hover:text-ivory"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-1 hidden rounded-full bg-ember px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-ember-deep sm:inline-block"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
