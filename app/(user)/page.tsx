import BackgroundOrchid from "@/components/BackgroundOrchid";
import BlogList from "@/components/BlogList";
import Jumbotron from "@/components/Jumbotron";
import ShowreelVideo from "@/components/ShowreelVideo";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

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
    <div className="min-h-screen relative">
      {/* Content */}
      <div className="relative flex flex-col items-center">
        <ShowreelVideo />
        <div className="relative w-full">
          <BackgroundOrchid />
          <div className="w-full max-w-screen-lg mx-auto">
            <Jumbotron />
            <BlogList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
