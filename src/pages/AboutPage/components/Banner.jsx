import React from 'react';

import bgImage from "../../../assets/graduate_students_many.webp";

const Banner = () => {
    return (
        <section 
        style={{
            backgroundImage: `linear-gradient(to bottom, oklch(20% 0.05 252 / 0.2), oklch(20% 0.05 252 / 0.8)), url(${bgImage})`
        }}
        className="min-h-[70vh] flex items-center justify-center bg-cover bg-center ">
            <div className="">
                <h1 className='font-rakkas text-9xl bg-gradient-to-r from-gray-50 to-gray-200 bg-clip-text text-transparent '>
                    About FluentTalk
                </h1>
                <p className="text-xl font-semibold max-w-4xl text-center text-gray-200">
                    Looking for best language tutor to make perfect yourself in any language? You are in right place. We consolidate thousands of Tutor for you.
                </p>
            </div>
        </section>
    );
};

export default Banner;