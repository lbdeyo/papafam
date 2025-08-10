import Link from "next/link";
import Image from "next/image";
import SimpleTypewriter from "./SimpleTypewriter";
function Jumbotron() {
  return (
    <section className="mx-0 mb-10 fade-in-2 mt-12 md:mt-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-auto">
        {/* Hero card */}
        <div className="md:col-span-4 rounded-2xl p-4 sm:p-6 md:p-8 bg-[#FF0000] text-white border border-red-600 ring-1 ring-red-300/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col h-full">
            <div>
              <Image src="lb-logo.svg" alt="L.B. Deyo" width={200} height={200} className="brightness-0 invert pb-2" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight sm:leading-tight md:leading-[1.05] tracking-tight break-words text-white">
                Professional Web Design and Development
              </h1>
              <p className="mt-2 text-base sm:text-lg md:text-2xl text-white/95">
                Creating {" "}
                <SimpleTypewriter
                  className="font-semibold"
                  words={["websites", "apps", "motion graphics", "video", "branding", "illustration"]}
                  typeSpeedMs={70}
                  deleteSpeedMs={50}
                  delayBetweenWordsMs={1200}
                />
                {" "}and much more.
              </p>
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-white bg-white text-[#FF0000] hover:bg-transparent hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-white/40"
                >
                  Let&apos;s get started
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-block border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#FF0000] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-white/40"
                >
                  View portfolio
                </Link>
              </div>
            </div>
            <div className="mt-6 md:mt-8 pt-2 md:pt-3 border-t border-red-500/40" />
          </div>
        </div>

        {/* About blurb card */}
        <div className="md:col-span-2 rounded-2xl p-4 sm:p-6 md:p-8 bg-[#2c3a24] text-white border border-[#3a4a2e] ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">

          <p className="text-sm sm:text-base md:text-base lg:text-lg text-white/95">

            <span className="text-white font-bold ">Full Service</span> web design and development. Motion graphics and video. Print.
            Social Media. I&apos;m L.B. Deyo, and I&apos;ve created work for major clients like
            Ford Motor Company, Jane magazine, Cisco Systems, Universal
            Studios, The Plaza Hotel, and Calvin Klein. Now it&apos;s time to
            tell your story.
          </p>
          <div className="mt-4">
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#2c3a24] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Learn more
            </Link>
          </div>
        </div>



        {/* Services tiles (3 across on desktop) */}
        <div className="md:col-span-2 rounded-2xl p-4 sm:p-6 md:p-6 bg-[#2c3a24] text-white border border-[#3a4a2e] ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <p>
            <span className="text-white font-bold">Digital and print design</span>{" "}
            <span className="opacity-75">
              with Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Figma,
              and other applications.
            </span>
          </p>
        </div>

        <div className="md:col-span-2 rounded-2xl p-4 sm:p-6 md:p-6 bg-neutral-900 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <p>
            <span className="text-white font-bold">Copywriting &amp; illustration</span>
            <span className="opacity-75"> — freehand and digital illustration; copy for editorial and advertising.</span>
          </p>
        </div>

        <div className="md:col-span-2 rounded-2xl p-4 sm:p-6 md:p-6 bg-neutral-900 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <p>
            <span className="text-white font-bold">Sound editing</span>
            &nbsp;
            <span className="opacity-75">in Logic Pro X and Adobe Audition.</span>
          </p>
        </div>

        <div className="md:col-span-4 rounded-2xl p-4 sm:p-6 md:p-6 bg-blue-900 text-white border border-blue-800 ring-1 ring-blue-300/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <p>
            <span className="text-white font-bold">Coding with modern standards-based technologies</span>
            <span className="opacity-75">
              , including HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
              and more. Expertise in UI/UX. Meta Certified in JavaScript, HTML & CSS, and Advanced React. Google Certified in Google Ads.
            </span>
          </p>
        </div>

        <div className="md:col-span-2 rounded-2xl p-4 sm:p-6 md:p-6 bg-amber-900 text-white border border-amber-800 ring-1 ring-amber-300/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <p>
            <span className="text-white font-bold">Video and motion graphics</span>{" "}
            <span className="opacity-75 inline">
              production (shooting, sound recording) and postproduction with
              tools like Adobe Premiere, Adobe After Effects, Final Cut Pro
              and Cinema 4D.
            </span>
          </p>
        </div>

        {/* Certifications card */}
        <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-6 bg-neutral-900 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
          <p className="text-base sm:text-lg">
            <span className="text-white font-bold">Meta Certified</span> in JavaScript, HTML/CSS, and Advanced React.
          </p>
          <p className="text-base sm:text-lg mt-2">
            <span className="text-white font-bold">Google Certified</span> in Google Ads and Google Analytics.
          </p>
        </div>

        {/* CTA tile removed; CTA moved into hero (red) tile */}
      </div>
    </section>
  );
}

export default Jumbotron;
