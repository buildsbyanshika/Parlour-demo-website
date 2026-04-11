"use client";
import React from "react";
import Stepper from "../bookAppointment/Stepper";
import BackButton from "../BackButton";

export default function AppointmentPage() {
  return (
    <div
      className="min-h-screen p-4 md:p-12 flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/services_bredcrumb.jpg')" }}
    >
      <h1 className="text-4xl font-extrabold text-pink-600 mb-8 mt-10 select-none">
        Book an Appointment
      </h1>
      <div className="w-full max-w-5xl shadow-lg rounded-lg p-6 bg-white bg-opacity-80">
        <Stepper />
        <div className=" mt-7 max-w-3xl  ">
          <BackButton />
        </div>
      </div>
    </div>
  );
}