import React from "react";

const MovieCardTwo = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-60 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{movie.title}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{movie.overview}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-800 font-semibold">⭐ {movie.vote_average}</span>
          <span className="text-sm text-gray-600">{movie.release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCardTwo;
