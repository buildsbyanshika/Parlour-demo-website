import { FormData } from './BookStep';
import React, { useState } from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

interface ClientInfoStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  gotoBack: () => void;
  gotoNext: () => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ClientInfoStep({ formData, setFormData, gotoBack, gotoNext }: ClientInfoStepProps) {
  const [emailIsValid, setEmailIsValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = emailRegex.test(email);
    setFormData({ ...formData, email });
    setEmailIsValid(isValid);
  };
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailIsValid) {
      gotoNext();
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone && emailIsValid;
  
  return (
    <form className="space-y-6 text-black" onSubmit={handleFormSubmit}>
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Client Information</h2>
      <input
        type="text"
        className="border rounded w-full p-2 focus:border-pink-500"
        placeholder="Name* "
        required
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        className={`border rounded w-full p-2 ${!emailIsValid && formData.email ? 'border-red-500' : 'focus:border-pink-500'}`}
        placeholder="Email* "
        required
        value={formData.email}
        onChange={handleEmailChange}
      />
      {!emailIsValid && formData.email && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
      )}
      <input
        type="number"
        className="border rounded w-full p-2 focus:border-pink-500"
        placeholder="Phone Number* "
        required
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
      />
      <textarea
        className="border rounded w-full p-2 focus:border-pink-500"
        placeholder="Message* "
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
      />
      <div className="flex justify-between mt-8">
        <BackButton onClick={gotoBack} />
        <NextButton 
          onClick={gotoNext} 
          disabled={!isFormValid} 
        />
      </div>
    </form>
  );
}