import Link from "next/link";
import React from "react";

function Jumbotron() {
  return (
    <section className="mx-10 mb-10  mt-24  max-w-5xl  ">
      <div className="  max-w-screen-2xl ">
        <div>
          <h1 className="text-4xl md:text-5xl  mb-0 pb-0 ">
            Pro Design & Development
          </h1>
          <div className="border-b-slate-400 dark:border-b-[#FFCC00] border-b-2 mt-2"></div>
          <p className="mt-2 md:mt-3 text-3xl mb-3">
            Creating multimedia and websites
          </p>
          <p
            className=" text-justify first-line:uppercase first-line:tracking-widest
  first-letter:text-6xl  
  first-letter:mr-3 first-letter:float-left lg:columns-2  gap-6">
            Web design and development. Motion graphics and video. Print. Social
            Media. L.B. Deyo has created work for major clients like Ford Motor
            Company, Jane magazine, Cisco Systems, Universal Studios, The Plaza
            Hotel, and Calvin Klein. Now it&apos;s time to tell your story.
          </p>
          <ul className="mb-6 mt-3  list-disc pl-4 lg:columns-2 font-bold text-slate-200  gap-6 ">
            <li>
              <Link href="/about"> Print and digital design</Link>
            </li>
            <li>
              <Link href="/about">
                {" "}
                Coding with modern standards-based technologies
              </Link>
            </li>
            <li>
              <Link href="/about"> Video and motion graphics</Link>
            </li>
            <li>
              <Link href="/about"> Sound editing</Link>
            </li>
            <li>
              <Link href="/about"> Custom illustration</Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="text-white bg-[#C000FF] hover:bg-[#A100FF] focus:ring-4 focus:ring-blue-300 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
            LET&apos;S TELL YOUR STORY
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
