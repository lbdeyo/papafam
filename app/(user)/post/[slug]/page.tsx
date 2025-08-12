import { client, staticClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import type { Post } from "@/typings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const query = groq`*[_type =='post' && slug.current ==$slug][0]{title, description, mainImage}`;
  try {
    const data = await client.fetch(query, { slug });
    const title = data?.title ? `${data.title} — L.B. Deyo` : "Post — L.B. Deyo";
    const description = data?.description || "Portfolio project";
    const imageUrl = data?.mainImage ? urlFor(data.mainImage).url() : "/seo/social-preview-image.jpg";
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: imageUrl }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch {
    return {
      title: "Post — L.B. Deyo",
      description: "Portfolio project",
      openGraph: { images: [{ url: "/seo/social-preview-image.jpg" }] },
      twitter: { card: "summary_large_image", images: ["/seo/social-preview-image.jpg"] },
    };
  }
}

export async function generateStaticParams() {
  try {
    const query = groq`*[_type=='post']
      {
      slug
      }`;

    const slugs: { slug: { current: string } }[] = await staticClient.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
    return slugRoutes.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Page({ params: { slug } }: Props) {
  try {
    const query = groq`*[_type =='post' && slug.current ==$slug][0]
    {
      ...,
      author->,
      categories[]-> 
    }`;

    const post: Post = await client.fetch(query, { slug });

    if (!post) {
      notFound();
    }

    return (
      <div className="fade-in-2">
        <section className="relative w-full">
          <div className="w-full max-w-screen-lg mx-auto px-4 md:px-0 pt-20 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {/* Hero image card */}
            <div className="md:col-span-6 rounded-2xl overflow-hidden bg-black/40 border-2 border-black shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_-20px_rgba(0,0,0,0.85)]">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
                <Image
                  className="object-cover"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                  priority
                />
              </div>
            </div>

            {/* Title/Body card */}
            <article className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-neutral-900 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">{post.title}</h1>
              <div className="prose prose-invert prose-zinc max-w-none">
                <PortableText value={post.body} components={RichTextComponents} />
              </div>
            </article>

            {post.youtube && (
              <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-neutral-900 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src={post.youtube}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }
}
