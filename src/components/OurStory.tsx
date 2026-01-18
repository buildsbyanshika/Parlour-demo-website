import React from "react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/ourstory.webp"
          alt="Our Story"
          className="rounded-3xl object-cover w-full max-w-md h-auto md:h-[400px]"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-serif sm:text-4xl lg:text-6xl font-bold text-pink-600 mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
          At LadiesParlour, our journey began with a passion to redefine beauty and self-care.
          We believe everyone deserves to feel confident and radiant in their own skin.
          Our expert team is dedicated to providing premium treatments tailored to your unique needs.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
          Over the years, we have crafted an environment where tradition meets innovation,
          blending the finest products with skilled artistry. Our story is one of care,
          commitment, and community, with countless satisfied clients who inspire us every day.
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Join us on this beautiful journey to wellness and elegance. LadiesParlour is not just a salon;
          it's your partner in beauty, confidence, and self-love.
        </p>
      </div>
    </section>
  );
}
