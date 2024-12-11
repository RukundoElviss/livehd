import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import heroImg from '../../assets/hero-banner.png';
import cards_data from '../../assets/cards/Cards_data';

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="hero container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1 className="intro mb-4">Discover the latest and trending TV Shows and movies</h1>
            <div className="d-flex justify-content-center justify-content-md-start">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search for movies or TV shows"
                aria-label="Search for movies or TV shows"
              />
              <button className="btn btn-danger">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-md-7 position-relative text-center">
            <img src={heroImg} alt="Hero Banner" className="hero-img img-fluid" />
            <div className="text-overlay">
              <h3 className="movie-title">DON'T MOVE</h3>
              <h5 className="movie-desc">
                When a killer injects her with a paralytic agent, a woman must run, fight, and hide before her body completely shuts down.
              </h5>
              <div className="hero-btns mt-3">
                <a href="#" className="btn btn-danger me-2">
                  <i className="fas fa-play"></i> Play
                </a>
                <a href="#" className="btn btn-dark">
                  <i className="fas fa-info-circle"></i> More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5" id="trending">
        <h1 className="mb-4 text-center text-md-start">Trending Movies</h1>
        <div className="row">
          {cards_data.map((card, index) => (
            <div key={index} className="col-lg-3 col-2 col-12 mb-4">
              <div className="card">
                <img src={card.image} className="card-img-top img-fluid" alt={card.name} />
                <div className="card-img-overlay">
                  <h3 className="movie-title">{card.name}</h3>
                  <p className="lead">{card.description}</p>
                  <div className="overlay-btns">
                    <a href="#" className="btn btn-danger me-2">
                      <i className="fas fa-play"></i> Play
                    </a>
                    <a href="#" className="btn btn-dark">
                      <i className="fas fa-info-circle"></i> More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;