import Menuitems from "./Menuitems";
import { HiHome } from "react-icons/hi";
import { HiExclamationCircle } from "react-icons/hi";

export default function Footer() {
  return (
    <nav className="max-w-6xl p-10 mx-auto ">
      <hr className="border-t border-zinc-700"/>
      <div className="flex items-center justify-between p-10 text-zinc-600" >
        <div className="font-semibold text-sm">
              Layar Company &copy; 2024
        </div>
        <div className="flex items-center gap-4">
          <Menuitems title="Home" address="/" Icon={HiHome}/>
          <Menuitems title="About" address="/about" Icon={HiExclamationCircle} />
        </div>
      </div>
      
    </nav>
  );
}
