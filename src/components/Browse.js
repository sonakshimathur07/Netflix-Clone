import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import './Browse.css';
import SearchBar from './SearchBar';

const Browse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const nowPlayingLoading = useNowPlayingMovies();
  const popularMoviesLoading = usePopularMovies();

  useEffect(() => {
    if (!nowPlayingLoading && !popularMoviesLoading) {
      setIsLoading(false);
    }
  }, [nowPlayingLoading, popularMoviesLoading]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        showGptSearch ? (
          <SearchBar />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
            <Footer />
          </>
        )
      )}
    </div>
  );
};

export default Browse;
