"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BookButton from "./BookButton";
import BackButton from "./BackButton";
import Notification from "@/components/Notificaton";
import {TERMS_AND_CONDITIONS_DATA} from "@/data/bookAppointmentData";

import { FormData } from './types';

interface BookStepProps {
  formData: FormData;
  gotoBack: () => void;
}


export default function BookStep({ formData, gotoBack }: BookStepProps) {
  const router = useRouter();
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({
    message: "",
    type: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: "", type: "" });
        if (notification.type === "success") {
          router.push("/");
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification, router]);

  const submitBooking = async () => {
    setNotification({ message: "", type: "" });
    try {
      const body = {
        ...formData,
        message: formData.message || "",
        termsAccepted,
      };

      // console.log("Sending body:", body);
      // console.log("JSON to be sent:", JSON.stringify(body, null, 2));

      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const out = await res.json();

      if (out.success) {
        setNotification({
          message: "Appointment booked successfully!",
          type: "success",
        });
      } else {
        setNotification({
          message: "Booking failed. Please try again!",
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setNotification({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Confirm Booking</h2>
      
      <div className="mt-6">
        <h4 
          className="text-lg font-bold text-pink-600 "
        >
           Read Terms & Conditions
        </h4>
        
          <div className="mt-4 p-4 border-gray-300 rounded-lg">
            <h3 className="text-2xl font-serif text-pink-900 font-bold mb-4">{TERMS_AND_CONDITIONS_DATA.heading}</h3>
            {TERMS_AND_CONDITIONS_DATA.points.map((point, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-md font-semibold text-pink-500">{point.title}</h4>
                <p className="text-gray-700 text-sm mt-1">{point.content}</p>
              </div>
            ))}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-pink-500">{TERMS_AND_CONDITIONS_DATA.contact.title}</h4>
              <p className="text-gray-700 text-sm mt-1">
                {TERMS_AND_CONDITIONS_DATA.contact.content}
              </p>
              <ul className="mt-2 text-gray-700 text-sm space-y-1">
                <li>
                  **Email:** <a href={`mailto:${TERMS_AND_CONDITIONS_DATA.contact.email}`} className="text-pink-600 hover:underline">{TERMS_AND_CONDITIONS_DATA.contact.email}</a>
                </li>
                <li>
                  **Phone:** <a href={`tel:${TERMS_AND_CONDITIONS_DATA.contact.phone}`} className="text-pink-600 hover:underline">{TERMS_AND_CONDITIONS_DATA.contact.phone}</a>
                </li>
              </ul>
            </div>
          </div>
      
      </div>

      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          id="terms-checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mr-2 h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
        />
        <label htmlFor="terms-checkbox" className="text-sm text-gray-700">
          I have read and agree to the Terms & Conditions.
        </label>
      </div>

      <div className="flex justify-between mt-8">
        <BackButton onClick={gotoBack} />
        <BookButton onClick={submitBooking} disabled={!termsAccepted} />
      </div>

      <Notification
        message={notification.message}
        type={notification.type as 'success' | 'error'}
        onClose={() => setNotification({ message: "", type: "" })}
      />
    </div>
  );
}