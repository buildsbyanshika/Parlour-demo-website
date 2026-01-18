import { Service } from "@/data/services";
import Image from "next/image";

export default function ServiceDetail({ service }: { service: Service }) {
  if (!service.sections) {
    return (
      <section className="p-8 my-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">{service.title}</h1>
          <div className="text-pink-500 font-bold text-xl mb-2">{service.price}</div>
          <p className="text-gray-700 mb-6">{service.description}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {service.sections.map((section, idx) => (
        <section
          key={section.title}
          className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div
            className={`md:w-1/2 flex justify-center items-center mb-6 md:mb-0 
            ${
              idx % 2 === 0
                ? "order-first md:order-first"
                : "order-first md:order-last"
            }
            `}
          >
            <Image
              src={section.image}
              alt={section.title}
              className="w-full h-100 rounded-xl object-contain"
            />
          </div>

          <div
            className={`md:w-1/2 flex flex-col justify-center
            ${
              idx % 2 === 0
                ? "order-last md:order-last"
                : "order-last md:order-first"
            }
            `}
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-gray-700 mb-4">{section.description}</p>
            )}
            <ul className="space-y-2">
              {section.options.map((opt) => (
                <li
                  key={opt.name}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="font-semibold text-black">{opt.name}</span>
                  <span className="text-pink-500 font-bold">{opt.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
