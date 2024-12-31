import BackgroundOrchid from "@/components/BackgroundOrchid";
import BlogList from "@/components/BlogList";
import Jumbotron from "@/components/Jumbotron";
import {groq} from "next-sanity";
import {client} from "@/lib/sanity.client";
import ParallaxEffect from "@/components/ParallaxEffect";

export const revalidate = 30;

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(priority asc)
`;

export default async function TestPage() {
  const posts = await client.fetch(query);

  return (
    <>
      <ParallaxEffect />
      <div className="min-h-screen relative overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute w-full h-[100%] -top-10"
          style={{
            backgroundImage: 'url("/ocean-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "translate3d(0, var(--scroll), 0)",
          }}
        />

        {/* Overlay for opacity */}
        <div className="absolute w-full h-full bg-[#1c1c1c] opacity-0" />

        {/* Content */}
        <div className="relative flex flex-col items-center">
          <BackgroundOrchid />
          <div className="w-full max-w-screen-lg">
            <Jumbotron />
            <BlogList posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}
