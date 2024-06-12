import React from "react";
import { testimonialCardType } from "./types";

export default function TestimonialCard({
  name,
  country,
  profession,
}: testimonialCardType) {
  return (
    <div className="flex flex-col gap-5 p-4 bg-white text-black font-medium rounded-md">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="text-lg">{country}</h2>
      <p className="text-md italic">{profession}</p>
    </div>
  );
}
