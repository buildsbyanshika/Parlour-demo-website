import React, { useState, useEffect } from "react";
import { serviceDataSimplified, ServiceSimplified } from "@/data/servicesDataForStep";
import NextButton from "./NextButton";
import { FormData } from './types';

interface SelectedServices {
  [serviceId: number]: string[];
}

interface ServiceStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  gotoNext: () => void;
}

export default function ServiceStep({ formData, setFormData, gotoNext }: ServiceStepProps) {
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({});

  useEffect(() => {
    if (Array.isArray(formData.service)) {
      const initial: SelectedServices = {};
      formData.service.forEach(service => {
        initial[service.id] = service.subservices.map(s => s.name);
      });
      setSelectedServices(initial);
    }
  }, [formData.service]);

  const toggleSubservice = (serviceId: number, subserviceName: string) => {
    setSelectedServices(prev => {
      const currentSelected = prev[serviceId] || [];
      let updatedSelected: string[];
      if (currentSelected.includes(subserviceName)) {
        updatedSelected = currentSelected.filter(name => name !== subserviceName);
      } else {
        updatedSelected = [...currentSelected, subserviceName];
      }
      return { ...prev, [serviceId]: updatedSelected };
    });
  };

  const isNextDisabled = Object.values(selectedServices).every(arr => arr.length === 0);

  const buildSelectedService = (): ServiceSimplified[] => {
    return Object.entries(selectedServices).map(([serviceIdStr, subserviceNames]) => {
      const serviceId = Number(serviceIdStr);
      const service = serviceDataSimplified.find(s => s.id === serviceId)!;
      return {
        ...service,
        subservices: service.subservices.filter(sub => subserviceNames.includes(sub.name)),
      };
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Select Services</h2>
      <form className="space-y-6">
        {serviceDataSimplified.map(service => (
          <div key={service.id} className="border-b border-b-gray-400 pb-4 mb-4">
            <h3 className="font-semibold text-lg text-pink-600 mb-2">{service.heading}</h3>
            <ul className="space-y-2">
              {service.subservices.map(sub => {
                const checked = selectedServices[service.id]?.includes(sub.name) || false;
                return (
                  <li key={sub.name} className="flex items-center justify-between text-gray-800 px-2">
                    <label className="flex items-center space-x-3 w-full cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-pink-600 rounded focus:ring-pink-500 transition"
                        checked={checked}
                        onChange={() => toggleSubservice(service.id, sub.name)}
                      />
                      <span className="flex-1 text-base">{sub.name}</span>
                    </label>
                    <span className="text-pink-600 font-bold whitespace-nowrap">{sub.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="flex justify-end mt-8">
          <NextButton
            onClick={() => {
              setFormData({ ...formData, service: buildSelectedService() });
              gotoNext();
            }}
            disabled={isNextDisabled}
          />
        </div>
      </form>
    </div>
  );
}
