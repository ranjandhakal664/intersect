import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <section id="our-services">
      <div className="container">
        <div className="desc">
          <div className="heading">
            <h1>Our Services</h1>
          </div>
          <div className="text">
            <h4>
              We Provide Various services ..
            </h4>
          </div>
        </div>
        <div className="services">
          <div className="column" id="column-1">
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-flask"></i>
                <p className="service-txt">bussiniss intelegince</p>
              </div>
            </div>
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-bullhorn"></i>
                <p className="service-txt">digital marketing</p>
              </div>
            </div>
            <div className="service">
              <div className="service-desc">
                <i className="service-icon far fa-lightbulb"></i>
                <p className="service-txt">PRODUCT DEVELOPMENT</p>
              </div>
            </div>
          </div>

          <div className="column" id="column-2">
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-wrench"></i>
                <p className="service-txt">CRM CUSTOMAIZATION</p>
              </div>
            </div>
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-database"></i>
                <p className="service-txt">BUSINESS INTELLIGENCE</p>
              </div>
            </div>
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-chart-pie"></i>
                <p className="service-txt">DATA AQUSITION</p>
              </div>
            </div>
          </div>

          <div className="column" id="column-3">
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-tasks"></i>
                <p className="service-txt">PROJECT MAGNEMENT</p>
              </div>
            </div>
            <div className="service">
              <div className="service-desc">
                <i className="service-icon fas fa-certificate"></i>
                <p className="service-txt">SEO/SEM</p>
              </div>
            </div>
            <div className="service hidden">
              <div className="service-desc">
                <i className="service-icon"></i>
                <p className="service-txt"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-fix"></div>
      </div>
    </section>
  );
}

export default AboutUs;
