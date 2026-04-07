// types.ts
export interface ServiceSimplified {
  id: number;
  heading: string;
  subservices: { name: string; price: string }[];
}

export interface FormData {
  service: ServiceSimplified[];
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: unknown;  // ← ADD THIS LINE
}
