import {ArrowUpRightIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import Jumbotron from "./Jumbotron";

type Props = {
  posts: Post[];
};

export default function BlogList({posts}: Props) {
  return (
    <div className="max-w-4xl  mx-auto">
      {/* start jumbotron */}
      <Jumbotron />
      {/* end jumbotron */}
      <div className="max-w-4xl pl-10 pb-4 ">
        <h1 className="text-3xl">Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <span className="flex flex-col  group border-slate-500 border-opacity-25 cursor-pointer  hover:shadow-[0_35px_60px_-8px_rgba(0,0,0,0.4)] ">
              <div className="relative w-full h-80 ">
                <Image
                  className="object-cover object-left lg:object-center border-black rounded-t-[20px]"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
              </div>
              <div className="p-3 pb-5 pt-0">
                <div className="mt-5 flex-1">
                  <p className="  text-lg font-bold">{post.title}</p>
                  <p className="line-clamp-2 text-gray-500">
                    {post.description}
                  </p>
                </div>
              </div>
            </span>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
