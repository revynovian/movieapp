import Link from "next/link";
import Menuitems from "./Menuitems";
import { HiHome } from "react-icons/hi";
import { HiExclamationCircle } from "react-icons/hi";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menuitems title="Home" address="/" Icon={HiHome}/>
        <Menuitems title="About" address="/about" Icon={HiExclamationCircle}/>
      </div>
      <Link href={'/'} className="flex items-center gap-1">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">Layar</span>
        <span className="text-xl hidden sm:inline">Info</span>
      </Link>
    </nav>
  )
}
