import React from "react";
import { pricingData, PricingItem } from "@/data/pricing";
import Link from "next/link";

export default function Pricing() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
                    Our Pricing
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover our affordable beauty services designed to make you look and feel your best.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingData.map(({ id, category, services }: PricingItem) => (
                    <div
                        key={id}
                        className="bg-white rounded-3xl shadow-lg border border-pink-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="bg-pink-500 text-white px-6 py-4">
                            <h3 className="text-lg sm:text-xl font-bold text-center">
                                {category}
                            </h3>
                        </div>

                        <div className="p-4 sm:p-6">
                            <div className="space-y-3">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="flex justify-between items-center py-2 border-b border-pink-100 last:border-b-0"
                                    >
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-800 text-sm sm:text-base">
                                                {service.name}
                                            </h4>
                                            {service.duration && (
                                                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                                    Duration: {service.duration}
                                                </p>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <span className="text-lg sm:text-xl font-bold text-pink-600">
                                                {service.price}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <div className="mt-4 text-center">
                                    <Link href={`/appointment?category=${encodeURIComponent(category)}`} passHref>
                                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm ">
                                        Book Now
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}