import BackgroundOrchid from "@/components/BackgroundOrchid";
import BlogList from "@/components/BlogList";
import Jumbotron from "@/components/Jumbotron";
import {groq} from "next-sanity";
import {client} from "@/lib/sanity.client";

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
    <div className="min-h-screen bg-[#1c1c1c] relative">
      <div className="relative flex flex-col items-center">
        <BackgroundOrchid />
        <div className="w-full max-w-screen-lg">
          <Jumbotron />
          <BlogList posts={posts} />
        </div>
      </div>
    </div>
  );
}
