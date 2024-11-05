// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';  
import ContactMe from '../Pages/Contact/ContactMe';     

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio/" element={<AllSections />} />
    </Routes>
  );
};

const AllSections = () => (
  <>
    <div id="home"><Home /></div>
    <div id="about"><About /></div>
    <div id="skills"><Skills /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><ContactMe /></div>
  </>
);

export default AppRoutes;
