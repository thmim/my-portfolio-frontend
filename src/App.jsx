import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </>
  );
};

export default App;