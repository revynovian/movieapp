import Link from "next/link";
import Menuitems from "./Menuitems";
import { HiHome } from "react-icons/hi";
import { HiExclamationCircle } from "react-icons/hi";
import ModeSwitch from "./ModeSwitch";

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between p-3">
      <div className="flex gap-4">
        <Menuitems title="Home" address="/" Icon={HiHome} />
        <Menuitems title="About" address="/about" Icon={HiExclamationCircle} />
      </div>
      <div className="flex items-center gap-4">
        <ModeSwitch />
        <Link href={"/"} className="flex items-center gap-1">
          <span className="rounded-lg bg-amber-500 px-2 py-1 text-2xl font-bold">
            Layar
          </span>
          <span className="hidden text-xl sm:inline">Info</span>
        </Link>
      </div>
    </nav>
  );
}
