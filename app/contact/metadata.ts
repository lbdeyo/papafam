import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with L.B. Deyo for web design and development.",
    openGraph: {
        title: "Contact — L.B. Deyo",
        description: "Start your project: web design, development, motion graphics, and more.",
        images: [{ url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt, type: OG_IMAGE.type }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact — L.B. Deyo",
        description: "Start your project: web design, development, motion graphics, and more.",
        images: [OG_IMAGE.url],
    },
};


