"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type BentoCardProps = {
    title: string;
    description?: string;
    href?: string;
    imageSrc?: string;
    className?: string;
    children?: React.ReactNode;
};

export default function BentoCard({
    title,
    description,
    href,
    imageSrc,
    className,
    children,
}: BentoCardProps) {
    const content = (
        <div
            className={clsx(
                "relative w-full h-full overflow-hidden rounded-2xl",
                "bg-zinc-900/70 border border-white/10 ring-1 ring-white/5",
                "backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_30px_-10px_rgba(0,0,0,0.9)]",
                "hover:ring-white/15 hover:border-white/20 transition-all duration-300",
                "flex flex-col h-full",
                className
            )}
        >
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover opacity-35"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority={false}
                />
            ) : (
                <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_-10%,rgba(255,255,255,0.07),transparent_40%),radial-gradient(1200px_circle_at_110%_120%,rgba(255,255,255,0.06),transparent_40%)]" />
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
            <div className="absolute -top-1/4 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            <div className="relative z-10 flex-1 w-full flex flex-col justify-between p-5">
                <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-sm mb-1">
                    {title}
                </h3>
                {description ? (
                    <p className="mt-1 text-sm md:text-base text-zinc-300 leading-snug">
                        {description}
                    </p>
                ) : null}
                {children}
            </div>
        </div>
    );

    if (href) {
        return (
            <Link aria-label={title} href={href} className="block focus:outline-none">
                {content}
            </Link>
        );
    }

    return content;
}


