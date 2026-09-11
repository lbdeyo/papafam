import PortfolioCard from "./PortfolioCard";

type PortfolioGridProps = {
  posts: Array<{
    title?: string;
    slug?: { current: string } | string;
    excerpt?: string;
    priority?: number;
    coverImage?: string;
    category?: string;
  }>;
};

function toSlugString(slug: { current: string } | string | undefined) {
  if (!slug) return "";
  if (typeof slug === "string") return slug;
  return slug.current;
}

export default function PortfolioGrid({ posts }: PortfolioGridProps) {
  const allPosts = [...(posts || [])].sort(
    (a, b) => (a.priority ?? 999) - (b.priority ?? 999)
  );

  const [featured, second, third, ...remainder] = allPosts;

  return (
    <div className="space-y-4 md:space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {featured ? (
          <div className="md:col-span-8">
            <PortfolioCard
              size="featured"
              title={featured.title || "Untitled"}
              description={featured.excerpt}
              href={`/post/${toSlugString(featured.slug)}`}
              imageSrc={featured.coverImage}
              category={featured.category}
            />
          </div>
        ) : null}
        {second || third ? (
          <div className="grid gap-4 md:col-span-4 md:grid-rows-2 md:gap-5">
            {second ? (
              <PortfolioCard
                size="compact"
                title={second.title || "Untitled"}
                description={second.excerpt}
                href={`/post/${toSlugString(second.slug)}`}
                imageSrc={second.coverImage}
                category={second.category}
              />
            ) : null}
            {third ? (
              <PortfolioCard
                size="compact"
                title={third.title || "Untitled"}
                description={third.excerpt}
                href={`/post/${toSlugString(third.slug)}`}
                imageSrc={third.coverImage}
                category={third.category}
              />
            ) : null}
          </div>
        ) : null}
      </div>

      {remainder.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {remainder.map((post, index) => (
            <PortfolioCard
              key={`${toSlugString(post.slug)}-${index}`}
              title={post.title || "Untitled"}
              description={post.excerpt}
              href={`/post/${toSlugString(post.slug)}`}
              imageSrc={post.coverImage}
              category={post.category}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
