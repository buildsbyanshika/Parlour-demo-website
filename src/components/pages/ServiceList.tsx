import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesList() {
  return (
    <>
    <section className="min-h-screen flex flex-col md:flex-row bg-pink-200 py-16 items-center">
  <div className="md:w-4/12 px-4 sm:px-8 text-left mb-6 md:mb-0">
    <h2 className="text-3xl sm:text-4xl font-bold font-serif text-black mb-6 sm:mb-8">
      Discover Our <span className="text-pink-500">Services</span>
    </h2>
    <p className="mb-4 sm:mb-6 text-gray-700 text-base sm:text-lg">
      Explore our range of treatments and packages designed to help you look and feel your best.
    </p>
  </div>

  <div className="md:w-8/12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2 sm:px-8">
    {services.map(service => (
      <ServiceCard key={service.id} service={service} />
    ))}
  </div>
</section>
</>
  );
}
