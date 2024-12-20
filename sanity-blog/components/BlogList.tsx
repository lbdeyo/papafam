"use client";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import Jumbotron from "./Jumbotron";
import {motion} from "framer-motion";
import Spotlight from "./Spotlight";

type Props = {
  posts: Post[];
};

export default function BlogList({posts}: Props) {
  posts.sort((a, b) => a.priority - b.priority);
  return (
    <div className="max-w-4xl  mx-auto fade-in-2">
      <div className="fade-in-2">
        <Jumbotron />
      </div>
      <Spotlight />
      <div className="max-w-4xl pl-10 pb-4 ">
        <h1 className="text-3xl fade-in-4 z-10"> Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post, i) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <motion.div
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.3, delay: i * 0.1}}
              whileHover={{scale: 1.02}}
              className="flex flex-col group border-slate-500 border-opacity-25 cursor-pointer hover:shadow-[0_35px_60px_-8px_rgba(0,0,0,0.4)]">
              <div className="relative w-full h-80 ">
                <Image
                  className="object-cover object-center lg:object-center border-black rounded-t-[20px]"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
              </div>
              <div className="p-3 pb-5 pt-0">
                <div className="mt-5 flex-1">
                  <p className="  text-lg font-bold">{post.title}</p>
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
