import Image from "next/image";
import Link from "next/link";
import Logo from "../lbdeyo-designer-logo.svg";
function Header() {
  return (
    <header className=" flex navigationBar  items-center justify-between space-x-1 md:space-x-2 font-bold px-5 md:px-10 pt-1  pb-2  border-zinc-400 border-b-2 shadow-lg  fixed z-50 top-0 left-0 right-0 bg-gradient-to-r from-zinc-300 via-zinc-200  to-zinc-300 to-80%    dark:border-black dark:bg-gradient-to-r dark:from-zinc-900  dark:via-zinc-800  dark:to-zinc-900 ">
      <div className="flex items-center pl-0 ml-0 space-x-0 md:space-x-1   pt-1 ">
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
          className="px-5 py-3 uppercase text-xs  flex items-center rounded-full text-center">
          Home
        </Link>
        <Link
          href="/about"
          className="px-5 py-3 text-xs uppercase    flex items-center rounded-full text-center">
          About
        </Link>
        <Link
          href="/contact"
          className="px-5 py-3 text-xs uppercase  flex items-center rounded-full text-center">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
