import Link from "next/link";
import {Typewriter} from "react-simple-typewriter";

function Jumbotron() {
  return (
    <section className="mx-10 mb-10  mt-20  max-w-5xl fade-in-2   ">
      <div className="  max-w-screen-2xl z-30 ">
        <div>
          <h1 className="text-4xl md:text-7xl  mb-0 pb-0   ">
            Pro-Strength Design and Development
          </h1>
          <div className=" border-b-zinc-500 shadow-black shadow-sm border-b mt-2"></div>
          <div className="flex flex-col md:flex-row">
            <p className="mt-2 md:mt-3 text-2xl mb-3">
              Creating multimedia, websites and more.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <p
              className=" md:text-justify first-line:uppercase md:first-line:tracking-widest
  first-letter:text-6xl  
  first-letter:mr-3 first-letter:float-left   gap-6  drop-shadow-md drop-shadow-black ">
              Web design and development. Motion graphics and video. Print.
              Social Media. L.B. Deyo has created work for major clients like
              Ford Motor Company, Jane magazine, Cisco Systems, Universal
              Studios, The Plaza Hotel, and Calvin Klein. All these clients had
              stories to tell about their products and services. Now it&apos;s
              time to tell your story.
            </p>

            {/* <Image
              src="/calipers.png"
              alt="calipers"
              className="ml-10 pr-10 md:-mt-5 hidden lg:flex"
              height={300}
              width={300}
            />*/}
          </div>
          <div className=" border-b-zinc-500 shadow-black shadow-sm border-b my-5"></div>
          <h1 className="text-2xl">Services</h1>
          <ul className="mb-6 mt-3  list-disc pl-4 lg:columns-2  text-slate-200  gap-6 ">
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
            className="text-black bg-[#ffae00] hover:bg-[#ffcc00]  focus:ring-4  hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none text-bold focus:ring-blue-800">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
