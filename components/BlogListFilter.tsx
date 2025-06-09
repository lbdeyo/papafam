"use client";
import { Dispatch, SetStateAction } from "react";
import type { Category, Post } from "../typings";

interface BlogListFilterProps {
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
  posts: Post[];
}

export function BlogListFilter({
  currentCategory,
  setCurrentCategory,
  posts,
}: BlogListFilterProps) {
  const uniqueCategories = [
    "All",
    ...Array.from(
      new Set(
        posts.flatMap(
          (post) =>
            post.categories?.map((category: Category) =>
              typeof category === "string" ? category : category.title
            ) || []
        )
      )
    ),
  ] as Category[];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {uniqueCategories.map((category: Category) => (
        <button
          key={typeof category === "string" ? category : category.title}
          onClick={() =>
            setCurrentCategory(
              typeof category === "string" ? category : category.title
            )
          }
          className={`portfolio-filter-btn text-sm transition-colors ${currentCategory ===
              (typeof category === "string" ? category : category.title)
              ? "text-[#ffae00]"
              : "text-white hover:text-[#ffae00]"
            }`}>
          {typeof category === "string" ? category : category.title}
        </button>
      ))}
    </div>
  );
}
