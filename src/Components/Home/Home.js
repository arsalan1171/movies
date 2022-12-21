import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-content">
        <p> Welcome to Awesome Movies </p>
        <Link to="/movies" className="btn btn-success">
          Browse Movies
        </Link>
      </div>
    </div>
  );
};

export default Home;
