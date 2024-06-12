"use client";
import { userTestimonials } from "@/db/db";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log(userTestimonials);
  }, []);
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}
