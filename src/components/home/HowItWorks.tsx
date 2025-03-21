"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      title: "Give us your essay writing instructions",
      description: "To complete your write my essay request, our team needs a few details concerning your order. Fill out a short form to specify what kind of essay writing help you need and place your order",
      image: "/images/hero/hero2.jpg",
    },
    {
      title: "Hire your ideal essay writer online",
      description: "Browse paper writer accounts to see their ratings, customer reviews, and other information. Compare different experts and pick one to write paper for you.",
      image: "/images/hero/hero3.jpg",
    },
    {
      title: "Get your paper writing done",
      description: "Once your order is ready, download the paper to check if it meets your needs. Then, pay for essay using your personal account at ExpertectWriters.",
      image: "/images/hero/hero1.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F4FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-12">
          Work with your chosen essay writer online
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Curious about a specific paper writer? Check their profile for ratings and reviews.
          Once you've made your choice, they'll start to write paper for you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Steps & Image */}
          <div className="relative">
            <div className="mb-8">
              <div className="flex mb-8">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`relative flex-1 pb-4 text-center font-medium border-b-2 transition-colors ${
                      activeTab === index
                        ? "border-[#E28222] text-[#3A4373]"
                        : "border-gray-300 text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F4FA] border border-gray-300 text-[#3A4373] mb-2">
                      {index + 1}
                    </span>
                    <span className="block text-sm md:text-base truncate">
                      {step.title.split(' ').slice(0, 3).join(' ')}...
                    </span>
                  </button>
                ))}
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#3A4373] mb-4">
                  {steps[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {steps[activeTab].description}
                </p>
                <Link href="/order">
                  <Button className="bg-[#E28222] hover:bg-[#d57920] text-white">
                    Create an order
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Step Image */}
          <div className="hidden lg:block rounded-lg overflow-hidden shadow-lg">
            <Image
              src={steps[activeTab].image}
              alt={`Step ${activeTab + 1}: ${steps[activeTab].title}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
