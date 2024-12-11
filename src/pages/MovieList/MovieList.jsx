import React, { useEffect, useState } from "react";
import './MovieList.css'
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const API_KEY = "b96838a98903dde7e8558cdead4b03e9";
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const fetchTrailer = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
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

  return (
    <div className="movie-list">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
            <button className="btn btn-danger" onClick={() => fetchTrailer(movie.id)}>Watch Trailer</button>
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
          <button onClick={() => setSelectedTrailer(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MovieList;