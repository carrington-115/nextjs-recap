"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { userTestimonials } from "@/db/db";
import { useEffect } from "react";

export default function Page() {
  return (
    <div className="max-w-screen p-8">
      <section className="grid gap-4 grid-cols-4">
        {userTestimonials.map(({ id, name, country, profession }) => (
          <TestimonialCard
            name={name}
            country={country}
            profession={profession}
            cardURL={`/testimonials/${id}`}
          />
        ))}
      </section>
    </div>
  );
}
