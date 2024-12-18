import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className='p-6' >
          <h1 className='text-2xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
      
        <div className='flex '>
          {/* Ensure movies is an array */}
          {movies && Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
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
