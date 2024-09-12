"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:border px-4 py-2 rounded-3xl ${genre === param ? "bg-amber-100 text-amber-700 font-semibold" : ""}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
