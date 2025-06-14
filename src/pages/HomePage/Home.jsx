import React from 'react';
import Banner from './Banner';
import Loader from '../Loader/Loader';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <Stat></Stat>
            </div>
        </div>
    );
};

export default Home;