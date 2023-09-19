import React from 'react';
import './pagescss/portfolio.css'
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';

const Portfolio = () => {
  return (
    <div>
        <div><Navbar/></div>
      <nav className="shelf">
        <a className="book home-page"  href="/">Home page</a>
        <a className="book about-us" href="/about">About us</a>
        <a className="book contact" href="/contact">Contact</a>
        <a className="book faq" href="/">F.A.Q.</a>

        <span className="book not-found"></span>

        <span className="door left"></span>
        <span className="door right"></span>
      </nav>
      <h1>Error 404</h1>
      <p>We are under Maintainance</p>
      <div><Footer/></div>
    </div>
  );
};

export default Portfolio;
