import Image from "next/image";
import { HiMiniPlayCircle } from "react-icons/hi2";
const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
  );
  const movie = await res.json();
  const year = (movie.first_air_date || movie.release_date || "N/A").slice(0, 4);
  const checkImage = (movie.backdrop_path ? true: false)
  const urlImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  const urlImagePlaceholder = `https://placehold.co/600x400.png`
  const image = (checkImage ? urlImage: urlImagePlaceholder)

  return (
    <div className="mx-auto max-w-6xl px-10 pt-32 sm:flex min-h-screen">
      <div className="relative">
        <Image
          src={image}
          width={600}
          height={400}
          className="block relative rounded-lg drop-shadow-xl z-20"
          alt="movie_backdrop"
        ></Image>
        <Image
          src={image}
          width={600}
          height={400}
          className="absolute rounded-lg blur-md z-10 scale-95 top-6"
          alt="overlay_image"
        ></Image>
      </div>
      <div className="pt-10 sm:w-2/4 sm:pl-10 sm:pt-0">
        <div className="flex items-center text-2xl">
          <h2 className="text-2xl font-bold">{movie.title || movie.name}</h2>
          <h2 className="pl-1 font-light">({year})</h2>
        </div>
        <p className="text-sm">Release Date : {movie.release_date || movie.first_air_date}</p>
        <h3 className="pt-3 font-bold">Overview</h3>
        <p className="text-sm">{movie.overview}</p>
        <a href="https://www.youtube.com/" target="_blank" className="w-fit flex items-center gap-1 m-3 mx-0 rounded-full bg-red-800 dark:bg-red-800/50 px-4 py-1 font-bold text-slate-100 hover:bg-red-700">
          <HiMiniPlayCircle/> Watch Trailer
        </a>
      </div>
    </div>
  );
}
