"use client";

import HeroSection from "@/components/home/HeroSection";
import WritersShowcase from "@/components/home/WritersShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";

export default function HomeClientWrapper() {
  return (
    <>
      <HeroSection />
      <WritersShowcase />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <CtaSection />
    </>
  );
}
