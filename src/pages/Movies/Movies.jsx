import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movies.css";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const API_KEY = "b96838a98903dde7e8558cdead4b03e9";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
          params: { api_key: API_KEY, language: "en-US" },
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: "en-US", page: currentPage },
        });
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  };

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="movie-list container-fluid">
      <h1 className="my-4" id="trending">All Movies</h1>
      <div className="row gy-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-6 col-md-3">
            <div className="movie-card card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Year: {movie.release_date?.split("-")[0]}</p>
                <p className="card-text">Rating: {movie.vote_average.toFixed(1)} / 10</p>
                <p className="card-text">Genres: {getGenreNames(movie.genre_ids)}</p>
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

      <div className="pagination-controls d-flex justify-content-center align-items-center my-4">
        <button
          className="btn btn-secondary me-2"
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;