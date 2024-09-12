import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="mx-auto max-w-6xl p-10 grid grid-cols-2 sm:px-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
