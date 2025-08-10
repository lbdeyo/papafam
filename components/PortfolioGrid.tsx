import PortfolioCard from "./PortfolioCard";

type PortfolioGridProps = {
    posts: Array<{
        title?: string;
        slug?: { current: string } | string;
        excerpt?: string;
        priority?: number;
        coverImage?: string;
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

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
            {allPosts.map((post, index) => {
                const overlayPalette = [
                    "bg-red-700",
                    "bg-[#2c3a24]",
                    "bg-blue-900",
                    "bg-amber-900",
                    "bg-neutral-900",
                ];
                const borderPalette = [
                    "border-red-800",
                    "border-[#3a4a2e]",
                    "border-blue-800",
                    "border-amber-800",
                    "border-neutral-800",
                ];
                const overlayClass = overlayPalette[index % overlayPalette.length];
                const borderClass = borderPalette[index % borderPalette.length];
                return (
                    <div key={`${toSlugString(post.slug)}-${index}`}>
                        <PortfolioCard
                            title={post.title || "Untitled"}
                            description={post.excerpt}
                            href={`/post/${toSlugString(post.slug)}`}
                            imageSrc={post.coverImage}
                            overlayClassName={overlayClass}
                            borderClassName={borderClass}
                        />
                    </div>
                );
            })}
        </div>
    );
}


