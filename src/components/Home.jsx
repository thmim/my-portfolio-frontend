import React from 'react';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from './Projects';
import Hero from '../sections/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;