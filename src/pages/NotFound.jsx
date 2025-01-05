import React from "react";

function NotFound() {
  return (
<div className="bg-gray-900 min-h-screen flex items-center justify-center py-12 px-6">
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
    {/* 404 Title */}
    <h1 className="text-4xl font-bold text-red-500 mb-4">404: Not Found</h1>

    {/* Message */}
    <p className="text-lg text-gray-300 mb-6">
      Oops! It seems the page you're looking for doesn't exist. Maybe it's lost in the multiverse!
    </p>

    {/* Contact Us Button */}
    <a
      href="/"
      className="inline-block bg-yellow-400 text-gray-900 font-medium py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
    >
      Back to Home
    </a>
  </div>
</div>

  );
}

export default NotFound;
