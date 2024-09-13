import Image from "next/image";
import { HiMiniPlayCircle } from "react-icons/hi2";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
  );
  const movie = await res.json();
  const year = (movie.first_air_date || movie.release_date || "N/A").slice(0, 4);
  const checkImage = (movie.backdrop_path ? true: false)
  const urlImage = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  const urlImagePlaceholder = `https://placehold.co/600x400.png`
  const image = (checkImage ? urlImage: urlImagePlaceholder)

  return (
    <div className="mx-auto max-w-6xl p-10 sm:flex min-h-screen">
      <div className="relative">
        <Image
          src={image}
          width={600}
          height={400}
          className="block relative rounded-lg drop-shadow-xl z-20"
        ></Image>
        <Image
          src={image}
          width={600}
          height={400}
          className="absolute rounded-lg blur-md z-10 scale-95 top-6"
        ></Image>
      </div>
      <div className="pt-10 sm:w-2/4 sm:pl-10 sm:pt-0">
        <div className="flex items-center text-2xl">
          <h2 className="text-2xl font-bold">{movie.title || movie.name}</h2>
          <h2 className="pl-1 font-light">({year})</h2>
        </div>
        <h3>Release Date : {movie.release_date || movie.first_air_date}</h3>
        <h3 className="pt-3 font-bold">Overview</h3>
        <p>{movie.overview}</p>
        <button class="rounded-full bg-red-800 px-4 py-3 m-3 mx-0 font-bold text-slate-100 hover:bg-red-700">
          <HiMiniPlayCircle className="inline-block"/> Watch Trailer
        </button>
      </div>
    </div>
  );
}
