import React from 'react';
import { Img_CDN_Url } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { setOpen, idGet } from '../utils/moviesSlice';

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(idGet(movieId)); 
    dispatch(setOpen(true)); 
  };

  return (
    <div className="w-48 pr-4" onClick={handleOpen}>
      <img alt="Movie Card" src={Img_CDN_Url + posterPath} />
    </div>
  );
};

export default MovieCard;
