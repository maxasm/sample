"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const writers = [
  {
    id: 1,
    name: "Edward M.",
    image: "/images/writers/writer1.jpg",
    rating: 4.9,
    degree: "Masters degree",
    subjects: ["Business and Management"],
    success: "99%",
    repeatHireRate: "40%",
    lastReviews: "4.9",
    lastReviewsCount: 50,
    finishOnTime: "82%",
  },
  {
    id: 2,
    name: "Stephanie S.",
    image: "/images/writers/writer2.jpg",
    rating: 4.9,
    degree: "Bachelors degree",
    subjects: ["English", "History"],
    success: "98%",
    repeatHireRate: "39%",
    lastReviews: "4.9",
    lastReviewsCount: 50,
    finishOnTime: "79%",
  },
  {
    id: 3,
    name: "Maison T.",
    image: "/images/writers/writer3.jpg",
    rating: 4.9,
    degree: "Bachelors degree",
    subjects: ["Psychology", "Criminology"],
    success: "97%",
    repeatHireRate: "48%",
    lastReviews: "4.9",
    lastReviewsCount: 50,
    finishOnTime: "74%",
  },
  {
    id: 4,
    name: "Diana C.",
    image: "/images/writers/writer4.jpg",
    rating: 5.0,
    degree: "Bachelors degree",
    subjects: ["Nursing", "Healthcare"],
    success: "99%",
    repeatHireRate: "44%",
    lastReviews: "5.0",
    lastReviewsCount: 50,
    finishOnTime: "84%",
  },
  {
    id: 5,
    name: "Martin S.",
    image: "/images/writers/writer5.jpg",
    rating: 4.8,
    degree: "Masters degree",
    subjects: ["Education", "Social work"],
    success: "96%",
    repeatHireRate: "37%",
    lastReviews: "4.8",
    lastReviewsCount: 50,
    finishOnTime: "82%",
  },
];

const categories = [
  { id: "all", name: "All subjects" },
  { id: "business", name: "Business and Management" },
  { id: "nursing", name: "Nursing" },
  { id: "english", name: "English" },
  { id: "psychology", name: "Psychology" },
  { id: "healthcare", name: "Healthcare+142 subjects" },
];

const WritersShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWriters = activeCategory === "all"
    ? writers
    : writers.filter(writer => {
        if (activeCategory === "business") return writer.subjects.includes("Business and Management");
        if (activeCategory === "nursing") return writer.subjects.includes("Nursing");
        if (activeCategory === "english") return writer.subjects.includes("English");
        if (activeCategory === "psychology") return writer.subjects.includes("Psychology");
        if (activeCategory === "healthcare") return writer.subjects.includes("Healthcare");
        return true;
      });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-4">
          Top-notch essay writers in one place
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Welcome to a platform where students get matched with quality essay help. Compare our essay writers
          ratings and choose your perfect writing assistance partner. You're just steps away from top-notch support!
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-[#3A4373] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Writers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredWriters.map((writer) => (
            <Card key={writer.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={writer.image}
                      alt={writer.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center mb-2">
                    <span className="text-lg font-semibold mr-2">{writer.rating}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E28222">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>

                  <h3 className="font-medium text-lg mb-1">{writer.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{writer.degree}</p>

                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {writer.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 w-full mb-4 text-sm">
                    <div>
                      <p className="text-gray-500">Success</p>
                      <p className="font-medium">{writer.success}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Repeat hire rate</p>
                      <p className="font-medium">{writer.repeatHireRate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last {writer.lastReviewsCount} reviews</p>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">{writer.lastReviews}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#E28222">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500">Finish on time</p>
                      <p className="font-medium">{writer.finishOnTime}</p>
                    </div>
                  </div>

                  <Link href="/order" className="w-full">
                    <Button variant="outline" className="w-full border-[#3A4373] text-[#3A4373] hover:bg-[#F5F4FA]">
                      Do my paper
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/writers">
            <Button className="bg-[#E28222] hover:bg-[#d57920] text-white px-6">
              Choose my pro
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WritersShowcase;
