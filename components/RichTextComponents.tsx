import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative my-10 overflow-hidden rounded-2xl">
          <img
            className="h-auto w-full object-contain"
            src={urlFor(value).url()}
            alt="Project image"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 ml-6 list-disc space-y-3 text-ivory/75">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 ml-6 list-decimal space-y-3 text-ivory/75">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="mb-6 mt-12 font-serif text-4xl tracking-tight text-ivory">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="mb-5 mt-12 font-serif text-3xl tracking-tight text-ivory">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mb-4 mt-10 font-serif text-2xl tracking-tight text-ivory">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mb-3 mt-8 font-serif text-xl tracking-tight text-ivory">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-5 text-ivory/75">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 border-l-2 border-brass pl-5 font-serif text-xl italic text-ivory/85">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-ivory underline decoration-brass/70 underline-offset-4 transition-colors hover:decoration-ivory"
        >
          {children}
        </Link>
      );
    },
  },
};
