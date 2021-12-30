import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // initial vabe site e ki ki thakbe segulo akhane dibo
  movies: {},

}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
      // create reducer
      // action.payload er jaigai sorasori karlibarket er vitore payload dia dilam. 
      addMovies:(state, {payload}) =>{
          
         // akhane state holo upore j initaileStrate disi seta pabe and action holo slice er upor depand kore j action create korbo seta.
          state.movies = payload;
         
        },
  },
 
});

// Action creators are generated for each case reducer function
 export const { addMovies } = movieSlice.actions;
 export const getAllMovies =(state)=> state.movies.movies;
 export default movieSlice.reducer