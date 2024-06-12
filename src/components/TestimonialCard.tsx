"use client";
import React from "react";
import { testimonialCardType } from "./types";
import { useRouter } from "next/navigation";

export default function TestimonialCard({
  name,
  country,
  profession,
  cardURL,
}: testimonialCardType) {
  const router = useRouter();
  const cardAction = () => {
    router.push(cardURL);
  };
  return (
    <div
      onClick={cardAction}
      className="flex flex-col gap-5 p-4 bg-white text-black font-medium rounded-md cursor-pointer hover:bg-gray-200"
    >
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="text-lg">{country}</h2>
      <p className="text-md italic">{profession}</p>
    </div>
  );
}
