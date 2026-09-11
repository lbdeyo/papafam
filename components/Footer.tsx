"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <footer className="mt-8 border-t border-ivory/10 md:mt-12">
      {!isContact ? (
        <div className="mx-auto grid max-w-frame gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <p className="font-serif text-4xl leading-none tracking-tight text-ivory md:text-5xl">
              Have a story
              <br />
              <em className="text-ivory/70">worth telling?</em>
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ivory px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="flex flex-col justify-between md:col-span-5 md:items-end md:text-right">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-ivory/55 md:justify-end">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-ivory">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-10 text-sm text-ivory/40 md:mt-0">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-frame px-5 py-10 md:px-8">
          <p className="text-sm text-ivory/40">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      )}
    </footer>
  );
}
