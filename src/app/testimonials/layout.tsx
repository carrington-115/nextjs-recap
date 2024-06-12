import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Testimonials</h2>
      <section>{children}</section>
    </div>
  );
}
