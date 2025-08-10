"use client";
import { useState } from "react";
import type { Post } from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";
import { BlogListFilter } from "./BlogListFilter";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>("All");

  // Ensure posts is always an array
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
    <div id="portfolio" className="w-full fade-in-2 relative">
      <div className="pb-4 mx-4 md:mx-0 relative">
        <h1 className="text-3xl md:text-4xl font-semibold fade-in-4 z-10">Portfolio</h1>
        <BlogListFilter
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          posts={safePosts}
        />
      </div>
      <div className="mx-2 md:mx-0 relative">
        {filteredPosts.length > 0 ? (
          <PortfolioGrid
            posts={filteredPosts.map((p) => ({
              title: p.title,
              slug: p.slug,
              excerpt: p.description,
              priority: p.priority,
              coverImage: urlFor(p.mainImage).url(),
            }))}
          />
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-400">No posts available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
