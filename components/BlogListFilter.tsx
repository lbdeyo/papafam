"use client";

interface BlogListFilterProps {
  currentCategory: Category;
  setCurrentCategory: (category: Category) => void;
  posts: Post[];
}

export function BlogListFilter({
  currentCategory,
  setCurrentCategory,
  posts,
}: BlogListFilterProps) {
  const uniqueCategories = [
    "All",
    "Web Development",
    "Illustration",
    "Advertising Graphic Design",
    "Editorial Graphic Design",
    "Video",
    "Motion Graphics",
    "AI Generated Art",
  ] as Category[];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {uniqueCategories.map((category) => (
        <button
          key={category}
          onClick={() => setCurrentCategory(category)}
          className={`text-sm transition-colors ${
            currentCategory === category
              ? "text-[#ffae00]"
              : "text-white hover:text-[#ffae00]"
          }`}>
          {category}
        </button>
      ))}
    </div>
  );
}
