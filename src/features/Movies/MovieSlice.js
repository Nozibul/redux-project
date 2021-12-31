import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import MovieApi from "../../common/Apps/MovieApi";
import { APIKey } from "../../common/Apps/MovieApiKey";


// create first Thunk
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () =>{
      const movieText = "Harry";
    
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=series`);
       
          return response.data;
    }
);
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () =>{
      const seriesText = "Friends";
    
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=movie`)
       
          return response.data;
    }
);

// show/ movie Details
export const fetchAsyncMovieOrShowsDetail = createAsyncThunk('movies/fetchAsyncShows',
 async (id) =>{
    
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`)
       
          return response.data;
    }
);


const initialState = {
 
  movies: {},
  shows:{},
  selectMovieOrShow: {},

}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
      // create reducer
     
      addMovies:(state, {payload}) =>{
          
          state.movies = payload;
         
        },
  },
   
  extraReducers:{
    [fetchAsyncMovies.pending]: ()=>{
      console.log("pending");
     
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
      console.log("fulfilled");
      return {...state, movies:payload};
    },
    [fetchAsyncShows.fulfilled]: (state, {payload})=>{
      console.log("fulfilled");
      return {...state, shows:payload};
    },
    [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, {payload})=>{
      console.log("fulfilled");
      return {...state, selectMovieOrShow:payload};
    },
    [fetchAsyncMovies.rejected]: ()=>{
      console.log("rejected");
     
    },
  },

});

// Action creators are generated for each case reducer function
 export const { addMovies } = movieSlice.actions;
 export const getAllMovies =(state)=> state.movies.movies;
 export const getAllShows =(state)=> state.movies.shows;
 export const getAllMovieOrShowsDetail =(state)=> state.movies.shows;
 export default movieSlice.reducer