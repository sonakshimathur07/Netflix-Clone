import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailor';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <div className="relative w-full">
        <iframe
          className="w-full md:w-screen h-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}&disablekb=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            border:"none"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
