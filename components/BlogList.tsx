"use client";
import {useState} from "react";
import type {Post} from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import {motion} from "framer-motion";
import Spotlight from "./Spotlight";
import {BlogListFilter} from "./BlogListFilter";

type Props = {
  posts: Post[];
};

export default function BlogList({posts}: Props) {
  const [currentCategory, setCurrentCategory] = useState<string>("All");

  const filteredPosts = posts.filter(
    (post) =>
      currentCategory === "All" ||
      post.categories?.some((category) =>
        typeof category === "string"
          ? category === currentCategory
          : category.title === currentCategory
      )
  );

  posts.sort((a, b) => a.priority - b.priority);

  return (
    <div className="w-full fade-in-2">
      <Spotlight />
      <div className="pb-4 mx-10">
        <h1 className="text-3xl fade-in-4 z-10">Portfolio</h1>
        <BlogListFilter
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          posts={posts}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 mx-10">
        {filteredPosts.map((post, i) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <motion.div
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.3}}
              whileHover={{scale: 1.02}}
              className="flex flex-col group border-slate-500 border-opacity-25 cursor-pointer hover:shadow-[0_35px_60px_-8px_rgba(0,0,0,0.4)]">
              <div className="relative w-full h-[320px]">
                <Image
                  className="object-cover rounded-t-[20px]"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                  style={{objectPosition: "50% 50%"}}
                />
              </div>
              <div className="p-3 pb-5 pt-0">
                <div className="mt-5 flex-1">
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="line-clamp-2 text-white">{post.description}</p>
                </div>
              </div>
            </motion.div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
