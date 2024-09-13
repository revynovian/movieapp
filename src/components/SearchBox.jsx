'use client'

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`);
  }
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        className="rounded-full border border-slate-300 px-3 py-1 sm:px-4 sm:py-2 text-gray-700 focus:outline-none dark:border-slate-700 dark:text-slate-300"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
      <button type="submit" disabled={search === ''} className="absolute right-3 h-full text-slate-600">
        <CiSearch />
      </button>
    </form>
  );
}
