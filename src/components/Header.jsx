import Menuitems from "./Menuitems";
import { HiHome } from "react-icons/hi";
import { HiExclamationCircle } from "react-icons/hi";
import { MdExplore } from "react-icons/md";

import ModeSwitch from "./ModeSwitch";
import SearchBox from "./SearchBox";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex md:px-60 pt-10 w-screen items-center justify-between p-10">
      
      <div className="flex gap-2 md:gap-4 items-center drop-shadow-md">
        <Image src={'/layar-icon.png'} width={40} height={40}></Image>
        <h1 className="text-lg font-semibold md:font-extrabold md:text-2xl md:pr-10">Layar</h1>
        <Menuitems title="Home" address="/" Icon={HiHome}/>
        <Menuitems title="Explore" address="/explore" Icon={MdExplore}/>
        <Menuitems title="About" address="/about" Icon={HiExclamationCircle} />
      </div>
      <div className="flex md:flex-shrink items-center gap-3 md:gap-4 mr-3">
        <SearchBox/>
        <ModeSwitch />
      </div>
    </nav>
  );
}
