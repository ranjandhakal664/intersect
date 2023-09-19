import React from 'react';
import Navbar from './navbar/NavBar';
import Body from './body/Body';
import AboutUs from './aboutus/AboutUs';
import Demo from './Demo/Demo';
import ContactUs from './contactus/ContactUs';
import Footer from './footer/Footer';
import './home.css' 




const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <Body />
      <AboutUs />
      <Demo/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default Home;
