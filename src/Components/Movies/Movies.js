import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import CornerRibbon from "react-corner-ribbon";
import { Link } from "react-router-dom";
import getBackgroundColor from "./RibbonBGColorHelper";
import MovieApi from "../../service/MovieAPI";
import "./Movies.css";

const Movies = () => {
  let [movieData, setMovieData] = useState([]);
  let [page, setPage] = useState(1);

  const loadMoreMovies = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    let isComponentMounted = true;
    const loadMovies = async () => {
      const movies = await MovieApi.getMovies(page);
      if (isComponentMounted) {
        setMovieData((prev) => [...prev, ...movies]);
      }
    };

    loadMovies();
    return () => {
      isComponentMounted = false;
    };
  }, [page]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMoreMovies();
    }
  };

  return (
    <div className="movies-container">
      {movieData &&
        movieData.map((movie, index) => (
          <div key={index}>
            <Card
              className="mb-3 card-styles"
              style={{ width: "16rem", border: "none", margin: "1.5rem" }}
            >
              <CornerRibbon
                fontColor="black"
                style={{
                  backgroundColor: getBackgroundColor(movie.vote_average),
                  fontWeight: "bold",
                }}
              >
                {movie.vote_average * 10}
              </CornerRibbon>
              <Card.Img
                as={Image}
                src={process.env.REACT_APP_IMG_STORE + "/" + movie.poster_path}
                alt="movie image"
              />
              <Link to={"/movie-details"} state={{ from: movie.id }}>
                <Card.Title className="title">
                  {movie.original_title}
                </Card.Title>
              </Link>
            </Card>
          </div>
        ))}
    </div>
  );
};
export default Movies;
