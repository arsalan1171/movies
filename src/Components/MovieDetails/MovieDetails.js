import React, { useState, useEffect } from "react";
import MovieApi from "../../service/MovieAPI";
import { useLocation } from "react-router-dom";
import getBackgroundColor from "../Movies/RibbonBGColorHelper";
import MovieForm from "../MovieForm/MovieForm";
import { Image } from "react-bootstrap";
import loader from "../../images/loader.gif";
import "./MovieDetails.css";


const MovieDetails = () => {
  let data = useLocation();
  let [movieDetails, setMovieDetails] = useState([]);
  let [movieGenres, setMovieGenres] = useState([]);
  let [image, setImage] = useState("");
  let [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let isComponentMounted = true;
    const loadDetails = async () => {
      setLoading(true);
      const movieDetails = await MovieApi.getMovieDetails(data.state?.from);

      if (isComponentMounted) {
        setImage(process.env.REACT_APP_IMG_STORE + movieDetails.poster_path);
        setMovieGenres(movieDetails.genres);
        setMovieDetails(movieDetails);
        setLoading(false);
      }
    };

    loadDetails();
    return () => {
      isComponentMounted = false;
    };
  }, [data.state.from]);

  return (

    <div className="movie-container">

      <div className="movie-details">
        <div>{isLoading ? <Image className="loader" src={loader} /> : null}</div>
        <div>
          <img className="movie-img" src={image} alt="movie" />
        </div>

        <div className="mt-4 ms-4">
          <div className="d-flex">

            <h3>{movieDetails.original_title}</h3>
            <p className="m-2">
              (
              {movieDetails.release_date &&
                movieDetails.release_date.substring(0, 4)}
              )
            </p>
          </div>

          <div>
            <p>{movieDetails.tagline}</p>
          </div>

          <div
            className="rating-box"
            style={{
              backgroundColor: getBackgroundColor(movieDetails.vote_average),
            }}
          >
            <h5>Rating: {movieDetails.vote_average * 10}</h5>
          </div>

          <div>
            <h4>Overview</h4>
            <p className="overview-decor">{movieDetails.overview}</p>
          </div>

          <h4>Genres</h4>
          <ul>
            {movieGenres &&
              movieGenres.map((genres) => (
                <li key={genres.id}> {genres.name} </li>
              ))}
          </ul>
          <h3 className="text-left">Fill below form to request this movie</h3>
        </div>
      </div>
      <MovieForm movieDetails={movieDetails}></MovieForm>
    </div>
  );
};

export default MovieDetails;
