import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer from the user slice
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';
import searchReducer from './searchSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer, // Correct: Pass the actual reducer function
        movies: moviesReducer,
        gpt: gptReducer,
        config:configReducer,
        searchMovie:searchReducer,
    }
    
});

export default appStore;
