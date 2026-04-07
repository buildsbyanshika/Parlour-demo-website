import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

interface DateTimeStepProps {
  formData: { date: string; time: string; [key: string]: unknown };
  setFormData: React.Dispatch<React.SetStateAction<unknown>>;
  gotoBack: () => void;
  gotoNext: () => void;
}

export default function DateTimeStep({ formData, setFormData, gotoBack, gotoNext }: DateTimeStepProps) {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Select Date & Time</h2>
      <div>
        <label className="block text-black font-semibold mb-2">Date</label>
        <input
          type="date"
          className="border text-gray-700 rounded w-full p-2 focus:border-pink-500"
          value={formData.date}
          onChange={e => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-black  font-semibold mb-2">Time</label>
        <input
          type="time"
          className="border text-gray-700 rounded w-full p-2 focus:border-pink-500"
          value={formData.time}
          onChange={e => setFormData({ ...formData, time: e.target.value })}
        />
      </div>
      <div className="flex justify-between mt-8">
        <BackButton onClick={gotoBack} />
        <NextButton
          onClick={gotoNext}
          disabled={!formData.date || !formData.time}
        />
      </div>
    </form>
  );
}
