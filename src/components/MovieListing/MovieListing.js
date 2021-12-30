import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies,getAllShows } from '../../features/Movies/MovieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
   // const movies = useSelector((state)=>state.movies.movies)
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    // console.log(movies)
    let renderMovies, renderShows = "";
    
      // Movie
    renderMovies = movies.Response === "True" ? (
        movies?.Search?.map((movie, index) =>{
          return <MovieCard key={index} data={movie}></MovieCard>
        })
    ):(
        <div className="movies-error"><h4>{movies.Error}</h4></div>
    ) 
    // show series
    renderShows = shows.Response === "True" ? (
        shows?.Search?.map((movie, index) =>{
          return <MovieCard key={index} data={movie}></MovieCard>
        })
    ):(
        <div className="movies-error"><h4>{movies.Error}</h4></div>
    ) 

    return (
        <div className='movie-wrapper'>
           <div className="movie-list">
               <h2>Movies</h2>
               <div className='movie-container'>{renderMovies}</div>
           </div>
           <div className="show-list">
               <h2>Shows</h2>
               <div className='movie-container'>{renderShows}</div>
           </div>
        </div>
    );
};

export default MovieListing;