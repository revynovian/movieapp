"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`text-sm border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-3xl ${genre === param ? "bg-red-700 text-red-100 font-semibold" : ""}`}
        href={`/explore/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
