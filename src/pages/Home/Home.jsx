import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import heroImg from '../../assets/hero-banner.png';
import card_img1 from '../../assets/cards/card1.jpg';
import card_img2 from '../../assets/cards/card2.jpg';
import card_img3 from '../../assets/cards/card3.jpg';
import card_img4 from '../../assets/cards/card4.jpg';
import card_img5 from '../../assets/cards/card5.jpg';
import card_img6 from '../../assets/cards/card6.jpg';
import card_img7 from '../../assets/cards/card7.jpg';
import card_img8 from '../../assets/cards/card8.jpg';
import card_img9 from '../../assets/cards/card9.jpg';
import card_img10 from '../../assets/cards/card10.jpg';

const Home = () => {
  return (
    <section className="home">
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
          <div className="col-md-7 py-3 position-relative" id='hero-image'>
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
      <div className="row container" id='trending'>
        <h1 className='col-md-12'>Trending Movies</h1>
        <div className="card col-md-3 col-6">
          <div className="card-img-top">
            <img src={card_img1} alt="Moana 2 Poster" />
          </div>
          <div className="card-img-overlay">
            <h3 className="movie-title">Moana 2</h3>
            <p className="lead">
              After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.            </p>
            <div className="overlay-btns">
              <a href="" className="btn btn-danger">
                <i className="fas fa-play"></i> Play
              </a>
              <a href="" className="btn btn-dark">
                <i className="fas fa-info-circle"></i> More Info
              </a>
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-6">
          <div className="card-img-top">
            <img src={card_img2} alt="Moana 2 Poster" />
          </div>
          <div className="card-img-overlay">
            <h3 className="movie-title">Wicked</h3>
            <p className="lead">
              A misunderstood young woman because of her green skin and a popular girl, become friends at Shiz University. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.
            </p>
            <div className="overlay-btns">
              <a href="" className="btn btn-danger">
                <i className="fas fa-play"></i> Play
              </a>
              <a href="" className="btn btn-dark">
                <i className="fas fa-info-circle"></i> More Info
              </a>
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-6">
          <div className="card-img-top">
            <img src={card_img3} alt="Moana 2 Poster" />
          </div>
          <div className="card-img-overlay">
            <h3 className="movie-title">Gladiator 2</h3>
            <p className="lead">
              After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.
            </p>
            <div className="overlay-btns">
              <a href="" className="btn btn-danger">
                <i className="fas fa-play"></i> Play
              </a>
              <a href="" className="btn btn-dark">
                <i className="fas fa-info-circle"></i> More Info
              </a>
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-6">
          <div className="card-img-top">
            <img src={card_img4} alt="Moana 2 Poster" />
          </div>
          <div className="card-img-overlay">
            <h3 className="movie-title">Moana 2</h3>
            <p className="lead">
              After Santa Claus is kidnapped, the North Pole's Head of Security must team up with a notorious hacker in a globe-trotting, action-packed mission to save Christmas.
            </p>
            <div className="overlay-btns">
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
    </section>
  );
}

export default Home;
