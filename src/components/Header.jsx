import Link from "next/link";
import Menuitems from "./Menuitems";
import { HiHome } from "react-icons/hi";
import { HiExclamationCircle } from "react-icons/hi";
import { HiMiniUserCircle } from "react-icons/hi2";

import ModeSwitch from "./ModeSwitch";
import SearchBox from "./SearchBox";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between p-3 ">
      
      <div className="flex gap-4 items-center">
        <div className="font-semibold">
            <Image src={'/layar-icon.png'} width={40} height={40}></Image>
            LAYAR
        </div>
        <Menuitems title="Home" address="/" Icon={HiHome}/>
        <Menuitems title="About" address="/about" Icon={HiExclamationCircle} />
        </div>
      <div className="flex items-center gap-4">
        <SearchBox/>
        <ModeSwitch />
      </div>
    </nav>
  );
}
