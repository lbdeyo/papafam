"use client";
import { useState } from "react";
import type { Post } from "../typings";
import urlFor from "../lib/urlFor";
import PortfolioGrid from "./PortfolioGrid";
import { BlogListFilter } from "./BlogListFilter";

type Props = {
  posts: Post[];
};

function categoryLabel(post: Post) {
  const first = post.categories?.[0];
  if (!first) return undefined;
  return typeof first === "string" ? first : first.title;
}

export default function BlogList({ posts }: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>("All");

  const safePosts = Array.isArray(posts) ? posts : [];

  const filteredPosts = safePosts.filter(
    (post) =>
      currentCategory === "All" ||
      post.categories?.some((category) =>
        typeof category === "string"
          ? category === currentCategory
          : category.title === currentCategory
      )
  );

  safePosts.sort((a, b) => a.priority - b.priority);

  return (
    <div id="work" className="relative w-full scroll-mt-24 fade-in-2">
      <div className="relative mb-8 flex flex-col gap-6 border-b border-ivory/10 pb-6 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
            Selected work
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-ivory md:text-5xl">
            Portfolio
          </h2>
        </div>
        <BlogListFilter
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          posts={safePosts}
        />
      </div>
      <div className="relative">
        {filteredPosts.length > 0 ? (
          <PortfolioGrid
            posts={filteredPosts.map((p) => ({
              title: p.title,
              slug: p.slug,
              excerpt: p.description,
              priority: p.priority,
              coverImage: urlFor(p.mainImage).url(),
              category: categoryLabel(p),
            }))}
          />
        ) : (
          <div className="py-16 text-center">
            <p className="text-ivory/50">No work in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
