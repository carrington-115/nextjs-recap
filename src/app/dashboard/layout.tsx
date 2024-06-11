"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <div>{children}</div>
      <button
        onClick={() => router.push("/shop")}
        className="px-4 py-2 rounded-md bg-blue-300 text-blue-800 hover:text-black hover:bg-white"
      >
        Shopping
      </button>
    </>
  );
}
