import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-12 px-6 md:px-16">
  <div className="max-w-4xl mx-auto space-y-8">
    <h1 className="text-4xl font-bold text-center text-yellow-500">TheMovie</h1>

    <p className="text-lg leading-relaxed">
      Welcome to <span className="font-semibold text-yellow-400">TheMovie</span>, a platform designed to help users explore, discover, and enjoy movies and web series. Whether you're looking for the latest blockbusters, trending TV shows, or hidden gems, our goal is to provide an easy-to-use interface for movie lovers.
    </p>

    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-yellow-400">Why TheMovie?</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Search for your favorite movies and web series.</li>
        <li>Get detailed information, including ratings, genres, and release dates.</li>
        <li>Keep track of your watched list and find new shows to binge-watch.</li>
        <li>Explore curated recommendations tailored to your interests.</li>
      </ul>
    </div>

    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-yellow-400">About the Creator</h2>
      <p className="text-lg leading-relaxed">
        This project is developed by <span className="font-semibold text-yellow-400">Aditya Kumar</span>, a passionate front-end developer with an interest in building user-centric applications. <span className="font-semibold text-yellow-400">TheMovie</span> is built with the goal of providing an enjoyable movie discovery experience.
      </p>
      <p className="text-lg leading-relaxed">
        You can learn more or explore the project on GitHub:{" "}
        <a
          href="https://github.com/sk-adi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub Repository
        </a>
      </p>
    </div>
  </div>
</div>

  );
}

export default About;
