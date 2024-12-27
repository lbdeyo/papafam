import Link from "next/link";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#ffae00] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-1 text-[#ffae00]" />
          Go to the website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
