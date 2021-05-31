import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, genres, summary, poster, torrent, size }) {
  return (
    <div class="movie-info">
      <h4>Title: {title}</h4>
      <h4>Year: {year}</h4>
      <h4>
        Genres:{" "}
        {genres.map((item) => {
          return "{" + item + "}  ";
        })}
      </h4>
      <h4>Summary: {summary}</h4>
      <img src={poster} />
      <h4>
        <a class="torrent-link" href={torrent}>
          Download Torrent{" "}
        </a>
        <span class="file-size">{size}</span>
      </h4>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  torrent: PropTypes.string.isRequired,
};

export default Movie;
