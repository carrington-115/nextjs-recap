"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>Hello Shopping page</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-md bg-blue-300 text-blue-800 hover:text-black hover:bg-white"
        >
          Back
        </button>
      </div>
    </>
  );
}
