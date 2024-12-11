import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../../../public/logo.svg';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand container-fluid">
        <a className="navbar-brand animate__animated animate__slideInRight" href="">
          <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" id='sm-down'>
            <li className="nav-item">
              <a className="nav-link text-center" href="">
                <i className="fas fa-house"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="">
                <i className="fas fa-film"></i> Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="">
                <i className="fas fa-tv"></i> Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="">
                <i className="fas fa-star"></i> Popular
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav ml-auto" id='nav-item'>
          <li className="nav-item">
            <a className="nav-link" id="dropdown">
              <i className="fas fa-bars"></i>
              <div className="dropdown-menu">
                <p className="dropdown-item">About Us</p>
                <p className="dropdown-item">Contact Us</p>
                <p><a href="https://www.twitter.com/plive"><i className="fab fa-twitter"></i></a><a href="https://www.facebook.com/plive"><i className="fab fa-facebook-f"></i></a><a href="mailto:support@plive.com"><i className="fas fa-envelope"></i></a><a href="https://www.telegram.com/plive"><i className="fab fa-telegram"></i></a></p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;