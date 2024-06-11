"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <p>Something went wrong</p>
      <button
        className="bg-white text-black px-4 py-2 rounded-md "
        onClick={() => reset()}
      ></button>
    </div>
  );
}
