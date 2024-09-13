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
                <div className="flex items-center gap-2 text-xs">
                  <p>2h35m</p>
                  <span>&#8226;</span>
                  <p>Action,Sci-Fi,Drama</p>
                  <span>&#8226;</span>
                  <p>2021</p>
                </div>
              </div>
              <p className="py-2 text-xs text-zinc-400">
                A noble family becomes embroiled in a war for control over the
                galaxy&apos;s most valuable asset while its heir becomes
                troubled by visions of a dark future.
              </p>
              <button className="m-1 mx-0 rounded-full bg-red-800/50 px-4 py-3 font-bold text-slate-100 hover:bg-red-700">
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
      <div className="mt-5 h-max rounded-lg border border-zinc-500/50 p-7 md:mt-0 md:w-1/3 md:border-0">
        <div>
          <p className="text-md font-semibold dark:text-zinc-300 sm:text-lg">
            Layar - Sail Through the World of Entertainment
          </p>
          <p className="sm:text-md text-left text-sm font-medium text-zinc-500">
            Discover movies, shows, and stories that captivate your imagination.
            Effortlessly explore blockbusters and timeless classics, with
            personalized recommendations and in-depth profiles, all at your
            fingertips.
          </p>
        </div>
        <button className="m-3 mx-0 rounded-full bg-red-800 px-4 py-3 font-bold text-slate-100 hover:bg-red-700">
          <MdExplore className="my-auto inline-block" />{" "}
          <a href="/explore">Explore</a>
        </button>
      </div>
    </div>
  );
}
