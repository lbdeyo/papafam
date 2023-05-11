import {client} from "@/lib/sanity.client";
import {groq} from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import Link from "next/link";

// ABOUT PAGE

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; //revalidate every 60 seconds
export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {
    slug
    }`;

  const slugs: Post[] = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}
async function About({params: {slug = "editorial-maps"}}: Props) {
  const query = groq`*[_type =='post' && slug.current ==$slug][0]
  {
    ..., 
    author->,

  }`;

  const post: Post = await client.fetch(query, {slug});

  return (
    <section className="mb-10  mt-24  mx-auto px-10   max-w-4xl fade-in-2  ">
      <div className="  max-w-screen-2xl ">
        <div>
          <h1 className="text-4xl md:text-5xl  mb-0 pb-0 ">About L.B. Deyo</h1>
          <div className="border-b-slate-400   dark:border-b-zinc-700 dark:shadow-black dark:shadow-sm border-b mt-2"></div>
          <div className=" lg:flex lg:flex-row lg:justify-between">
            <Image
              className="mt-10 lg:mr-10 object-cover object-top-center mx-auto rounded-xl"
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              width={450}
              height={450}
            />
            <div className="mt-6">
              <p className="mt-2 md:mt-3 text-3xl mb-3">
                Hybrid developer/designer
              </p>
              <p
                className=" md:text-justify first-line:uppercase md:first-line:tracking-widest
first-letter:text-6xl  
first-letter:mr-3 first-letter:float-left">
                Throughout his career, L.B. Deyo has been a multimedia creator,
                specializing in crafting visually stunning and engaging digital
                experiences. Everything he creates, whether in code or in
                design, is made at the service of a single objective: To tell
                stories. He wants to tell yours. With a keen eye for aesthetics
                and mastery of cutting-edge technologies, he&apos;ll bring your
                ideas to life through a range of media, including:
              </p>
              <div className="my-4">
                <h2 className="text-2xl mt-3">Print and digital design</h2>
                <blockquote>
                  Bringing advanced knowledge of typography and layout. Expert
                  in tools like Photoshop, Illustrator and InDesign.
                </blockquote>
                <h2 className="text-2xl mt-3">
                  Coding with modern standards-based technologies
                </h2>
                <blockquote>
                  Developing in React and Next, using headless CMS, to create
                  sites that can be securely maintained by non-programmers. L.B.
                  Deyo built this site and can build yours.
                </blockquote>
                <h2 className="text-2xl mt-3">Video and motion graphics</h2>
                <blockquote>
                  Combining a passion for animation and cinema with skills in
                  photography, editing, and proficiency in Adobe Premiere and
                  Adobe After Effects.
                </blockquote>
                <h2 className="text-2xl mt-3">Sound editing</h2>
                <blockquote>
                  L.B. Deyo is a power user of Logic Pro X, and can offer sound
                  mixing and design for your videos or other projects.
                </blockquote>
                <h2 className="text-2xl mt-3">Custom illustration</h2>
                <blockquote>
                  Creating illustrations in Blender, Illustrator, Photoshop, and
                  Adobe Animate.
                </blockquote>
              </div>
              <Link
                href="/contact"
                className="text-black bg-[#ffae00] hover:bg-[#ffcc00] focus:ring-4 focus:ring-blue-300 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-bold mr-2 focus:outline-none dark:focus:ring-blue-800">
                LET&apos;S TELL YOUR STORY
              </Link>
              <div className="m-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
