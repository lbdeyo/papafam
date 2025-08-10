import Image from "next/image";
import Link from "next/link";
import Logo from "../public/lb-logo.svg";
function Header() {
  return (
    <header className="  navigationBar  font-bold px-5 md:px-10 pt-1  pb-2   shadow-lg   fixed z-50 top-0 left-0 right-0 bg-opacity-90    bg-black border-zinc-700">
      <div className="flex max-w-screen-lg  mx-auto items-center justify-between space-x-0 md:space-x-2 ">
        <div className="flex items-center pl-0 ml-0 space-x-0 md:space-x-1   pt-1 ">
          <Link href="/">
            <Image
              className="hover:brightness-200 brightness-100 md:headerLogo md:absolute top-2 md:top-2 h-8 md:h-9 w-auto"
              src={Logo}
              width={200}
              height={60}
              alt="L.B. DEYO, DESIGNER"
            />
          </Link>
        </div>
        <nav className="flex flex-row mt-2 gap-1">
          {[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-xs text-white uppercase flex items-center rounded-full text-center relative after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-0.5 after:bg-white/0 hover:after:bg-white/60 after:transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
