"use client";
import React, { useRef, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import Link from 'next/link';
import Image from "next/image";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame: number;
    let offset = 0;
    const speed = 0.5; 

    function animate() {
      if (scrollContainer) {
        offset += speed;
        if (offset > scrollContainer.scrollWidth / 3) {
          offset = 0;
        }
        scrollContainer.scrollLeft = offset;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full bg-pink-200 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-serif lg:text-6xl font-semibold text-[#2b2119] leading-snug mb-8 w-full text-center md:text-left">
            Hear What Our Customers Have To Say
          </h2>
          <div className="flex justify-center md:justify-start">
            <Link href="appointment" passHref>
            <button className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-xs sm:text-sm md:text-base">
              <span>
                Get Started
              </span>
            </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex items-center">
          <div
            ref={scrollRef}
            className="scroll-container flex gap-6 overflow-x-hidden w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              minHeight: "220px",
            }}
          >
            {extendedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="scroll-item min-w-[300px] max-w-[300px] shadow-xl flex flex-col px-8 py-10 mr-3 rounded-2xl bg-white"
              >
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17v2.66C2 16.71 3.29 18 4.83 18H7.5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 7.5 12H6v-.83A1.17 1.17 0 0 1 7.17 10H9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7.17zm10 0A5.17 5.17 0 0 0 12 11.17v2.66c0 1.54 1.29 2.83 2.83 2.83H17.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H16v-.83A1.17 1.17 0 0 1 17.17 10H19a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1.83z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  {t.avatar && (
                    <div className="w-11 h-11 rounded-full overflow-hidden">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <span className="font-bold text-gray-800 uppercase tracking-wide">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
