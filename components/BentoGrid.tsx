import BentoCard from "./BentoCard";

type BentoGridProps = {
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

export default function BentoGrid({ posts }: BentoGridProps) {
    const allPosts = [...(posts || [])].sort(
        (a, b) => (a.priority ?? 999) - (b.priority ?? 999)
    );

    const groups: typeof allPosts[] = [];
    for (let i = 0; i < allPosts.length; i += 6) {
        groups.push(allPosts.slice(i, i + 6));
    }

    return (
        <div className="space-y-6 md:space-y-8">
            {groups.map((group, gi) => {
                const [a, b, c, d, e, f] = group;
                return (
                    <div
                        key={`group-${gi}`}
                        className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px] xl:auto-rows-[220px]"
                    >
                        {/* Feature tile */}
                        {a && (
                            <div className="md:col-span-4 md:row-span-2 h-full">
                                <BentoCard
                                    title={a.title || "Untitled"}
                                    description={a.excerpt}
                                    href={`/post/${toSlugString(a.slug)}`}
                                    imageSrc={a.coverImage}
                                />
                            </div>
                        )}

                        {/* Stacked secondary column */}
                        <div className="md:col-span-2 md:row-span-2 grid grid-rows-2 gap-4 md:gap-6 h-full">
                            {b && (
                                <BentoCard
                                    title={b.title || "Project"}
                                    description={b.excerpt}
                                    href={`/post/${toSlugString(b.slug)}`}
                                    imageSrc={b.coverImage}
                                />
                            )}
                            {c && (
                                <BentoCard
                                    title={c.title || "Project"}
                                    description={c.excerpt}
                                    href={`/post/${toSlugString(c.slug)}`}
                                    imageSrc={c.coverImage}
                                />
                            )}
                        </div>

                        {/* Tertiary row under feature */}
                        {d && (
                            <div className="md:col-span-2 h-full">
                                <BentoCard
                                    title={d.title || "Link"}
                                    description={d.excerpt}
                                    href={`/post/${toSlugString(d.slug)}`}
                                    imageSrc={d.coverImage}
                                />
                            </div>
                        )}
                        {e && (
                            <div className="md:col-span-2 h-full">
                                <BentoCard
                                    title={e.title || "Link"}
                                    description={e.excerpt}
                                    href={`/post/${toSlugString(e.slug)}`}
                                    imageSrc={e.coverImage}
                                />
                            </div>
                        )}
                        {f && (
                            <div className="md:col-span-2 h-full">
                                <BentoCard
                                    title={f.title || "Link"}
                                    description={f.excerpt}
                                    href={`/post/${toSlugString(f.slug)}`}
                                    imageSrc={f.coverImage}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}


