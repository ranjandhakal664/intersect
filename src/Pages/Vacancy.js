import React, { useState } from 'react';
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';
import './pagescss/vacancy.css';

const vacancyData = {
  "position": "Frontend Developer",
  "description": "We are seeking a talented and motivated Frontend Developer to join our team. If you have a passion for creating engaging user experiences and a strong proficiency in HTML, CSS, and JavaScript, we want to hear from you!",
  "responsibilities": [
    "Develop user interfaces for web applications",
    "Collaborate with the design team to implement designs",
    "Optimize web applications for maximum speed and scalability"
  ],
  "requirements": [
    "Strong proficiency in HTML, CSS, and JavaScript",
    "Experience with modern frontend libraries and frameworks (e.g., React, Vue)",
    "Knowledge of responsive design principles",
    "Excellent problem-solving skills"
  ],
  "howToApply": "If you're excited about pushing the boundaries of frontend development and working in a collaborative environment, apply now by sending your resume and portfolio to careers@example.com.",
  "applicationDeadline": "September 30, 20XX"
};

const Vacancy = () => {
  const [cvFile, setCvFile] = useState(null);
  const vacancy = vacancyData;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setCvFile(selectedFile);
  };

  const handleApplyNow = () => {
    if (cvFile) {
      // Here you can handle the CV file submission, such as sending it to a server
      console.log('CV file:', cvFile);
    } else {
      console.log('No CV file selected.');
    }
  };

  return (
    <section>
        <Navbar/>
   
    <div className="vacancy-container">
      <h1>{vacancy.position}</h1>
      <p>{vacancy.description}</p>
      <h3>Requirements:</h3>
      <ul>
        {vacancy.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        {vacancy.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <p className="application-info">{vacancy.howToApply}</p>
      <div className="apply-button-container">
        <label className="apply-button" htmlFor="cvFileInput">
          Drop your CV here and Apply Now
          <input
            type="file"
            id="cvFileInput"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default Vacancy;
