"use client";
import React, { useState, useMemo } from "react";
import { galleryImages, GalleryImage } from "@/data/gallery";
import Image from "next/image";

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const images = useMemo(() => galleryImages, []);

  return (
    <div className="relative bg-[#faf6f3] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-serif sm:text-5xl font-bold text-pink-600 text-center mb-10">
        Gallery
      </h2>

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative mb-4 break-inside-avoid hover:opacity-40 transition-opacity duration-300 cursor-pointer"
            onClick={() => setLightboxImage(img)}
          >
            <Image
              src={img.src}
              alt={img.name}
              className="w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-black/50 flex items-center justify-center">
                <span className="text-white text-sm">View</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full mx-4">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-black font-bold hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>

            <Image
              src={lightboxImage.src}
              alt={lightboxImage.name}
              className="w-full h-auto object-contain bg-black"
            />
          </div>
        </div>
      )}
      
    </div>
  );
}
