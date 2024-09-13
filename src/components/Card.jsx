import Link from "next/link";
import Image from "next/image";
import { HiHeart } from "react-icons/hi2";

export default function Card({result}) {
  const year = (result.first_air_date || result.release_date).slice(0,4)  
  
  return (
    <div className="group m-3">
      <Link href={`/movie/${result.id}`} className="relative">
        
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
          width={500}
          height={300}
          className="rounded-lg group-hover:opacity-75 transition-opacity duration-300 drop-shadow-xl"
          alt="poster"
          >
        </Image>
        <div className="text-slate-300 rounded-lg dark:bg-slate-950/20 p-2 absolute h-16 backdrop-blur-md bottom-0 w-full">
          <div className="flex-row">
            <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
            <div className="flex items-center justify-between">
                <p className="font-thin text-sm flex-grow">{year}</p>
                <HiHeart className="text-red-700"/>
                <p className="font-thin text-sm px-2">{result.vote_count}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}