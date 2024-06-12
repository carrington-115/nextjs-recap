"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { userTestimonyType } from "@/components/types";
import { userTestimonials } from "@/db/db";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log(userTestimonials);
  }, []);
  return (
    <div className="max-w-screen p-8">
      <section className="grid gap-4 grid-cols-4">
        {userTestimonials.map(({ name, country, profession }) => (
          <TestimonialCard
            name={name}
            country={country}
            profession={profession}
            cardURL=""
          />
        ))}
      </section>
    </div>
  );
}
