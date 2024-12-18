import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer from the user slice
import moviesReducer from './moviesSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer, // Correct: Pass the actual reducer function
        movies: moviesReducer,
    }
});

export default appStore;
