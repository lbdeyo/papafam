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

  // Map long names to shorter labels for chips
  const labelMap: Record<string, string> = {
    "Web Development": "Web Dev",
    "Motion Graphics": "Motion",
    Video: "Video",
    "Editorial Graphic Design": "Editorial",
    "Advertising Graphic Design": "Advertising",
    Illustration: "Illustration",
    All: "All",
  };

  // Precompute counts per category (and All)
  const counts = uniqueCategories.reduce<Record<string, number>>((acc, cat) => {
    const full = typeof cat === "string" ? cat : cat.title;
    if (full === "All") {
      acc[full] = posts.length;
    } else {
      acc[full] = posts.filter((p) =>
        p.categories?.some((c: any) => (typeof c === "string" ? c === full : c.title === full))
      ).length;
    }
    return acc;
  }, {});

  return (
    <nav className="sticky top-[64px] z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 -mx-2 md:mx-0">
      <div className="px-2 md:px-0 py-3">
        <div className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory md:flex-wrap md:overflow-visible">
          {uniqueCategories.map((category: Category) => {
            const full = typeof category === "string" ? category : category.title;
            const label = labelMap[full] ?? full;
            const isActive = currentCategory === full;
            return (
              <button
                key={label}
                onClick={() => setCurrentCategory(full)}
                className={`snap-start shrink-0 px-3.5 py-2 rounded-full text-sm font-medium border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 ${isActive
                  ? "bg-white text-black border-white"
                  : "bg-black/40 text-white/80 border-white/10 hover:border-white/30"
                  }`}
                title={full}
              >
                {label}
                <span className={`ml-2 ${isActive ? "text-black/70" : "text-white/60"}`}>{counts[full] ?? 0}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
