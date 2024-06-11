"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center gap-5 pl-4 py-3 bg-white text-black">
      <Link
        href="/dashboard"
        className={
          pathname === "/dashboard"
            ? "text-red bg-red-300 px-4 py-2 rounded-lg"
            : "hover:bg-green-300 text-black bg-transparent px-4 py-2 rounded-lg"
        }
      >
        Dashboard
      </Link>
      <Link
        href="/shop"
        className={
          pathname === "/shop"
            ? "text-red bg-red-300 px-4 py-2 rounded-lg"
            : "hover:bg-green-300 text-black bg-transparent px-4 py-2 rounded-lg"
        }
      >
        Shop
      </Link>
    </nav>
  );
}
