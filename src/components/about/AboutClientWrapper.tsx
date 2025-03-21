"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const AboutClientWrapper = () => {
  return (
    <>
      <div className="bg-[#F5F4FA] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A4373] mb-6">
            Papers from leading industry experts
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Our key mission is to make sure that all students have access to well-written papers when they need them most.
          </p>
          <Link href="/order">
            <Button className="bg-[#E28222] hover:bg-[#d57920] text-white px-6 py-3 text-lg">
              Order your paper
            </Button>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3A4373] mb-2">350+</div>
              <p className="text-gray-600">Verified writers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3A4373] mb-2">130+</div>
              <p className="text-gray-600">Academic subjects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3A4373] mb-2">100%</div>
              <p className="text-gray-600">Human-written papers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3A4373] mb-2">3-hour</div>
              <p className="text-gray-600">Minimum deadline</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-12">
            Our core values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F5F4FA] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E28222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-3">Punctuality</h3>
              <p className="text-gray-600">
                Missing deadlines can really set you back. We strive to finish every order with time to spare.
              </p>
            </div>

            <div className="bg-[#F5F4FA] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E28222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-3">Quality</h3>
              <p className="text-gray-600">
                Our reputation is built on delivering top-quality papers. No matter how small the task, we give customers our best.
              </p>
            </div>

            <div className="bg-[#F5F4FA] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E28222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-3">Safety</h3>
              <p className="text-gray-600">
                We prioritize the security of our clients' data, including personal information and bank transactions.
              </p>
            </div>

            <div className="bg-[#F5F4FA] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#E28222]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-3">Transparency</h3>
              <p className="text-gray-600">
                A clear pricing system with no hidden catches, direct access to the writer, and 24/7 support set us apart from competitors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#F5F4FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-6">
            Our pro experts
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Every writer we partner with undergoes a rigorous testing process to verify their professional writing ability — we only work with the best of the best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E28222] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[#3A4373] font-medium">Proof of identity</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E28222] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[#3A4373] font-medium">Diploma verification</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E28222] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[#3A4373] font-medium">Provide writing samples</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E28222] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[#3A4373] font-medium">Test assignment</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E28222] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-[#3A4373] font-medium">Trial period</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-16">
            Meet our customer service team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/writers/writer1.jpg"
                  alt="Customer Service Team Member"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-1">Max</h3>
              <p className="text-[#E28222] font-medium mb-4">Head of customer success</p>
              <p className="text-gray-600">
                "Our team values our customers' trust, satisfaction, and security. We're always ready to tackle all your issues and save you from extra stress."
              </p>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/writers/writer2.jpg"
                  alt="Customer Service Team Member"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-1">Chloe</h3>
              <p className="text-[#E28222] font-medium mb-4">Customer support manager</p>
              <p className="text-gray-600">
                "I enjoy helping customers with any of their issues, be it a minor misunderstanding or a complicated case."
              </p>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/writers/writer4.jpg"
                  alt="Customer Service Team Member"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#3A4373] mb-1">Eric</h3>
              <p className="text-[#E28222] font-medium mb-4">Customer support manager</p>
              <p className="text-gray-600">
                "Communication with our customers brings me true joy. I am happy to make their journey with ExpertectWriters effortless and enjoyable."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact-us">
              <Button className="bg-[#E28222] hover:bg-[#d57920] text-white px-6">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutClientWrapper;
