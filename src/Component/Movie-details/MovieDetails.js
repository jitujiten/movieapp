import UseApi from "../../util/UseApi";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = (props) => {
  const { id } = useParams();

  const { data, error, isLoading } = UseApi(
    `http://localhost:3000/movies/${id}`
  );

  console.log(data);
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

  return (
    <div className="movie-details">
    <div className="wrapper">
      <img
        src={data.poster}
        alt={data.movie_name}
        className="movie-details__poster"
      />
      </div>
      <div className="movie-details__info">
        <h2 className="movie-details__title">{data.movie_name}</h2>
        <p className="movie-details__description">{data.description}</p>
        <ul className="movie-details__list">
          <li>
            <strong>Rating:</strong> {data.ratings}
          </li>
          <li>
            <strong>Cast:</strong> {data.cast}
          </li>
          <li>
            <strong>Producers:</strong> {data.producer}
          </li>
          <li>
            <strong>Director:</strong> {data.director}
          </li>
          <li>
            <strong>Release Date:</strong> {data.release_date}
          </li>
          <li>
            <strong>Runtime:</strong> {data.runtime}min
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
