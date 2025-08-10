"use client";

import Image from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
    title: string;
    description?: string;
    href: string;
    imageSrc?: string;
    overlayClassName?: string;
    borderClassName?: string;
};

export default function PortfolioCard({
    title,
    description,
    href,
    imageSrc,
    overlayClassName,
    borderClassName,
}: PortfolioCardProps) {
    return (
        <Link
            href={href}
            aria-label={title}
            className="group block focus:outline-none"
        >
            <div
                className={`relative overflow-hidden rounded-2xl border-4 ${borderClassName ?? "border-black"} bg-black shadow-none ring-0 outline-none`}
            >
                {/* Fixed height; avoid inheriting full viewport height */}
                <div
                    className="relative w-full overflow-hidden min-h-[480px] md:min-h-[540px] lg:min-h-[630px]"
                >
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={1600}
                            height={900}
                            className="absolute inset-0 w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                        />
                    ) : null}

                    {/* Flat color overlay to tint the background image */}
                    {overlayClassName ? (
                        <div
                            className={`absolute inset-0 mix-blend-multiply ${overlayClassName} opacity-100 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}
                        />
                    ) : null}

                    {/* Removed interior edge gradient overlay for cleaner edges */}

                    {/* Content aligned to midpoint with protective backdrop on hover */}
                    <div className="absolute inset-x-0 top-[40%] p-5">
                        <div className="rounded-xl bg-transparent group-hover:bg-black/80 transition-colors group-hover:backdrop-blur-[2px] inline-block px-4 py-3">
                            <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                                {title}
                            </h3>
                            {description ? (
                                <p className="mt-2 text-sm md:text-base text-zinc-200 leading-snug transition-all duration-300 ease-out">
                                    {description}
                                </p>
                            ) : null}

                            {/* CTA appears on hover */}
                            <div className="mt-3 flex items-center gap-2 text-white/90 transition-colors">
                                <span className="text-sm font-medium">View project</span>
                                <svg
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 12h14M13 5l7 7-7 7"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}


