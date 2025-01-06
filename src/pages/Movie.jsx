import React from "react";

function Movie() {
    return (
        <div className="page min-h-screen bg-gray-900 text-white flex flex-col items-center">
            <div className="flex flex-col items-center justify-center my-10">
                <h1 className="text-4xl font-bold text-yellow-500 mb-4">Popular Movies</h1>
                <p className="text-gray-300">This page is under construction.</p>
            </div>
            <div className="flex justify-center flex-wrap gap-6 px-4">
                {/* Example card */}
                <div className="card w-48 h-72 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <img
                        src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg"
                        alt="Movie Poster"
                        className="h-40 w-full object-cover rounded-t-lg"
                    />
                    <div className="p-2">
                        <p className="text-lg font-semibold text-yellow-400 truncate">Title</p>
                        <p className="text-sm text-gray-400">Release Date: YYYY-MM-DD</p>
                        <p className="text-sm text-gray-400">Rating: ⭐ 8.5</p>
                    </div>
                </div>
                {/* Add more cards as needed */}
            </div>
        </div>

    );
}

export default Movie;
