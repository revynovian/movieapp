import Results from "@/components/Results";

export default async function SearchPage({params}) {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {
        results && results.length === 0 ? (
          <div> 
            <h1 className="font-semibold justify-center items-center flex min-h-screen">No results found </h1>
          </div>
        ) : (
          results && <Results results={results} />
        )
      }
    </div>
  )
}