"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    writer: "Kaylin G.",
    type: "Research paper",
    text: "The experts are super friendly and respond within few minutes. And the content they deliver is always on flick. Thanks!",
    customerId: "#315479",
    date: "Mar 11, 2024",
  },
  {
    id: 2,
    writer: "Kate D.",
    type: "Coursework",
    text: "The expert finished my paper a few days before the deadline and the writing was lit.",
    customerId: "#315400",
    date: "Mar 6, 2024",
  },
  {
    id: 3,
    writer: "Colton M.",
    type: "Essay",
    text: "I was looking for someone who can write essay for me. The writer I chose was very quick and the essay was well written.",
    customerId: "#315358",
    date: "Feb 22, 2024",
  },
  {
    id: 4,
    writer: "Noah Duvall",
    type: "Research paper",
    text: "Overall the writer did well and was extremely helpful in editing areas I felt needed it. Would recommend...",
    customerId: "#315290",
    date: "Mar 12, 2024",
  },
  {
    id: 5,
    writer: "Mara Thompson",
    type: "Essay",
    text: "Great work and on time. I will surely use this service again....Thank you...",
    customerId: "#315235",
    date: "Mar 5, 2024",
  },
  {
    id: 6,
    writer: "John Greene",
    type: "Dissertation",
    text: "My writer was great, professional and the paper was done on time. Great service that I will be using through my entire...",
    customerId: "#315198",
    date: "Feb 21, 2024",
  }
];

const generalFeedback = [
  {
    id: 1,
    author: "Kimberly J.",
    text: "This will be my first experience using your service and so far it has been a smooth platform.",
    date: "Mar 12, 2024",
  },
  {
    id: 2,
    author: "Susan F.",
    text: "I liked that multiple people respond to the tasks. You can also text one on one to everyone. It was great.",
    date: "Mar 8, 2024",
  },
  {
    id: 3,
    author: "Richard B.",
    text: "I can not wait to see the finished product. I hope this is something I can use for a long time, to save myself from headaches...",
    date: "Mar 4, 2024",
  },
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("writers");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-12">
          Customers are talking about our writing service
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          See what customers are saying about their experience with our essay writing services.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md border border-gray-200 p-1 bg-gray-50">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "writers"
                  ? "bg-white shadow-sm text-[#3A4373]"
                  : "text-gray-600 hover:text-[#3A4373]"
              }`}
              onClick={() => setActiveTab("writers")}
            >
              Writer Reviews
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "platform"
                  ? "bg-white shadow-sm text-[#3A4373]"
                  : "text-gray-600 hover:text-[#3A4373]"
              }`}
              onClick={() => setActiveTab("platform")}
            >
              Platform Feedback
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "trustpilot"
                  ? "bg-white shadow-sm text-[#3A4373]"
                  : "text-gray-600 hover:text-[#3A4373]"
              }`}
              onClick={() => setActiveTab("trustpilot")}
            >
              Online Ratings
            </button>
          </div>
        </div>

        {/* Writer Reviews */}
        {activeTab === "writers" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-semibold text-[#3A4373]">Writer: {testimonial.writer}</p>
                      <p className="text-sm text-gray-500">{testimonial.type}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700">{testimonial.text}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <p>Customer ID: {testimonial.customerId}</p>
                    <p>{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Platform Feedback */}
        {activeTab === "platform" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generalFeedback.map((feedback) => (
              <Card key={feedback.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#E28222" className="mr-2">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#E28222" className="mr-2">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#E28222" className="mr-2">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#E28222" className="mr-2">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#E28222">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="mb-4 text-gray-700">{feedback.text}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-[#3A4373]">{feedback.author}</p>
                    <p className="text-sm text-gray-500">{feedback.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Trustpilot Reviews */}
        {activeTab === "trustpilot" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(3, 6).map((testimonial) => (
              <Card key={testimonial.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#00b67a] text-white px-2 py-1 rounded text-xs font-semibold mr-3">
                      Excellent
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" className="mr-1">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" className="mr-1">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" className="mr-1">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" className="mr-1">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{testimonial.type}</h3>
                  <p className="mb-4 text-gray-700">{testimonial.text}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-[#3A4373]">{testimonial.writer}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/reviews">
            <Button className="bg-[#E28222] hover:bg-[#d57920] text-white px-6">
              Check all reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
