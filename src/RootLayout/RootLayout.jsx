import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;