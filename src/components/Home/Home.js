import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/Apps/MovieApi";
import { APIKey } from "../../common/Apps/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/Movies/MovieSlice';

const Home = () => {
    const movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(()=>{
        
        const fetchMovies = async () =>{
            const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log("Error", err);
            });
            // console.log("The response from API", response);
            dispatch(addMovies(response.data));
        };
        fetchMovies();
    }, []);
    return (
        <div>
           <div className="banner-img"></div>
           <MovieListing />
        </div>
    );
};

export default Home;