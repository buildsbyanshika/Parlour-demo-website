import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

interface SummaryStepProps {
  formData: {
    service: {
      heading: string;
      subservices: { name: string; price: string }[];
    }[];
    date: string;
    time?: string;
    name: string;
    email: string;
    phone: string;
    message?: string;
  };
  gotoBack: () => void;
  gotoNext: () => void;
}

export default function SummaryStep({ formData, gotoBack, gotoNext }: SummaryStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Summary</h2>

      <section>
        <h3 className="font-bold text-pink-600 mb-4">Selected Services</h3>
        {formData.service.length > 0 ? (
          formData.service.map((service, idx) => (
            <div key={idx} className="mb-6 border p-4 rounded bg-pink-50">
              <p className="text-black font-bold underline mb-2">{service.heading}</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                {service.subservices.map((sub, i) => (
                  <li key={i}>
                    {sub.name} - {sub.price}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No services selected.</p>
        )}
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-bold text-pink-600">Date & Time</h3>
        <p className="text-gray-600 font-normal">{formData.date} at {formData.time}</p>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-bold text-pink-600">Client Info</h3>
        <p className="text-black font-bold">Name: <span className="font-normal text-gray-600">{formData.name}</span></p>
        <p className="text-black font-bold">Email: <span className="font-normal text-gray-600">{formData.email}</span></p>
        <p className="text-black font-bold">Phone: <span className="font-normal text-gray-600">{formData.phone}</span></p>
        {formData.message && (
          <p className="text-black font-bold">Message: <span className="font-normal text-gray-600">{formData.message}</span></p>
        )}
      </section>

      <div className="flex justify-between mt-8">
        <BackButton onClick={gotoBack} />
        <NextButton onClick={gotoNext} />
      </div>
    </div>
  );
}
