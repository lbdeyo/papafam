import Link from "next/link";
import { CAPABILITIES, CLIENTS, SITE } from "@/lib/site";
import ShowreelCard from "./ShowreelCard";

function Jumbotron() {
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="fade-in-2">
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12 md:gap-5">
        <div className="flex flex-col justify-between rounded-[1.75rem] border border-ivory/10 bg-ink-raised p-6 sm:p-8 md:col-span-7 md:p-10 lg:p-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
              Designer · {SITE.location}
            </p>
            <h1 className="mt-6 max-w-[12ch] font-serif text-[2.7rem] leading-[0.95] tracking-tight text-ivory sm:text-6xl md:text-[4.4rem] lg:text-[5rem]">
              I design and build the things people{" "}
              <em className="text-ivory/75">look at twice.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base text-ivory/70 sm:text-lg">
              Independent designer and developer. Websites, motion, video,
              branding, illustration — and the systems underneath them.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-ember px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-ember-deep"
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center rounded-full border border-ivory/20 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5"
            >
              View the work
            </Link>
          </div>
        </div>

        <ShowreelCard />
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-ivory/10 bg-ink-raised py-5 md:mt-5">
        <div className="marquee-track flex w-max gap-0">
          {marqueeClients.map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="flex items-center px-6 text-[12px] font-medium uppercase tracking-[0.28em] text-ivory/45 md:px-10"
            >
              {client}
              <span className="ml-6 text-ember/80 md:ml-10" aria-hidden>
                ✶
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-5 md:grid-cols-4 md:gap-5">
        {CAPABILITIES.map((item) => (
          <article
            key={item.index}
            className="rounded-[1.75rem] border border-ivory/10 bg-ink-raised p-6 transition-colors hover:border-ivory/20 md:p-7"
          >
            <p className="font-serif text-sm italic text-brass">{item.index}</p>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ivory">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ivory/60">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Jumbotron;
