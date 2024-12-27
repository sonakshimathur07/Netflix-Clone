import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { API_options } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?page=1',
        API_options
      );
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return loading;
};

export default usePopularMovies;
