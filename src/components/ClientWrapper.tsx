"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WritersShowcase from "@/components/home/WritersShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import { Toaster } from "sonner";

interface ClientWrapperProps {
  page: string;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ page }) => {
  if (page === "home") {
    return (
      <>
        <HeroSection />
        <WritersShowcase />
        <HowItWorks />
        <Testimonials />
        <WhyChooseUs />
        <CtaSection />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <Toaster />
    </>
  );
};

export default ClientWrapper;
