import React from 'react';
import logo from '../../Images/logo1.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Anamnagar,Kathmandu</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+977-9823153502</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>intersectinfodevelopers@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="/"><img src={logo} className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>Welcome to Intersect Info Developers – where innovation meets expertise!</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us on</span>
                  <a href="https://www.facebook.com/profile.php?id=100093205741667&mibextid=ZbWKwL"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i className="fab fa-instagram instagram-bg"></i></a>
                  <a href="#"><i className="fab fa-square fa-x-twitter twitter-bg"></i></a>
                  <a href="#"><i className="fab fa-linkedin linkedin-bg"></i></a>
                  <a href="#"><i className="fab fa-github github-bg"></i></a>
                  
             
             </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">about</a></li>
                  <li><a href="/services">services</a></li>
                  <li><a href="/portfolio">portfolio</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/carrier">Carrier</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/about">Expert Team</a></li>
                  <li><a href="/contact">Message us</a></li>
                  <li><a href="/blog">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds,</p>
                </div>
                <div className="subscribe-form">
                  <form action="/login">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2018, All Right Reserved <a href="/">Intersect Inc.</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="/pravicy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
