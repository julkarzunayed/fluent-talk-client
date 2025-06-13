import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center p-10 w-full h-full'>
            <PacmanLoader
                color="#46fff4"
                loading
                size={50}
                speedMultiplier={1}
            />
        </div>
    );
};

export default Loader;