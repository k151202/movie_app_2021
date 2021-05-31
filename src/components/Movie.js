import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, genres, summary, poster, torrent, size }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
          torrent,
          size,
        },
      }}
    >
      <div className="movie">
        <img
          className="movie__poster"
          src={poster}
          alt="movie-poster"
          title={title}
        />
        <div className="movie__data">
          <h4 className="movie__title">{title}</h4>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((item, index) => {
              return (
                <li key={index} className="genres__genre">
                  {item}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
          <h4>
            <a className="movie__torrent" href={torrent}>
              Download Torrent{" "}
            </a>
            <span className="movie__size">{size}</span>
          </h4>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  torrent: PropTypes.string.isRequired,
};

export default Movie;
