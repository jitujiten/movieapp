import "./Movies.css";
import React from "react";
import UseApi from "../../util/UseApi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const url = "http://localhost:3000/movies";

const Movies = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = UseApi(url, searchTerm);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return (
      <>
        <div className="spinner-border text-danger" role="status"></div>
        <h1>Loading...</h1>
      </>
    );
  }

  const filteredMovies = data.filter((movie) =>
    movie.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <input
        className="form-control"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredMovies.map((movie) => {
        return (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            <div className="card" key={movie.id}>
              <div className="card-image-container">
                <img src={movie.poster} alt={movie.movie_name} />
              </div>
              <div className="card-content">
                <h2 className="card-title">{movie.movie_name}</h2>
              </div>
            </div>
          </NavLink>
        );
      })}
    </React.Fragment>
  );
};

export default Movies;
