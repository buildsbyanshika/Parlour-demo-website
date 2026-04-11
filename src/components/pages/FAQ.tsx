"use client";
import React, { useState } from "react";
import { faqData, FaqItem } from "@/data/faq";
import Link from "next/link";

export default function Faq() {
    const [openId, setOpenId] = useState<number>(faqData[0]?.id ?? 0);

    const toggleFaq = (id: number) => {
        setOpenId((prev) => (prev === id ? 0 : id));
    };

    return (
        <section className="max-w-7xl mx-auto p-6 sm:p-12">
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-12 text-center font-bold">
                The Most Common Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {faqData.map(({ id, question, answer }: FaqItem) => {
                    const isOpen = openId === id;

                    return (
                        <div
                            key={id}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(id)}
                                className="w-full flex justify-between items-center px-2 py-4 bg-white transition focus:outline-none"
                                aria-expanded={isOpen}
                                aria-controls={`faq-answer-${id}`}
                            >
                                <span className="text-lg sm:text-xl font-medium text-gray-800">
                                    {question}
                                </span>
                                <span
                                    className={`transform transition-transform text-black duration-300 ml-4 ${isOpen ? "rotate-180" : "rotate-0"}`}
                                >
                                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div className="border-b border-gray-300 mb-4" />

                            <div
                                id={`faq-answer-${id}`}
                                className={`transition-all ease-in-out duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="px-2 pb-6 text-gray-600 text-base  sm:text-md">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center mt-10">
                <Link href="/contact">
                    <button className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition-colors duration-300">
                        HAVE MORE QUESTIONS?
                    </button>
                </Link>
            </div>
        </section>
    );
}