import React from 'react';
import Banner from './components/Banner';
import Mission from './components/Mission';
import TutorCTA from './components/TutorCTA';

const AboutPage = () => {
    return (
        <div className='pt-10'>
            <Banner />
            <Mission />
            <TutorCTA />
        </div>
    );
};

export default AboutPage;