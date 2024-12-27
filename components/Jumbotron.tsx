import Link from "next/link";
import Image from "next/image";
import {Typewriter} from "react-simple-typewriter";

function Jumbotron() {
  return (
    <section className="mx-10 mb-10 fade-in-2">
      <div className="max-w-lg z-30">
        <div className="mt-24">
          <h1 className="text-5xl md:text-6xl mb-0 pb-0 text-[#FF0479]">
            Pro-Strength
          </h1>
          <h1 className="text-5xl md:text-6xl mb-0 pb-0 text-[#FF0479]">
            Design and
          </h1>
          <h1 className="text-5xl md:text-6xl mb-0 pb-0 text-[#FF0479]">
            Development
          </h1>
          <div className="border-b-[#ffae00] shadow-black shadow-sm border-b mt-2"></div>
          <p className="mt-2 md:mt-3 text-2xl mb-3">
            Creating multimedia, websites and more.
          </p>
          <div className="flex flex-col md:flex-row">
            <p className="md:text-justify first-line:uppercase md:first-line:tracking-widest">
              Web design and development. Motion graphics and video. Print.
              Social Media. L.B. Deyo has created work for major clients like
              Ford Motor Company, Jane magazine, Cisco Systems, Universal
              Studios, The Plaza Hotel, and Calvin Klein. All these clients had
              stories to tell about their products and services. Now it&apos;s
              time to tell your story.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-zinc-500 shadow-black shadow-sm border-b my-5"></div>
      <div className="w-full">
        <h1 className="text-3xl">Services</h1>
        <div className="max-w-3xl">
          <ul className="mb-6 mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200 list-disc pl-5">
            <li>
              <Link href="/about">Print and digital design</Link>
            </li>
            <li>
              <Link href="/about">
                Coding with modern standards-based technologies
              </Link>
            </li>
            <li>
              <Link href="/about">Video and motion graphics</Link>
            </li>
            <li>
              <Link href="/about">Sound editing</Link>
            </li>
            <li>
              <Link href="/about">Custom illustration</Link>
            </li>
            <li>
              <Link href="/about">Copywriting</Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="text-black bg-[#ffae00] hover:bg-[#ffcc00] focus:ring-4 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-bold focus:ring-blue-800">
            GET IN&nbsp;TOUCH
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
