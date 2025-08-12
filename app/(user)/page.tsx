
import BlogList from "@/components/BlogList";
import type { Metadata } from "next";
import Jumbotron from "@/components/Jumbotron";
// import ShowreelVideo from "@/components/ShowreelVideo";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio of web design, development, motion graphics, and more by L.B. Deyo.",
  openGraph: {
    title: "L.B. Deyo — Portfolio",
    description: "Web design and full‑stack development with motion graphics, video, print, and illustration.",
    images: [
      {
        url: "/seo/social-preview-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L.B. Deyo — Portfolio",
    description: "Web design and full‑stack development with motion graphics, video, print, and illustration.",
    images: ["/seo/social-preview-image.jpg"],
  },
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(priority asc)
`;

export default async function TestPage() {
  let posts = [];

  try {
    posts = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Continue with empty posts array if fetch fails
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative w-full">
        <div className="w-full max-w-screen-lg mx-auto px-4 md:px-0 py-6 md:py-10">
          <Jumbotron />
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
}
