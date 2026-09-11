import { client, staticClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import type { Post } from "@/typings";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";

type DeferredParams = Promise<{ slug: string }>;

export const revalidate = 30;

export async function generateMetadata({ params }: { params: DeferredParams }): Promise<Metadata> {
  const { slug } = await params;
  const query = groq`*[_type =='post' && slug.current ==$slug][0]{title, description, mainImage}`;
  try {
    const data = await client.fetch(query, { slug });
    const title = data?.title ? `${data.title} — L.B. Deyo` : "Post — L.B. Deyo";
    const description = data?.description || "Portfolio project";
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [OG_IMAGE.url],
      },
    };
  } catch {
    return {
      title: "Post — L.B. Deyo",
      description: "Portfolio project",
      openGraph: { images: [{ url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt }] },
      twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
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

type Neighbor = {
  title: string;
  slug: { current: string };
  mainImage?: Post["mainImage"];
};

export default async function Page({ params }: { params: DeferredParams }) {
  try {
    const { slug } = await params;
    const query = groq`*[_type =='post' && slug.current ==$slug][0]
    {
      ...,
      author->,
      categories[]-> 
    }`;

    const neighborsQuery = groq`*[_type=='post']{title, slug, mainImage, priority} | order(priority asc)`;

    const [post, neighbors]: [Post, Neighbor[]] = await Promise.all([
      client.fetch(query, { slug }),
      client.fetch(neighborsQuery),
    ]);

    if (!post) {
      notFound();
    }

    const currentIndex = neighbors.findIndex((item) => item.slug?.current === slug);
    const nextProject =
      currentIndex >= 0 ? neighbors[(currentIndex + 1) % neighbors.length] : null;
    const showNext = nextProject && nextProject.slug?.current !== slug;

    const categories =
      post.categories
        ?.map((category) => (typeof category === "string" ? category : category.title))
        .filter(Boolean) ?? [];

    return (
      <div className="fade-in-2">
        <section className="relative w-full pt-20">
          <div className="relative h-[48vh] min-h-[320px] w-full md:h-[62vh]">
            <Image
              className="object-cover object-top"
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
          </div>
        </section>

        <div className="mx-auto w-full max-w-frame px-5 py-12 md:px-8 md:py-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory/55 hover:text-ivory"
          >
            ← All work
          </Link>
          {categories.length > 0 ? (
            <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-brass">
              {categories.join(" · ")}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.95] tracking-tight text-ivory sm:text-6xl md:text-7xl">
            {post.title}
          </h1>
          {post.description ? (
            <p className="mt-5 max-w-2xl text-lg text-ivory/65">{post.description}</p>
          ) : null}

          <article className="mx-auto mt-14 max-w-3xl text-lg leading-relaxed text-ivory/80">
            <PortableText value={post.body} components={RichTextComponents} />
          </article>

          {post.youtube && (
            <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[1.75rem] border border-ivory/10">
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

          {showNext && nextProject ? (
            <Link
              href={`/post/${nextProject.slug.current}`}
              className="group mt-20 flex flex-col overflow-hidden rounded-[1.75rem] border border-ivory/10 bg-ink-raised md:flex-row"
            >
              <div className="relative min-h-[220px] md:w-1/2">
                {nextProject.mainImage ? (
                  <Image
                    src={urlFor(nextProject.mainImage).url()}
                    alt={nextProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Next project</p>
                <p className="mt-4 font-serif text-3xl tracking-tight text-ivory md:text-5xl">
                  {nextProject.title}
                </p>
                <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-ivory/60">
                  View project →
                </p>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }
}
