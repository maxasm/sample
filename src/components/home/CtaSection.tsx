import Link from "next/link";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#3A4373] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Brand trusted by over 1.5 million <br className="hidden md:block" />
          satisfied students worldwide
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Our years of experience have taught us meticulously and comprehensively how to care for our client's evolving needs.
        </p>
        <Link href="/order">
          <Button className="bg-[#E28222] hover:bg-[#d57920] text-white px-8 py-3 text-lg rounded-md">
            Try for yourself
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
