"use client";
import React from "react";
import { data } from "../../data/dummy.js";
import Link from "next/link.js";

export default function QuizCard() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center bg-gray-100 dark:bg-gray-900  p-4">
      {data.map((item, index) => (
        <Link href={`/home/${item.id}`} key={index} >
          <div
            key={index}
            className="bg-white mx-auto shadow-amber-100 relative dark:bg-gray-800 rounded-md shadow-md p-2 w-full max-w-xs mb-4 group "
          >
            <img
              src={item.img}
              alt="Quiz Image"
              className="w-full h-48 object-cover rounded-lg mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-102"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-2">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
