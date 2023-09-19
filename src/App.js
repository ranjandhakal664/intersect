import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'; // Adjust the path based on your project structure
import Services from './Pages/OurServices';
import Contact from './Pages/ContactUs';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import Carrier from './Pages/Carrier';
import Vacancy from './Pages/Vacancy';
import Pravicy from './Pages/PrivacyPolicy';
import Login from './Components/navbar/Login';
import Dashboard from './Components/Admin/Dashboard';
{/* import Login from './Components/Admin/login'; */}


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/Carrier' element={<Carrier/>} />
        <Route path='/Vacancy' element={<Vacancy/>} />
        <Route path='/Pravicy' element={<Pravicy/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Admin' element={<Dashboard/>} />
        {/* <Route path='/Login' element={<Login/>} /> */}
       
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
