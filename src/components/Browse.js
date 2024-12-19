
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? ( <GptSearchPage /> 

        ): ( 
     <> <MainContainer />
        <SecondaryContainer />
     </>
      )}
     
      {/*
      MainContainer
        -VideoBackground
        -VideoTitle
        
      SecondaryContainer
        -MovieList
        -Cards
      */}
    </div>
  )
}

export default Browse