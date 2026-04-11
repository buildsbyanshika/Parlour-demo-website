import React from "react";

export default function Contact() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999179523603!2d2.292292615674053!3d48.858373979287115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f1055d76dfd%3A0x406ab6fbad48530!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1691986303258!5m2!1sen!2sin";

  return (
    <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
      <iframe
        src={mapSrc}
        className="absolute inset-0 w-full h-full border-0 filter brightness-75"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>

      <div
        className="
          absolute
          top-6 sm:top-10 md:top-16
          left-1/2 md:left-16
          -translate-x-1/2 md:translate-x-0
          bg-white bg-opacity-90 backdrop-blur-sm
          rounded-b-[80px] rounded-tl-3xl rounded-tr-3xl
          shadow-lg
          w-[90%] sm:w-[80%] md:w-auto
          max-w-md
          p-6 sm:p-8 md:p-10
          flex flex-col gap-4 sm:gap-6
          z-10
        "
      >
        <h2 className="text-2xl font-serif sm:text-3xl md:text-4xl font-bold text-pink-600">
          Location
        </h2>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-black mb-1">
            Address
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Eiffel Tower <br />
            Champ de Mars, 5 Avenue Anatole France <br />
            75007 Paris, France
          </p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-black mb-1">
            Email
          </h3>
          <a
            href="mailto:contact@ladiesparlour.fr"
            className="text-pink-600 hover:underline break-all text-sm sm:text-base"
          >
            contact@ladiesparlour.fr
          </a>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-black mb-1">
            Phone
          </h3>
          <a
            href="tel:+33123456789"
            className="text-pink-600 hover:underline text-sm sm:text-base"
          >
            +33 1 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  );
}
