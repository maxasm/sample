"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    // Calculate mouse position relative to the element (in percentage)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;  // -1 to 1
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="bg-[#F5F4FA] py-12 md:py-16 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A4373] leading-tight mb-6">
              Your Academic Success Starts Here!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Trust your assignments to an essay writing service with the fastest delivery time and human-written content.
            </p>
            <Link href="/order">
              <Button
                className={`bg-[#E28222] hover:bg-[#d57920] text-white py-3 px-6 text-lg rounded-md transition-all ${isHovered ? 'shadow-lg transform -translate-y-1' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Write my paper
              </Button>
            </Link>

            <div className="flex flex-wrap items-center mt-10 gap-4 sm:gap-8">
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="ExpertectWriters"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="text-sm sm:text-base font-medium">4.9</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="ExpertectWriters"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span className="text-sm sm:text-base font-medium">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm sm:text-base font-medium">AI & Plagiarism control*</span>
                <span className="text-xs text-gray-500 block">meets academic standards of uniqueness</span>
              </div>
            </div>

            <div className="flex flex-wrap mt-6 gap-6 sm:gap-10">
              <div>
                <p className="text-sm text-gray-500">Deadlines from</p>
                <p className="text-xl font-bold text-[#3A4373]">3 hours</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">In this together for</p>
                <p className="text-xl font-bold text-[#3A4373]">10 years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Happy customers</p>
                <p className="text-xl font-bold text-[#3A4373]">1.5M+</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block" style={{ perspective: '1500px' }}>
            <div 
              className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-100 ease-out"
              style={{
                transform: `
                  rotateY(${mousePosition.x * 20}deg)
                  rotateX(${-mousePosition.y * 20}deg)
                  scale(1.05)
                `,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/images/hero/hero1.jpg"
                alt="Professional essay writing"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
                draggable={false}
              />
            </div>

            <div className="absolute top-1/4 -right-12 w-24 h-24 bg-[#E28222] rounded-full opacity-20 z-0"></div>
            <div className="absolute bottom-1/3 -left-12 w-32 h-32 bg-[#3A4373] rounded-full opacity-10 z-0"></div>

            <div className="absolute -top-4 right-10 bg-white p-3 rounded-lg shadow-lg z-20 hidden md:block">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/writers/writer1.jpg"
                    alt="Writer"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#3A4373]">Michael S.</p>
                  <p className="text-xs text-gray-500">Academic Writer</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-10 bg-white p-3 rounded-lg shadow-lg z-20 hidden md:block">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src="/images/writers/writer2.jpg"
                    alt="Writer"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#3A4373]">Emily R.</p>
                  <p className="text-xs text-gray-500">Research Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
