// ABOUT PAGE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassChart,
  faPenRuler,
  faCode,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

export const revalidate = 60; //revalidate every 60 seconds

async function About() {
  return (
    <div className="min-h-screen relative">
      <section className="relative w-full">
        <div className="w-full max-w-screen-lg mx-auto px-4 md:px-0 pt-20 md:pt-16 pb-10 mb-10 fade-in-2 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-auto">
          {/* Main Card */}
          <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-[#FF0000] text-white border border-red-600 ring-1 ring-red-300/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight break-words text-white mb-3">
              About L.B. Deyo
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 space-y-3">
              I&apos;m L.B. Deyo — a front-end developer, designer, and digital strategist with extensive experience bringing ideas to life online. My background spans web development, UX/UI design, and digital marketing, giving me the ability to design websites that are not only visually striking, but also optimized to perform. I&apos;ve worked with a wide range of tools and frameworks, from Adobe Creative Suite to modern JavaScript frameworks, to deliver sites that meet both aesthetic and business goals.
            </p>
          </div>

          {/* Card 2: Website Creation System */}
          <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-neutral-900 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl md:text-3xl font-semibold">My Website Creation System</h2>
            <p className="mt-3 text-white/90">
              Every website I build follows a proven, results-driven process designed to ensure the final product is beautiful, functional, and easy for your audience to find:
            </p>
            <ul className="mt-4 space-y-4 list-none pl-0">
              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[40px] md:text-[48px] leading-none shrink-0 text-white/90">
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} />
                  </span>
                  <div>
                    <span className="font-semibold">Keyword & SEO Optimization.</span>
                    <span className="block text-white/90"> I start by using tools like Google Ads and Google Analytics to identify the right SEO strategy and keyword set. This ensures your site is built on a foundation of discoverability from day one, targeting the exact terms your audience is searching for.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[40px] md:text-[48px] leading-none shrink-0 text-white/90">
                    <FontAwesomeIcon icon={faPenRuler} />
                  </span>
                  <div>
                    <span className="font-semibold">Design & Mockups.</span>
                    <span className="block text-white/90"> Once the SEO plan is in place, I create polished mockups and brand assets in Photoshop, Illustrator, or Figma. This design phase captures your vision while incorporating UX best practices to make the site intuitive and engaging.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[40px] md:text-[48px] leading-none shrink-0 text-white/90">
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                  <div>
                    <span className="font-semibold">Development in Next.js & React.</span>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-white/90">
                      <li>Reusable components for consistent design and easier maintenance</li>
                      <li>Dynamic, interactive interfaces for a more engaging user experience</li>
                      <li>Fast rendering with server-side rendering (SSR) and static site generation (SSG) for speed and SEO benefits</li>
                      <li>Scalability for future growth and feature expansion</li>
                      <li>State management for smooth, app-like interactions</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-[40px] md:text-[48px] leading-none shrink-0 text-white/90">
                    <FontAwesomeIcon icon={faPeopleArrows} />
                  </span>
                  <div>
                    <span className="font-semibold">Iterative Collaboration.</span>
                    <span className="block text-white/90"> Throughout the process, I work iteratively and in close consultation with you. This ensures feedback is incorporated quickly, surprises are avoided, and the final website truly matches your needs and vision.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 3: Closing statement */}
          <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-[#2c3a24] text-white border border-[#3a4a2e] ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
            <p className="text-white/95">
              With this system, you don’t just get a website — you get a digital platform designed for visibility, usability, and long-term success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
