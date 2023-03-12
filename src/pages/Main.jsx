import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Project from '../components/Project';
import Skills from '../components/Skills';

export default function Main() {
    return (
        <div className='flex flex-col '>
            <div id='about'>
                <About />
            </div>
            <div id='skills'>
                <Skills />
            </div>
            <div id='project'>
                <Project />
            </div>
            <div id='contact'>
                <Contact />
            </div>
        </div>
    );
}
