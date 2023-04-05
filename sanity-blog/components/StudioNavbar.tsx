import Link from "next/link";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#f7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-1 text-[#f7AB0A]" />
          Go to the website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
