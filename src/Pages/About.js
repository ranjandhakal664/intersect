import React from 'react';
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';
import 'font-awesome/css/font-awesome.min.css';
import card0Image from '../Images/logo.png';
import card1Image from '../Images/logo.png';
import card2Image from '../Images/logo.png';
import card3Image from '../Images/logo.png';


import './pagescss/about.css'; // Import your CSS for styling

const teamMembers = [
  {
    id: 0,
    name: 'Intersect Inc',
    socialMedia: ['instagram', 'x-twitter', 'facebook', 'linkedin'],
    backgroundImage: card0Image, // Dynamically set the card background image
  },
  {
    id: 1,
    name: 'Intersect Inc',
    socialMedia: ['instagram', 'x-twitter', 'facebook', 'linkedin'],
    backgroundImage: card1Image, // Dynamically set the card background image
  },
  {
    id: 2,
    name: 'Intersect Inc',
    socialMedia: ['instagram', 'x-twitter', 'facebook', 'linkedin'],
    backgroundImage: card2Image, // Dynamically set the card background image
  },
  {
    id: 3,
    name: 'Intersect Inc',
    socialMedia: ['instagram', 'x-twitter', 'facebook', 'linkedin'],
    backgroundImage: card3Image, // Dynamically set the card background image
  },
  
  // Add more team members here
];

const aboutContent = {
  sections: [
    {
      title: 'Our Journey',
      content: 'At Intersect Info Developers, our journey is a testament to our passion for technology and our unyielding commitment to delivering exceptional results. From the moment our doors opened, we\'ve been driven by a collective enthusiasm that fuels our every endeavor. We understand that technology is more than just lines of code; it\'s about creating meaningful connections and experiences.'
    },
    {
      title: 'Our Expertise',
      content: 'We are not just an IT company – we are a team of dynamic professionals, each with a unique skill set and a shared vision. Our services span a wide spectrum, from crafting captivating websites to developing cutting-edge mobile applications. Our expertise extends to software development, where we harness the power of languages like JavaScript, Python, Java, Swift, and Ruby to build seamless, robust solutions.'
    },
    {
      title: 'Innovating the Future',
      content: "We understand that the tech landscape is ever-evolving, and that's why innovation is at the heart of everything we do. Our journey is a testament to our dedication to pushing boundaries and exploring new horizons. We blend creativity with technical prowess to deliver solutions that not only meet but exceed expectations."
    },
    // Add more sections as needed
  ]
};

const About = () => {
  return (
    <div className='timeline-container'>
      <Navbar />
      <div className="timeline">
        <div className="timeline-item">
          <h1>About Us</h1>
          <p className="timeline-text">
            Welcome to Intersect Info Developers – where innovation meets expertise!
            Established in the vibrant city of Kathmandu, Nepal, in the year 2022,
            Intersect Info Developers has swiftly emerged as a beacon of technological
            excellence and creativity. With our roots embedded in the heart of Anamnagar,
            we have been tirelessly crafting digital solutions that make a real-world impact.
          </p>
        </div>
        {aboutContent.sections.map((section, index) => (
          <div className="timeline-item" key={index}>
            <h5>{section.title}</h5>
            <p className="timeline-text">{section.content}</p>
          </div>
        ))}
        </div>
        <div className="horizontal-card-container">
  {teamMembers.map((member) => (
    <div key={member.id} className="card-container">
      <div className={`card card${member.id}`} style={{ backgroundImage: `url(${member.backgroundImage})` }}>
        <div className="border">
          <h2>{member.name}</h2>
          <div className="icons">
            {member.socialMedia.map((platform, index) => (
              <i key={index} className={`fa fa-${platform}`} aria-hidden="true"></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      <Footer />
    </div>
  );
}

export default About;
