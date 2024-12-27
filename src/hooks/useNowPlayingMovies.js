import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { API_options } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        API_options
      );
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return loading;
};

export default useNowPlayingMovies;
