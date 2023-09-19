import React, { useState } from 'react';
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';
import './pagescss/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section>
      <Navbar />
      <div className="contact-container">
        <div className="inner-container">
          <h2>Request for Demo</h2>
          <hr />
          <div className="request-text">
            <h3>Interested in our product?</h3>
            <p>
              Connect with us to improve your business operations .
            </p>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="firstName" className="firstname">
                  First Name
                </label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="lastName" className="lastname">
                  Last Name
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="phone" className="phone">
                  Phone
                </label>
              </div>
              <div className="input-data">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="email" className="email">
                  Email
                </label>
              </div>
            </div>
            <div className="input-messege">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <label htmlFor="message" className="message">
                Write your message
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
