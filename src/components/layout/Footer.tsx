import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#303557] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Name and Copyright */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Expertec Writers</span>
            </Link>
            <p className="text-sm text-gray-300">
              2025 Copyright Expertec Writers, All rights reserved
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
              <li><Link href="/cookies-policy" className="hover:text-white">Cookies policy</Link></li>
              <li><Link href="/code-of-conduct" className="hover:text-white">Code of conduct</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertec Writers products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/plagiarism-checker" className="hover:text-white">Plagiarism checker</Link></li>
              <li><Link href="/essay-writing-app" className="hover:text-white">Essay writing app</Link></li>
              <li><Link href="/citation-generator" className="hover:text-white">Citation generator</Link></li>
              <li><Link href="/homework-planner" className="hover:text-white">Homework planner</Link></li>
              <li><Link href="/ai-humanizer" className="hover:text-white">AI humanizer</Link></li>
            </ul>
          </div>

          {/* Popular services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/dissertation-writing" className="hover:text-white">Dissertation writing</Link></li>
              <li><Link href="/research-paper" className="hover:text-white">Research paper writing</Link></li>
              <li><Link href="/term-paper" className="hover:text-white">Term paper writing</Link></li>
              <li><Link href="/college-essay" className="hover:text-white">College essay writing</Link></li>
              <li><Link href="/thesis-writing" className="hover:text-white">Thesis writing service</Link></li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/contact-us" className="hover:text-white">Contact us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/become-a-writer" className="hover:text-white">Become an expert</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-xs text-gray-400">
          <p>Our expert's notes are NOT intended to be forwarded as finalized projects, as it is only strictly meant to be used for research and study purposes. We do not endorse or condone any type of plagiarism.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
