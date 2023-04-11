import Link from "next/link";
import React from "react";

function Jumbotron() {
  return (
    <section className="mx-10 mb-10  mt-24 bg-left-top    bg-no-repeat bg-cover bg-blend-screen  dark:bg-blend-multiply max-w-2xl  ">
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
  first-letter:mr-3 first-letter:float-left">
            Throughout my career, I've been a multimedia creator, specializing
            in crafting visually stunning and engaging digital experiences.
            Everything I create, whether in code or in design, I create at the
            service of a single objective: To tell stories. I want to tell
            yours. With a keen eye for design and mastery of cutting-edge
            technologies, I bring your ideas to life through a range of media,
            including:
          </p>
          <ul className="mb-6 mt-3 list-disc pl-4 md:columns-2  gap-16 ">
            <li>
              <Link href="/about"> Print and digital design</Link>
            </li>
            <li>Coding with modern standards-based technologies</li>
            <li>Video and motion graphics</li>
            <li>Sound editing</li>
            <li>Custom illustration</li>
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
