"use client";
// import {Canvas} from "@react-three/fiber";
import BlogList from "../../components/BlogList";
import {client} from "../../lib/sanity.client";
import {groq} from "next-sanity";
// import {StarField} from "@/components/StarField";

const query = groq`*[_type=='post'] {
   ...,
   author->,
   categories[]->
 } | order(_createdAt desc)
`;
export const revalidate = 60; //revalidate every 60 seconds
export default async function IndexPage() {
  const posts = await client.fetch(query);

  return (
    <div>
      {/* <div
        id="threeCanvas"
        className="  w-full overflow-hidden absolute left-0 right-0 top-0 bottom-0 -z-10 opacity-70 hidden lg:block  ">
        <StarField />
      </div> */}
      <div className=" z-auto">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
