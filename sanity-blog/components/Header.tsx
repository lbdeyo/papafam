import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/lbdeyo-designer-logo.svg";
function Header() {
  return (
    <header className=" flex items-center justify-between space-x-2 font-bold px-10 pt-2  pb-3 dark:bg-opacity-90  border-zinc-400 border-b-2 shadow-lg  fixed z-50 top-0 left-0 right-0 bg-zinc-400  dark:bg-zinc-900  dark:border-black ">
      <div className="flex items-center pl-0 ml-0 space-x-2 pt-1 ">
        <Link href="/">
          <Image
            className="hover:opacity-60"
            src={Logo}
            width={200}
            height={50}
            alt="L.B. DEYO, DESIGNER"
          />
        </Link>
      </div>
      <div className="flex flex-row mt-2">
        <Link
          href="/"
          className="px-5 py-3 uppercase text-sm md:text-base flex items-center rounded-full text-center">
          Home
        </Link>
        <Link
          href="/about"
          className="px-5 py-3 text-sm uppercase md:text-base   flex items-center rounded-full text-center">
          About
        </Link>
        <Link
          href="/contact"
          className="px-5 py-3 text-sm uppercase md:text-base  flex items-center rounded-full text-center">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
