import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import About from "./Components/About/About";
import Navigation from "./Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path={"/movie-details"} element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
