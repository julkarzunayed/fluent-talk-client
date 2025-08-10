import React from 'react';

import logo from "../../assets/logo-01.png"
import { Link } from 'react-router';

const FluentTalkLogo = () => {
    return (
        <Link to={`/`}>
            <div className='flex items-center gap-0.5 font-bold text-2xl font-sanchez hover:scale-105'>
                <img className='w-12' src={logo} alt="" />
                <span className="text-gray-200 ml-1">Fluent</span>
                <span className="text-secondary">Talk</span>
            </div>
        </Link>
    );
};

export default FluentTalkLogo;