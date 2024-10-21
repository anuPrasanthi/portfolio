// src/App.js
import React, { useState } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import './App.css'; // Your main styles

const App = () => {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar handleTheme={toggleTheme} />
        <BackgroundEffect />
        <h6>{'Coming'}</h6>
      </div>
    </ThemeProvider>
  );
};

export default App;
