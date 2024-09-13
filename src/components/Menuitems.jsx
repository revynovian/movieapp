import Link from "next/link";

export default function Menuitems({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-red-700 text-slate-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden text-sm font-semibold sm:inline">{title}</p>
    </Link>
  );
}
