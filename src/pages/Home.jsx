import React from "react";

function Home() {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1677344297888-81f04aa12a60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6">
        <h1 className="text-4xl font-semibold">Search Movie/Web Series etc.</h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter The Movie/WebSeries name"
            className="p-4 rounded-lg text-black w-96 max-w-full border-2 border-gray-300 focus:ring-2 focus:ring-yellow-500"
          />
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-transform transform hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
