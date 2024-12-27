import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import './SecondaryConatiner.css';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className=' bg-black w-screen'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      {/*
      MovieList - Popular 
      MovieList - Trending
      MovieList - NowPlaying
      MovieList - Horror
      */}
    </div>
  )
}

export default SecondaryContainer