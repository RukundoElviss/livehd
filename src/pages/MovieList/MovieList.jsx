import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const API_KEY = "b96838a98903dde7e8558cdead4b03e9";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMoviesAndGenres = async () => {
      try {
        const [movieResponse, genreResponse] = await Promise.all([
          axios.get(`${BASE_URL}/movie/popular`, {
            params: { api_key: API_KEY, language: "en-US", page: 1 },
          }),
          axios.get(`${BASE_URL}/genre/movie/list`, {
            params: { api_key: API_KEY, language: "en-US" },
          }),
        ]);

        setMovies(movieResponse.data.results);
        setGenres(genreResponse.data.genres);
      } catch (error) {
        console.error("Error fetching movies or genres:", error);
      }
    };

    fetchMoviesAndGenres();
  }, []);

  const fetchTrailer = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
        params: { api_key: API_KEY, language: "en-US" },
      });
      const trailer = response.data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setSelectedTrailer(`https://www.youtube.com/embed/${trailer.key}`);
      } else {
        alert("Trailer not available for this movie.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  };

  return (
    <div className="movie-list container-fluid">
      <h1 className="text-center my-4" id="trending">Popular Movies</h1>
      <div className="row gy-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-6 col-md-2">
            <div className="movie-card card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Year: {movie.release_date.split("-")[0]}</p>
                <p className="card-text">Rating: {movie.vote_average.toFixed(1)} / 10</p>
                <p className="card-text">Genres: {getGenreNames(movie.genre_ids)}</p>
                <p className="card-text">Popularity: {movie.popularity.toFixed(0)}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => fetchTrailer(movie.id)}
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTrailer && (
        <div className="trailer-popup">
          <iframe
            width="560"
            height="315"
            src={selectedTrailer}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setSelectedTrailer(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieList;