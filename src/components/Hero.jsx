import Image from "next/image";
import { HiMiniPlayCircle } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl justify-center p-10 md:flex">
      <div>
        <div className="relative overflow-hidden md:w-11/12">
          <Image
            src={"/background.jpg"}
            className="inset-0 h-full w-full rounded-lg sm:rounded-2xl"
            width={0}
            height={0}
            sizes="100vw"
            alt="dune_feature_image"
          ></Image>
          <div className="absolute inset-0 flex items-end rounded-lg bg-gradient-to-t from-gray-900 via-gray-900/40 sm:rounded-2xl">
            <div className="flex-col items-start gap-3 p-5">
              <h1 className="text-3xl font-extrabold text-zinc-300 drop-shadow-md">
                Dune
              </h1>
              <div className="flex gap-3 text-sm text-zinc-400 drop-shadow-sm">
                <div className="flex gap-1">
                  <FaStar className="mx-0 my-auto px-0 text-center text-amber-300" />
                  <p className="px-0">8.0</p>
                </div>
                <div className="hidden items-center gap-2 text-xs sm:flex">
                  <p>2h35m</p>
                  <span>&#8226;</span>
                  <p>Action,Sci-Fi,Drama</p>
                  <span>&#8226;</span>
                  <p>2021</p>
                </div>
              </div>
              <p className="hidden py-2 text-xs text-zinc-400 sm:block">
                A noble family becomes embroiled in a war for control over the
                galaxy&apos;s most valuable asset while its heir becomes
                troubled by visions of a dark future.
              </p>
              <div className="flex">
                <a  href="https://www.youtube.com/watch?v=n9xhJrPXop4"
                    target="_blank" 
                    className="w-fit m-1 mx-0 flex items-center gap-1 rounded-full bg-red-800/50 px-4 py-1 font-bold text-slate-100 hover:bg-red-700">
                    <HiMiniPlayCircle /> Watch Trailer
                </a>
                <button className="m-1 mx-2 rounded-full bg-zinc-600/50 px-4 py-1 font-bold text-slate-100 hover:bg-red-700">
                  <a href="/movie/438631"> More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 h-max rounded-lg border border-zinc-500/50 p-5 md:px-5 md:py-0 md:mt-0 md:w-2/5 md:border-0 flex-col items-center">
        <div>
          <p className="text-md font-bold dark:text-zinc-300 sm:text-lg drop-shadow-lg">
            Layar - Sail Through the World of Entertainment
          </p>
          <p className="sm:text-md text-left text-sm font-medium text-zinc-500">
            Discover movies, shows, and stories that captivate your imagination.
            Effortlessly explore blockbusters and timeless classics, with
            personalized recommendations and in-depth profiles, all at your
            fingertips.
          </p>
        </div>
        <a href="/explore" className="w-fit m-3 mx-0 flex items-center gap-1 rounded-full  bg-red-800 dark:bg-red-800/50 px-4 py-1 font-bold text-slate-100 hover:bg-red-700">
          <MdExplore /> Explore
        </a>
      </div>
    </div>
  );
}
