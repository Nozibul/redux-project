import { configureStore } from '@reduxjs/toolkit'
// import Movieslice
import movieReducer from "./Movies/MovieSlice";

export const store = configureStore({
  reducer:{
      movies: movieReducer,
      
  } ,
});