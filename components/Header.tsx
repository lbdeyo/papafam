import Image from "next/image";
import Link from "next/link";
import Logo from "../lbdeyo-designer-logo.svg";
function Header() {
  return (
    <header className="  navigationBar  font-bold px-5 md:px-10 pt-1  pb-2   shadow-lg   fixed z-50 top-0 left-0 right-0 bg-opacity-90    bg-[#262629] border-zinc-700">
      <div className="flex max-w-screen-lg  mx-auto items-center justify-between space-x-0 md:space-x-2 ">
        <div className="flex items-center pl-0 ml-0 space-x-0 md:space-x-1   pt-1 ">
          <Link href="/">
            <Image
              className="hover:brightness-200 brightness-100
              md:headerLogo md:absolute top-2 md:top-2"
              src={Logo}
              width={200}
              height={50}
              alt="L.B. DEYO, DESIGNER"
            />
          </Link>
        </div>
        <div className="flex flex-row mt-2">
          <Link
            href="/about"
            className="px-4 py-3 text-xs text-white uppercase    flex items-center rounded-full text-center">
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-3 text-xs text-white uppercase  flex items-center rounded-full text-center">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
