import React from 'react';
import Banner from './Banner';
import Loader from '../Loader/Loader';
import Stat from './Stat';
import LanguageCategory from './LanguageCategory';
import OurTeem from './OurTeem';
import HowItWorks from './HowItWorks';
import StudentSupport from './StudentSupport';
import FeaturedTutors from './FeaturedTutors';

const Home = () => {
    return (
        <div className='bg-base-200 pt-10'>
            <Banner></Banner>
            <div className="*:p-4">
                <Stat></Stat>
                <LanguageCategory></LanguageCategory>
                <HowItWorks />
                <FeaturedTutors />
                <OurTeem></OurTeem>
                <StudentSupport />
            </div>
        </div>
    );
};

export default Home;