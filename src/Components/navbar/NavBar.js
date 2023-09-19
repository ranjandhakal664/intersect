import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faCode, faMobile, faCodeBranch, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import Login from "./Login";
import Registration from "./Registration";
import logo from "../../Images/logo1.png";

import "./nav.css";

const Navbar = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegistrationModal = () => {
    setRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setRegistrationModalOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm navbar-custom">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="/">
              <img src={logo} width="75" height="70" alt="Logo" />
            </a>
          </div>
          <div className="input-group ms-4">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search"
            />
            <span className="input-group-text bg-white border-0">
              <FontAwesomeIcon icon={faSearch} style={{ color: "blue" }} />
            </span>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/"><i className="fa-solid fa-house contact-bg"></i> Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${isNotificationsOpen ? "show" : ""}`}
              href="/services"
              role="button"
              onClick={toggleNotifications}
              onMouseEnter={toggleNotifications}  
              onMouseLeave={toggleNotifications}
            >
              <i className="fa-solid fa-dharmachakra contact-bg"></i>Services
            </a>
            <div className={`dropdown-menu ${isNotificationsOpen ? "show" : ""}`} onMouseLeave={toggleNotifications}>
              <div className="dropdown-columns">
                <ul>
                  <li>
                    <a href="/services">
                      <FontAwesomeIcon icon={faCode} /> Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/services">
                      <FontAwesomeIcon icon={faMobile} /> App Development
                    </a>
                  </li>
                  <li>
                    <a href="/services">
                      <FontAwesomeIcon icon={faCodeBranch} /> AI Development
                    </a>
                  </li>
                  <li>
                    <a href="services">
                      <FontAwesomeIcon icon={faShieldHalved} /> Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog"><i className="fa-solid fa-blog contact-bg"></i> Blogs
            </a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="/contact"><i className="fa-solid fa-phone-volume contact-bg"> </i>Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about"><i className="fa-solid fa-people-group contact-bg"> </i>About
            </a>
          </li>
          </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <a href="#"onClick={openLoginModal} ><i class="fa-regular fa-user user-bg"></i>Profile</a>
          </li>
        </ul>
      </div>

      <Modal show={isLoginModalOpen} onHide={closeLoginModal}>
        {/* Login Modal */}
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login onClose={closeLoginModal} />
        </Modal.Body>
      </Modal>

      <Modal show={isRegistrationModalOpen} onHide={closeRegistrationModal}>
        {/* Registration Modal */}
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registration onClose={closeRegistrationModal} />
        </Modal.Body>
      </Modal>
    </nav>
  );
};

export default Navbar;
