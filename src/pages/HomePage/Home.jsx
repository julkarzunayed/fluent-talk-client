import React from 'react';
import Banner from './Banner';
import Loader from '../Loader/Loader';
import Stat from './Stat';
import LanguageCategory from './LanguageCategory';
import OurTeem from './OurTeem';

const Home = () => {
    return (
        <div className='bg-base-200 pb-10'>
            <Banner></Banner>
            <div className="max-w-[1500px] mx-auto">
                <Stat></Stat>
                <LanguageCategory></LanguageCategory>
                <OurTeem></OurTeem>
            </div>
        </div>
    );
};

export default Home;