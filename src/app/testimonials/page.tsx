"use client";
import { userTestimonials } from "@/db/db";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log(userTestimonials);
  }, []);
  return <div className="grid grid-cols-4"></div>;
}
