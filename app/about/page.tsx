import Link from "next/link";
import type { Metadata } from "next";
import { CLIENTS, OG_IMAGE, SITE } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About",
  description: "About L.B. Deyo — designer and front‑end developer.",
  openGraph: {
    title: "About — L.B. Deyo",
    description: "Designer and front‑end developer focused on performance and UX.",
    type: "website",
    url: "https://lbdeyo.com/about",
    siteName: SITE.name,
    images: [{ url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt, type: OG_IMAGE.type }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — L.B. Deyo",
    description: "Designer and front‑end developer focused on performance and UX.",
    images: [OG_IMAGE.url],
  },
};

const PROCESS = [
  {
    index: "01",
    title: "Find the words people search",
    body: "I start with Google Ads and Analytics to shape an SEO strategy and keyword set. The site is built to be found — targeting the language your audience already uses.",
  },
  {
    index: "02",
    title: "Design until it feels inevitable",
    body: "Mockups and brand assets in Photoshop, Illustrator, or Figma. This phase captures the vision and builds in UX so the thing is intuitive before a line of code is written.",
  },
  {
    index: "03",
    title: "Build it in Next.js & React",
    body: "Reusable components, fast rendering with SSR and static generation, and room to grow. The result is a site that behaves like a product, not a brochure.",
  },
  {
    index: "04",
    title: "Iterate in the open",
    body: "Close collaboration, short loops, no surprises. Feedback lands while it can still change the work — so the finished site is actually yours.",
  },
];

async function About() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto w-full max-w-frame px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="fade-in-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
            About
          </p>
          <h1 className="mt-5 max-w-[16ch] font-serif text-5xl leading-[0.95] tracking-tight text-ivory md:text-7xl">
            A designer who can also{" "}
            <em className="text-ivory/70">ship the site.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/70 md:text-xl">
            I&apos;m {SITE.name} — a front-end developer, designer, and digital
            strategist. I&apos;ve made work for {CLIENTS.slice(0, -1).join(", ")}, and{" "}
            {CLIENTS[CLIENTS.length - 1]}. Now it&apos;s time to tell yours.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-12 md:gap-5">
          <article className="rounded-[1.75rem] border border-ivory/10 bg-ink-raised p-7 md:col-span-7 md:p-10">
            <h2 className="font-serif text-3xl tracking-tight text-ivory md:text-4xl">
              The whole stack, one studio
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ivory/70 md:text-lg">
              <p>
                My background spans web development, UX/UI, and digital marketing.
                That mix means the work is visually striking <em>and</em> built to
                perform — found, fast, and easy to use.
              </p>
              <p>
                I move between Adobe Creative Suite and modern JavaScript
                frameworks without treating either as a specialty silo. Design
                decisions survive contact with code. Code is held to the same
                standard as the comps.
              </p>
            </div>
          </article>

          <aside className="rounded-[1.75rem] border border-ivory/10 bg-ember p-7 text-white md:col-span-5 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
              Certifications
            </p>
            <p className="mt-5 font-serif text-2xl leading-snug md:text-3xl">
              Meta Certified in JavaScript, HTML &amp; CSS, and Advanced React.
            </p>
            <p className="mt-4 font-serif text-2xl leading-snug text-white/85 md:text-3xl">
              Google Certified in Ads and Analytics.
            </p>
          </aside>
        </div>

        <div className="mt-20 md:mt-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
            Process
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-ivory md:text-5xl">
            How a site gets made
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
            {PROCESS.map((step) => (
              <li
                key={step.index}
                className="rounded-[1.75rem] border border-ivory/10 bg-ink-raised p-7 md:p-8"
              >
                <p className="font-serif text-sm italic text-brass">{step.index}</p>
                <h3 className="mt-4 font-serif text-2xl tracking-tight text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60 md:text-base">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 rounded-[1.75rem] border border-ivory/10 bg-ink-raised px-7 py-10 md:mt-20 md:px-12 md:py-14">
          <p className="max-w-3xl font-serif text-2xl leading-snug tracking-tight text-ivory md:text-3xl">
            You don&apos;t just get a website. You get a platform designed for
            visibility, usability, and a long life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-ivory px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
          >
            Let&apos;s get started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
