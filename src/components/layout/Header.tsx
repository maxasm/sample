"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Name */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#3A4373]">Expertec Writers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/writers" className="text-[#3A4373] hover:text-[#E28222] font-medium">
            Writers
          </Link>
          <Link href="/how-to-order" className="text-[#3A4373] hover:text-[#E28222] font-medium">
            How to order
          </Link>
          <div className="relative group">
            <button className="text-[#3A4373] hover:text-[#E28222] font-medium flex items-center">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
              <Link href="/custom-essay" className="block px-4 py-2 hover:bg-gray-100">
                Custom Essay Writing Service
              </Link>
              <Link href="/dissertation-writing" className="block px-4 py-2 hover:bg-gray-100">
                Dissertation Writing
              </Link>
              <Link href="/research-paper" className="block px-4 py-2 hover:bg-gray-100">
                Research Paper Writing
              </Link>
              <Link href="/term-paper" className="block px-4 py-2 hover:bg-gray-100">
                Term Paper Writing
              </Link>
              <Link href="/view-all-services" className="block px-4 py-2 hover:bg-gray-100 text-[#E28222]">
                View All Services
              </Link>
            </div>
          </div>
          <Link href="/reviews" className="text-[#3A4373] hover:text-[#E28222] font-medium">
            Reviews
          </Link>
          <Link href="/about-us" className="text-[#3A4373] hover:text-[#E28222] font-medium">
            About us
          </Link>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline" className="text-[#3A4373] border-[#3A4373] hover:bg-[#F5F4FA]">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#E28222] hover:bg-[#d57920] text-white">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3A4373] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link href="/writers"
              className="text-[#3A4373] hover:text-[#E28222] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Writers
            </Link>
            <Link href="/how-to-order"
              className="text-[#3A4373] hover:text-[#E28222] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How to order
            </Link>
            <div className="relative">
              <button className="text-[#3A4373] hover:text-[#E28222] font-medium flex items-center">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="mt-2 ml-4 space-y-2">
                <Link href="/custom-essay"
                  className="block text-[#3A4373] hover:text-[#E28222]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Essay Writing Service
                </Link>
                <Link href="/dissertation-writing"
                  className="block text-[#3A4373] hover:text-[#E28222]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dissertation Writing
                </Link>
                <Link href="/research-paper"
                  className="block text-[#3A4373] hover:text-[#E28222]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Research Paper Writing
                </Link>
                <Link href="/term-paper"
                  className="block text-[#3A4373] hover:text-[#E28222]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Term Paper Writing
                </Link>
                <Link href="/view-all-services"
                  className="block text-[#E28222] hover:text-[#E28222]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>
            <Link href="/reviews"
              className="text-[#3A4373] hover:text-[#E28222] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link href="/about-us"
              className="text-[#3A4373] hover:text-[#E28222] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/login">
                <Button variant="outline" className="w-full text-[#3A4373] border-[#3A4373] hover:bg-[#F5F4FA]">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full bg-[#E28222] hover:bg-[#d57920] text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
