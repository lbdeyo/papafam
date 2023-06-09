import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({value}: any) => {
      return (
        <div
          className="relative  my-3
          md:my-5 left-0 mx-auto ">
          <img
            className=" object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({children}: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5 shadow">{children}</ul>
    ),
    number: ({children}: any) => (
      <ol className="mt-lg list-decimal shadow">{children}</ol>
    ),
  },
  block: {
    h1: ({children}: any) => (
      <h1 className="text-5xl py-10 font-bold shadow">{children}</h1>
    ),
    h2: ({children}: any) => (
      <h2 className="text-4xl py-10 font-bold shadow">{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className="text-3xl py-10 font-bold shadow">{children}</h3>
    ),
    h4: ({children}: any) => (
      <h4 className="text-2xl py-10 font-bold shadow">{children}</h4>
    ),

    blockquote: ({children}: any) => (
      <blockquote className="border-l-[#ffae00] border-l-4 pl-5 py-5 my-5 shadow">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className=" decoration-[#ffae00] hover:decoration-black">
          {children}
        </Link>
      );
    },
  },
};
