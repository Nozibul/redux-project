import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/Movies/MovieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
   // const movies = useSelector((state)=>state.movies.movies)
    const movies = useSelector(getAllMovies);
    // console.log(movies)
    let renderMovies = "";
    renderMovies = movies.Response === "True" ? (
        movies?.Search?.map((movie, index) =>{
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
        </div>
    );
};

export default MovieListing;