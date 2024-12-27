import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movies",
    initialState: {
      nowPlayingMovies: null,
      trailerVideo: null,
      open: false, 
      id:"",
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      },
      addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
      addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
      },
      setOpen: (state, action) => {
        state.open = action.payload;
      },
      idGet: (state, action) => {
        state.id = action.payload;
      }
      
    },
  });
  
  export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, setOpen, idGet } =
    movieSlice.actions;
  
  export default movieSlice.reducer;
  