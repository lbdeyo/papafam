import Link from "next/link";
import React from "react";

function Jumbotron() {
  return (
    <section className="mx-10 mb-10  mt-24  max-w-5xl fade-in-2   ">
      <div className="  max-w-screen-2xl ">
        <div>
          <h1 className="text-4xl md:text-5xl  mb-0 pb-0   ">
            Pro Design & Development
          </h1>
          <div className="border-b-slate-400 border-dashed  dark:border-b-[#ffae00] dark:shadow-black dark:shadow-sm border-b-2 mt-2"></div>
          <p className="mt-2 md:mt-3 text-3xl mb-3">
            Creating multimedia, websites and more.
          </p>
          <p
            className=" md:text-justify first-line:uppercase md:first-line:tracking-widest
  first-letter:text-6xl  
  first-letter:mr-3 first-letter:float-left lg:columns-2  gap-6  drop-shadow-md drop-shadow-black ">
            Web design and development. Motion graphics and video. Print. Social
            Media. L.B. Deyo has created work for major clients like Ford Motor
            Company, Jane magazine, Cisco Systems, Universal Studios, The Plaza
            Hotel, and Calvin Klein. All these clients had stories to tell about
            their products and services. Now it&apos;s time to tell your story.
          </p>
          <div className="border-b-slate-300 dark:border-zinc-700 border-b-2 my-5"></div>
          <h1 className="text-3xl">Services</h1>
          <ul className="mb-6 mt-3  list-disc pl-4 lg:columns-2  darK:text-slate-200  gap-6 ">
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
            className="text-black bg-[#ffae00] hover:bg-[#ffcc00]  focus:ring-4 focus:ring-blue-300 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none text-bold dark:focus:ring-blue-800">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
