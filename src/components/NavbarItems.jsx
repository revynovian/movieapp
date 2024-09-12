"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`font-semibold hover:text-amber-600 ${genre === param ? "underline" : ""}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
