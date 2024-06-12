"use client";
import { userTestimonyType } from "@/components/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { userTestimonials } from "@/db/db";

export default function page() {
  const { personID } = useParams();
  const router = useRouter();
  const [testimony, setTestimony] = useState<userTestimonyType>();
  useEffect(() => {
    const userTestimony = userTestimonials.find(
      (person) => person.id === Number(personID)
    );
    setTestimony(userTestimony);
    console.log(testimony);
  }, [personID]);
  return (
    <section className="w-screen flex container justify-center items-center py-8">
      <div className="p-8 rounded-lg w-1/2 flex flex-col bg-white text-black gap-3 text-lg">
        <div className="mb-2">
          <p className="font-extrabold underline">User details</p>
          <h2>{testimony?.name}</h2>
          <h4>{testimony?.country}</h4>
          <h4>{testimony?.date_of_birth}</h4>
          <h4>{testimony?.profession}</h4>
        </div>
        <div>
          <p>{testimony?.message}</p>
        </div>
        <button
          className="rounded-md bg-black px-5 py-2 text-white cursor-pointer hover:bg-gray-700"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </section>
  );
}
