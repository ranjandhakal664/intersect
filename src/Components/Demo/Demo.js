import React from 'react';
import './demo.css'; // Import your CSS file
import desktopImage from "../../Images/Unti1.png"; // Update with the correct path to your image

const RealTimeFPADemo = () => {
  return (
    <div className="card-a">
      <div className="media-container">
        <img src={desktopImage} alt="Desktop Monitor" className="media-element" />
      </div>
      <div className="demo-content">
        <h1>Book a demo Now!</h1>
        <div className="demo-container">
          <p>Take your business to next level with us</p>
          <a href="/contact" className="demo-button">
            <span className="button-icon">
              <i className="fas fa-play"></i>
            </span>
            REQUEST A DEMO
          </a>
        </div>
        </div>

      <div className="wave-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
  );
}

export default RealTimeFPADemo;
