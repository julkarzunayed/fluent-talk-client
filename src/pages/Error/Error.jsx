import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className=' h-screen'>
            <div className="flex justify-center p-2 border border-gray-400 ">
                <Link className='hover:bg-gray-200 bg-gray-100 px-4 py-1 rounded-sm' to={`/`}>Back to Home</Link>
            </div>
            <div className="h-full flex items-center justify-center">
                <img className='h-full' src="https://i.ibb.co/WvdP8hps/404.gif" alt="Error Gif" />
            </div>
        </div>
    );
};

export default Error;