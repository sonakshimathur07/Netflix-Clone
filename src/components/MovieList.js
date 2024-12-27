import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-name">
        <div className="flex">
          {movies && Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                movieId={movie.id}
              />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
