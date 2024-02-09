import Link from "next/link"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"
import LogoImage from "@logos/black.svg"

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          <Image priority width={31} height={30} src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w" alt="logo" className="dark:filter dark:invert" />
        </AspectRatio>
      </div>
    </Link>
  );
} 

export default Logo