import React from "react";
// import { render } from "react-dom";
import {

  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import MovieListing from "./components/MovieListing/MovieListing";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './App.scss';

function App() {
  return (
     <div className="app">
        <Header></Header>
   
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
          
       </Routes>    
       <Footer />
    </div>
  );
}

export default App;
