import Image from "next/image";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl p-10 sm:flex justify-center">
      <div>
        <div className="relative w-10/12 overflow-hidden">
          <Image
            src={"/background.jpg"}
            className="inset-0 h-full w-full rounded-2xl"
            width={800}
            height={300}
          ></Image>
          <div class="absolute inset-0 flex items-end rounded-2xl bg-gradient-to-t from-gray-900 via-gray-900/40">
            <div className="hidden flex-col items-start gap-3 p-5 sm:inline-block">
              <h1 className="text-3xl font-extrabold text-zinc-300 drop-shadow-md">
                Dune
              </h1>
              <div className="flex gap-3 text-sm text-zinc-400 drop-shadow-sm">
                <div className="flex gap-1">
                  <FaStar className="mx-0 my-auto px-0 text-center text-amber-300" />
                  <p className="px-0">8.0</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <p>2h35m</p>
                  <span>&#8226;</span>
                  <p>Action,Sci-Fi,Drama</p>
                  <span>&#8226;</span>
                  <p>2021</p>
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                A noble family becomes embroiled in a war for control over the
                galaxy's most valuable asset while its heir becomes troubled by
                visions of a dark future.
              </p>
              <button class="m-3 mx-0 rounded-full bg-red-800/50 px-4 py-3 font-bold text-slate-100 hover:bg-red-700">
                <HiMiniPlayCircle className="my-auto inline-block" />{" "}
                <a
                  href="https://www.youtube.com/watch?v=n9xhJrPXop4"
                  target="_blank"
                >
                  Watch Trailer
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/4">
        <div>
          <p className="text-lg font-semibold text-zinc-300">Layar - Sail Through the World of Entertainment</p>
          <p className="text-md font-medium text-zinc-500 text-left">
          Discover movies, shows, and stories that captivate your imagination. Effortlessly explore blockbusters and timeless classics, with personalized recommendations and in-depth profiles, all at your fingertips.
          </p>
        </div>
        <button class="m-3 mx-0 rounded-full bg-red-800/50 px-4 py-3 font-bold text-slate-100 hover:bg-red-700">
                <MdExplore className="my-auto inline-block" />{" "}
                <a
                  href="/explore"
                >
                  Explore
                </a>
              </button>
      </div>
    </div>
  );
}
