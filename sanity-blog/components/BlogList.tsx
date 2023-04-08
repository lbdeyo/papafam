import {ArrowUpRightIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

export default function BlogList({posts}: Props) {
  return (
    <div>
      {/* start jumbotron */}

      <section className=" mx-10 mb-10 mt-28 bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]  bg-gray-700 bg-blend-multiply text-white rounded-2xl">
        <div className="px-4 mx-10 max-w-screen-lg py-12 lg:py-20">
          <div>
            <h1 className="text-7xl ">Design</h1>
            <h2 className="mb-4 md:mt-2">
              Welcome to
              <span className=" decoration-4 decoration-[#C000FF]">
                Every Developer&#39;s
              </span>
              favorite blog in the Devosphere.
            </h2>
            <button
              type="button"
              class="text-white bg-[#C000FF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Default
            </button>
          </div>
        </div>
      </section>

      {/* end jumbotron */}
      {/* <hr className=" border-[#C000FF] mb-10" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div className="flex flex-col rounded-xl group border-slate-500 border-opacity-25 cursor-pointer  hover:shadow-[0_35px_60px_-8px_rgba(0,0,0,0.4)] ">
              <div className="relative w-full h-80 ">
                <Image
                  className="object-cover object-left lg:object-center border-black rounded-t-xl"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
              </div>
              <div className="p-3 pb-5">
                <div className="mt-5 flex-1">
                  <p className=" text-lg font-bold">{post.title}</p>
                  <p className="line-clamp-2 text-gray-500">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
