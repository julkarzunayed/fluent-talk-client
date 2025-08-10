import React from 'react';

const HomeTitle = ({ titleMini, title_1, title_2, title_1_color }) => {
    // console.log({ titleMini, title_1, title_2, title_1_color })
    return (
        <div className='relative pb-20 pt-24 font-sanchez'>
            <h5 className="text-gray-400 font-semibold text-lg mb-1">
                {titleMini || ''}
            </h5>
            <hr className='absolute border-t border-dashed right-full mr-4 translate-y-[22px] border-gray-400 w-[100vw]' />
            <h1 className="text-5xl font-semibold ">
                <span className={title_1_color || 'text-primary'}>
                    {title_1 || ''}
                </span>
                <span className="text-secondary">
                    {title_2 || ''}
                </span>
            </h1>
        </div>
    );
};

export default HomeTitle;