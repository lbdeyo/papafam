import BlogList from "@/components/BlogList";
import type { Metadata } from "next";
import Jumbotron from "@/components/Jumbotron";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { OG_IMAGE } from "@/lib/site";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio of web design, development, motion graphics, and more by L.B. Deyo.",
  openGraph: {
    title: "L.B. Deyo — Portfolio",
    description: "Web design and full‑stack development with motion graphics, video, print, and illustration.",
    type: "website",
    url: "https://lbdeyo.com",
    siteName: "L.B. Deyo",
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: OG_IMAGE.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L.B. Deyo — Portfolio",
    description: "Web design and full‑stack development with motion graphics, video, print, and illustration.",
    images: [OG_IMAGE.url],
  },
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(priority asc)
`;

export default async function HomePage() {
  let posts = [];

  try {
    posts = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-frame px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-28">
        <Jumbotron />
        <div className="mt-20 md:mt-28">
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
}
