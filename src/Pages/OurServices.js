import React from 'react';
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';
import './pagescss/services.css';





const OurServices = () => {
  const servicesData = [
    {
      icon: 'fas fa-pen-fancy',
      title: 'Project creation',
      //only support few letters on description about 15 letters only
      description: 'Designing, developing, and maintaining websites and web applications, including front-end and back-end development.',
    },
    {
      icon: 'fas fa-dharmachakra',
      title: 'Software Development',
      description: 'Creating, designing, and developing software applications, whether for desktop, web, or mobile platforms and many more.',
    },
    {
      icon: 'fas fa-tasks',
      title: 'Project Management',
      description: 'Overseeing the planning, execution, and delivery of technology projects to ensure they are completed on time and within budget.',
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Project Implementation',
      description: 'Designing, implementing, and maintaining network systems, including hardware, software, and protocols.',
    },
    {
      icon: 'fas fa-recycle',
      title: 'Software Update',
      description: 'Designing, developing, and maintaining websites and web applications,and updating them from time to time.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Cyber Security',
      description: 'Protecting digital systems, networks, and data from cyber threats and ensuring the security and privacy of sensitive information.',
    },
    {
        icon: 'fa-solid fa-cloud',
        title: 'Cloud Computing',
        description: 'Offering cloud-based solutions for storage, computing, and application deployment using platforms like AWS, Microsoft Azure, and Google.',
      },

      {
        icon: 'fa-brands fa-figma',
        title: 'UI/UX Design',
        description: 'Creating user-friendly and visually appealing interfaces for websites and applications to enhance user experience.',
      },
      {
        icon: 'fas fa-headset',
        title: '24/7 Support',
        description: 'Providing expert advice and guidance on technology strategies, infrastructure setup, and best practices for businesses.',
      },
    // ... Add more items as needed
  ];

  return (
    <section className="we-offer-area text-center bg-gray">
      <div><Navbar/></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h1>What we <span>Offer??</span></h1>
              <h4>We offer Various services.....</h4>
            </div>
          </div>
        </div>
        <div className="row our-offer-items less-carousel">
          {servicesData.map((service, index) => (
            <div className="col-md-4 col-sm-6 equal-height" key={index}>
              <div className="item">
                <i className={service.icon}></i>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div><Footer/></div>
    </section>
  );
};

export default OurServices;
