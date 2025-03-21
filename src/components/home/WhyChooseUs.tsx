import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Original writing",
    description: "When you rely on our essay writing service, you can expect a meticulously crafted, highly original piece tailored to your specific instructions. Our experts write a paper from scratch, ensuring unmatched authenticity with a guaranteed uniqueness level exceeding 96%. Originality report available upon your request.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "24/7 support by your side",
    description: "No matter the time, our dedicated support team is available around the clock to assist with your \"write my essay for me\" requests. With our reliable essay service, you'll never face delays or unanswered questions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: "Personal data safety",
    description: "Hire a paper writer without worrying about the security of your personal and financial information. At ExpertectWriters, we prioritize your data security with a strict Privacy Policy and advanced website encryption. Pay for essay through trusted and secure providers for your peace of mind.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Unlimited edits free of charge",
    description: "When you pay for essay writing at ExpertectWriters, your satisfaction is our priority. Enjoy free revisions within 14 to 30 days after order completion, based on its specifics. Our expert essay writers are committed to ensuring your paper meets your requirements every step of the way.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#F5F4FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A4373] mb-4">
          Why choose our essay writing service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#E28222]/10 text-[#E28222]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3A4373] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-12">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 md:col-span-1 text-center p-4">
              <div className="text-[#E28222] font-bold text-2xl md:text-4xl mb-1">FREE</div>
              <div className="text-[#3A4373] font-medium">Plagiarism report</div>
            </div>
            <div className="col-span-4 md:col-span-1 text-center p-4">
              <div className="text-[#E28222] font-bold text-2xl md:text-4xl mb-1">FREE</div>
              <div className="text-[#3A4373] font-medium">The best writer</div>
            </div>
            <div className="col-span-4 md:col-span-1 text-center p-4">
              <div className="text-[#E28222] font-bold text-2xl md:text-4xl mb-1">FREE</div>
              <div className="text-[#3A4373] font-medium">Formatting</div>
            </div>
            <div className="col-span-4 md:col-span-1 text-center p-4">
              <div className="text-[#E28222] font-bold text-2xl md:text-4xl mb-1">FREE</div>
              <div className="text-[#3A4373] font-medium">Unlimited revisions</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Get all these features for FREE!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
