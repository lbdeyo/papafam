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
              Studios, The Plaza Hotel, and Calvin Klein. Now it&apos;s time to
              tell your story.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-zinc-500 shadow-black shadow-sm border-b my-5"></div>
      <div className="w-full">
        <h1 className="text-3xl">Services</h1>
        <div className="max-w-5xl">
          <div className="mb-6 mt-3 columns-1 md:columns-2 gap-8 space-y-4">
            <p>
              <span className="text-white opacity-100">
                Digital and print design
              </span>{" "}
              <span className="opacity-75">
                with Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Figma,
                and other applications.
              </span>
            </p>

            <p>
              <span className="text-white opacity-100">
                Custom illustration
              </span>
              <span className="opacity-75">, freehand and digital.</span>
            </p>

            <p>
              <span className="text-white opacity-100">
                Coding with modern standards-based technologies
              </span>
              <span className="opacity-75">
                , including HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
                and more.
              </span>
            </p>

            <p>
              <span className="text-white opacity-100">
                Video and motion graphics
              </span>{" "}
              <span className="opacity-75 inline">
                production (shooting, sound recording) and postproduction with
                tools like Adobe Premiere, Adobe After Effects, Final Cut Pro
                and Cinema 4D.
              </span>
            </p>

            <p>
              <span className="text-white opacity-100">Copywriting</span>&nbsp;
              <span className="opacity-75">for editorial and advertising.</span>
            </p>

            <p>
              <span className="text-white opacity-100">Sound editing</span>
              &nbsp;
              <span className="opacity-75">
                in Logic Pro X and Adobe Audition.
              </span>
            </p>
          </div>

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
