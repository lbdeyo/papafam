import Image from "next/image";
import urlFor from "@/lib/urlFor";
type Props = {
  imgUrl: Reference;
  title: string;
  description: string;
};

function BlogCard({imgUrl, title, description}: Props) {
  return (
    <div>
      <span className="flex flex-col  group break-inside-avoid border-slate-500 fade-in-4  border-opacity-25 cursor-pointer  hover:shadow-[0_35px_60px_-8px_rgba(0,0,0,0.4)] ">
        <div className="relative w-full h-80 ">
          <Image
            className="object-cover object-center lg:object-center border-black rounded-t-[20px]"
            src={urlFor(imgUrl).url()}
            alt={title}
            fill
          />
        </div>
        <div className="p-3 pb-5 pt-0">
          <div className="mt-5 flex-1">
            <p className="  text-lg font-bold">{title}</p>
            <p className="line-clamp-2 text-gray-500">{description}</p>
          </div>
        </div>
      </span>
    </div>
  );
}

export default BlogCard;
