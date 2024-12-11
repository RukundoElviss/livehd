import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import heroImg from '../../assets/hero-banner.svg';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h1 className="intro">Discover the latest and trending TV Shows and movies</h1>
            <div className="col-md-12 d-flex">
              <input type="text" className="form-control" placeholder="Search for movies or TV shows" aria-label="Search for movies or TV shows" />
              <button className="btn btn-danger">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="col-md-7 py-3 position-relative">
            <img src={heroImg} alt="" className="hero-img w-100" />
            <div className="text-overlay">
              <h3 className="movie-title">DON'T MOVE</h3>
              <h5 className="movie-desc">
                When a killer injects her with a paralytic agent, a woman must run, fight and hide before her body completely shuts down.
              </h5>
              <div className="hero-btns py-1">
                <a href="" className="btn btn-danger">
                  <i className="fas fa-play"></i> Play
                </a>
                <a href="" className="btn btn-dark">
                  <i className="fas fa-info-circle"></i> More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
