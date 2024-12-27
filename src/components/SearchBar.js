import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesSearch, API_options } from '../utils/constants';
import { setSearchMoviesDetails } from '../utils/searchSlice';
import lang from '../utils/languageConstants';
import MovieCardTwo from './MovieCardTwo';

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchMovies = useSelector((store) => store.searchMovie.movieName || '');
  const searchMovieResults = useSelector((store) => store.searchMovie.searchMovie);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(searchMovies);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert('Please enter a valid movie name');
      return;
    }

    try {
      const res = await fetch(
        `${MoviesSearch}${inputValue}&include_adult=false&language=en-US&page=1`,
        API_options
      );
      const json = await res.json();
      const movies = json?.results || [];
      dispatch(setSearchMoviesDetails({ searchMovies: inputValue, movies }));
    } catch (error) {
      console.error('Error fetching movie data:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className=" pt-[35%] md:pt-[10%] w-[100%] flex flex-col justify-center">
      <form
        onSubmit={submitHandler}
        className="w-full md:w-[50%] mx-auto"
      >
        <div className="flex justify-between shadow-md border-2 p-2 border-gray-300  rounded-lg w-[100%]">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="w-full outline-none rounded-md text-lg"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 py-2 px-4 m-3 bg-red-700 text-white rounded-lg"
            type="submit"
          >
            {lang[langKey].search}
          </button>
        </div>
      </form>
      <div className="bg-white mt-20 min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Movie List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchMovieResults?.map((movie) => (
            <MovieCardTwo key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
