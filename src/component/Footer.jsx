import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          {/* Left Side (Logo) */}
          <div className="mb-6 md:mb-0">
            <div className="logo text-2xl font-bold text-yellow-400">
              TheMovie
            </div>
          </div>

          {/* Right Side (Links) */}
          <div className="flex space-x-12 text-center md:text-left">
            {/* First List */}
            <div className="space-y-2">
              <ul>
                <li>
                  <a href="/" className="hover:text-yellow-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-yellow-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-yellow-400 transition"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/explore"
                    className="hover:text-yellow-400 transition"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </div>

            {/* Second List */}
            <div className="space-y-2">
              <ul>
                <li>
                  <a href="/terms" className="hover:text-yellow-400 transition">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-yellow-400 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sk-adi"
                    className="hover:text-yellow-400 transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-yellow-400 transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Copyright Section */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} TheMovie. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
