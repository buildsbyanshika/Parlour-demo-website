"use client";
import Link from "next/link";
import { Service } from "@/data/services";
import { useState } from "react";
import Image from "next/image";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div
      className="group cursor-pointer mb-8 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-50 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <Link href={`/service/${service.slug}`}>
          <Image
            src={service.icon}
            alt={service.title}
            className={`w-full h-full object-cover transition duration-300 ${
              isHovered ? "grayscale" : ""
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className={`w-14 h-14 rounded-full border-2 border-white bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              tabIndex={-1} 
            >
              <span className="text-white font-medium text-base">View</span>
            </button>
          </div>
        </Link>
        <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 px-3">
          <h3 className="text-sm md:text-base font-semibold">{service.title}</h3>
        </div>
      </div>
    </div>
    </>
  );
}
