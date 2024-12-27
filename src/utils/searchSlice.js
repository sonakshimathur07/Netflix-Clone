import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name:'search',
        initialState:{
            movieName:null,
            searchMovie:null
        },
        reducers:{

            setSearchMoviesDetails:(state,action)=> {
                const {searchMovies, movies} = action.payload;
                state.movieName = searchMovies;
                state.searchMovie = movies;
            },
    
        }
    }
)

export const {setSearchMoviesDetails} = searchSlice.actions;
export default searchSlice.reducer;