// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
// import Projects from '../Pages/Projects/Projects';  
// import Contact from '../Pages/Contact/Contact';     

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Redirect to Home on root path */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/projects" element={<Projects />} />  
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoute;
