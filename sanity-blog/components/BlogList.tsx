import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import Jumbotron from "./Jumbotron";
import BlogCard from "./BlogCard";

type Props = {
  posts: Post[];
};

export default function BlogList({posts}: Props) {
  return (
    <div className="max-w-4xl  mx-auto  fade-in-2">
      <div className="fade-in-2">
        <Jumbotron />
      </div>

      <div className="max-w-4xl pl-10 pb-4 ">
        <h1 className="text-3xl fade-in-4">Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <BlogCard
              title={post.title}
              imgUrl={post.mainImage.asset}
              description={post.description}
            />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
