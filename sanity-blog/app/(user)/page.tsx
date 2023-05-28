import BlogList from "../../components/BlogList";
import {client} from "../../lib/sanity.client";
import {groq} from "next-sanity";

const query = groq`*[_type=='post'] {
   ...,
   author->,
   categories[]->
 } | order(_createdAt desc)
`;
export const revalidate = 60; //revalidate every 60 seconds
export default async function IndexPage() {
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
