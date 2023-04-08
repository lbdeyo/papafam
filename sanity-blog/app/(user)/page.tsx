import {previewData} from "next/headers";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBloglist";
import {client} from "../../lib/sanity.client";
import {groq} from "next-sanity";

import {SpeakerWaveIcon} from "@heroicons/react/24/solid";

const query = groq`*[_type=='post'] {
   ...,
   author->,
   categories[]->
 } | order(_createdAt desc)
`;
export const revalidate = 60; //revalidate every 60 seconds
export default async function IndexPage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#C000FF]">
              Loading Preview Data...
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
