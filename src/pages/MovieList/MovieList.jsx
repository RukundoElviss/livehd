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

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const movieChunks = chunkArray(movies, 6);

  return (
    <div className="movie-list container-fluid">
      <h1 className="my-4" id="trending">Trending Movies</h1>
      <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {movieChunks.map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className={`carousel-item ${chunkIndex === 0 ? "active" : ""}`}
            >
              <div className="row">
                {chunk.map((movie) => (
                  <div key={movie.id} className="col-2 d-flex flex-column align-items-center">
                    <div className="movie-card">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="img-fluid"
                      />
                      <span className="badge badge-dark">HD</span>
                      <h6 className="text-center mt-2">{movie.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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