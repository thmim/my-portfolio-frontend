import React from 'react';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from './Projects';
import Hero from '../sections/Hero';
import ContactMe from '../sections/ContactMe';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;