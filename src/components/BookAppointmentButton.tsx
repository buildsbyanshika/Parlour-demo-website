"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BookAppointmentButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/appointment")}
      className="fixed bottom-5 right-5 bg-pink-600 text-white px-5 py-3 
                 rounded-lg shadow-lg font-semibold text-sm sm:text-base
                 transition-colors duration-300 z-[9999]
                 hover:bg-pink-700"
    >
      Book Appointment
    </button>
  );
}
