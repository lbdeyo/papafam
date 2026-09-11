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

  const labelMap: Record<string, string> = {
    "Web Development": "Web",
    "Motion Graphics": "Motion",
    Video: "Video",
    "Editorial Graphic Design": "Editorial",
    "Advertising Graphic Design": "Advertising",
    Illustration: "Illustration",
    All: "All",
  };

  const counts = uniqueCategories.reduce<Record<string, number>>((acc, cat) => {
    const full = typeof cat === "string" ? cat : cat.title;
    if (full === "All") {
      acc[full] = posts.length;
    } else {
      acc[full] = posts.filter((p) =>
        p.categories?.some((c: Category) =>
          typeof c === "string" ? c === full : c.title === full
        )
      ).length;
    }
    return acc;
  }, {});

  return (
    <nav className="-mx-1 max-w-full overflow-x-auto">
      <div className="flex gap-1 px-1 md:flex-wrap md:justify-end">
        {uniqueCategories.map((category: Category) => {
          const full = typeof category === "string" ? category : category.title;
          const label = labelMap[full] ?? full;
          const isActive = currentCategory === full;
          return (
            <button
              key={full}
              type="button"
              onClick={() => setCurrentCategory(full)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[12px] tracking-[0.04em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40 ${
                isActive
                  ? "bg-ivory text-ink"
                  : "text-ivory/55 hover:bg-ivory/10 hover:text-ivory"
              }`}
              title={full}
            >
              {label}
              <span className={`ml-1.5 ${isActive ? "text-ink/50" : "text-ivory/35"}`}>
                {counts[full] ?? 0}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
