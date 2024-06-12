import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="container w-full flex justify-center items-center pt-4">
        <h2 className="text-4xl font-extrabold">Testimonials</h2>
      </div>
      <section>{children}</section>
    </div>
  );
}
