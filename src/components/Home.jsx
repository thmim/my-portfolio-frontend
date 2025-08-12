import React from 'react';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from './Projects';
import Hero from '../sections/Hero';
import ContactMe from '../sections/ContactMe';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;