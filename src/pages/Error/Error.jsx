import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className="flex justify-center p-2 border border-gray-400 ">
                <Link className='hover:bg-gray-200 bg-gray-100 px-4 py-1 rounded-sm' to={`/`}>Back to Home</Link>
            </div>
            <img className='w-full' src="https://i.ibb.co/WvdP8hps/404.gif" alt="Error Gif" />
        </div>
    );
};

export default Error;