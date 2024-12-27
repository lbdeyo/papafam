import {client} from "@/lib/sanity.client";
import {groq} from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import {PortableText} from "@portabletext/react";
import {RichTextComponents} from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;
export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {
    slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}
async function Post({params: {slug}}: Props) {
  const query = groq`*[_type =='post' && slug.current ==$slug][0]
  {
    ...,
    author->,
    categories[]-> 
  }`;

  const post: Post = await client.fetch(query, {slug});

  return (
    <div className="fade-in-2">
      <article className="px-10 pb-28 mt-24 max-w-4xl mx-auto">
        <section className="space-y-5 text-white">
          <div className="relative min-h-[600px]">
            <Image
              className="object-cover object-center mx-auto rounded-xl"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              priority
            />
          </div>
        </section>
        <div className="my-5 max-w-2xl mx-auto">
          <div className="mb-5">
            <h1 className="text-4xl mb-0 pb-0">{post.title}</h1>
          </div>
          <PortableText value={post.body} components={RichTextComponents} />
        </div>

        {post.youtube && (
          <div className="video-container mt-5">
            <p>Watch the video.</p>
            <iframe
              width="464"
              height="315"
              src={post.youtube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"></iframe>
          </div>
        )}
      </article>
    </div>
  );
}

export default Post;
