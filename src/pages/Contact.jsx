import React from "react";

function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Have a question or feedback? Feel free to reach out to the developer
            here:{" "}
            <a
              href="https://github.com/sk-adi"
              className="text-blue-400 underline hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border border-gray-700 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your Email ID"
                className="w-full px-4 py-2 border border-gray-700 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Enter your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-700 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 font-medium py-2 rounded-lg hover:bg-yellow-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
