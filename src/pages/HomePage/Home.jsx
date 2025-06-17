import React from 'react';
import Banner from './Banner';
import Loader from '../Loader/Loader';
import Stat from './Stat';
import LanguageCategory from './LanguageCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Stat></Stat>
                <LanguageCategory></LanguageCategory>
            </div>
        </div>
    );
};

export default Home;