"use client";

import Image from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
  title: string;
  description?: string;
  href: string;
  imageSrc?: string;
  category?: string;
  size?: "featured" | "compact" | "default";
};

const sizeMinHeight = {
  featured: "min-h-[420px] md:min-h-[640px]",
  compact: "min-h-[320px] md:min-h-[310px]",
  default: "min-h-[360px] md:min-h-[430px]",
};

export default function PortfolioCard({
  title,
  description,
  href,
  imageSrc,
  category,
  size = "default",
}: PortfolioCardProps) {
  const featured = size === "featured";

  return (
    <Link
      href={href}
      aria-label={title}
      className="group relative block h-full overflow-hidden rounded-[1.75rem] bg-ink-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory/50"
    >
      <div className={`relative h-full overflow-hidden ${sizeMinHeight[size]}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <div className="absolute inset-0 bg-ink-raised" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        <div className={`absolute inset-x-0 bottom-0 ${featured ? "p-5 md:p-6" : "p-4 md:p-5"}`}>
          <div className="rounded-2xl bg-ink/70 px-4 py-3.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/10 backdrop-blur-md md:px-5 md:py-4">
            {category ? (
              <p className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-brass">
                {category}
              </p>
            ) : null}
            <h3
              className={`font-serif tracking-tight text-ivory ${
                featured ? "text-3xl md:text-5xl" : "text-2xl md:text-[1.65rem] md:leading-tight"
              }`}
            >
              {title}
            </h3>
            {description ? (
              <p className="mt-2 max-w-md text-sm text-ivory/75 transition-all duration-500 md:translate-y-1 md:text-base md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {description}
              </p>
            ) : null}
            <p className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ivory/80">
              View project
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
