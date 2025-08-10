import React from 'react';
import Banner from './Banner';
import Loader from '../Loader/Loader';
import Stat from './Stat';
import LanguageCategory from './LanguageCategory';
import OurTeem from './OurTeem';
import HowItWorks from './HowItWorks';
import StudentSupport from './StudentSupport';

const Home = () => {
    return (
        <div className='bg-base-200 pb-10'>
            <Banner></Banner>
            <div className="*:p-4">
                <Stat></Stat>
                <LanguageCategory></LanguageCategory>
                <HowItWorks/>
                <OurTeem></OurTeem>
                <StudentSupport/>
            </div>
        </div>
    );
};

export default Home;