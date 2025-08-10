import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter'
import banner01 from '../../assets/student-learning-online-01.jpg';
import banner02 from '../../assets/support_teme.jpg';
import banner03 from '../../assets/child_onlineclass.jpg';

const images = [
    banner01,
    banner02,
    banner03,
]

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);
    return (
        <div style={{
            backgroundImage: `linear-gradient(to bottom, oklch(20% 0.05 252 / 0.7), oklch(20% 0.05 252 / 0.9)), url(${banner01})`,
        }}
            className='py-10 pb-16 bg-orange-50 bg-cover bg-center bg-fixed'>
            <div className="flex flex-col-reverse md:flex-row  max-w-[1500px] mx-auto">
                <div className="flex-1 flex  items-center pl-5">
                    <div className="py-10">

                        <h1 className="text-7xl font-sanchez font-bold flex flex-wrap gap-2">
                            <span className='text-gray-300'>Learning is more</span>
                            <span className='text-secondary font-black min-w-[200px]'>
                                <Typewriter
                                    words={['Easy!', 'Effective!', 'Productive!']}
                                    loop={false}
                                    cursor={true}
                                    cursorBlinking={false}
                                />
                            </span>
                        </h1>
                        <p className="text-gray-300">
                            Learning is more productive and more easy.
                        </p>
                    </div>
                </div>
                <div className="flex-1 md:block items-center justify-center">
                    <div className="z-10">
                        <motion.div
                            animate={{ y: [70, 130, 70], x: [10] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundImage: `url('https://i.ibb.co/LDyHq0vt/boy-learning-online.jpg')` }}
                            className="w-[65%] border-secondary border-s-4 sm:border-s-8 border-b-4 sm:border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl h-[250px] md:h-[250px] lg:h-[265px] bg-cover bg-center ">

                        </motion.div>
                        <motion.div
                            animate={{ x: [70, 130, 70] }}
                            transition={{ duration: 10, delay: 5, repeat: Infinity }}
                            style={{ backgroundImage: `url('https://i.ibb.co/Q3w9X38q/Child-online-learning.jpg')` }}
                            className="w-[65%] border-secondary border-s-4 sm:border-s-8 border-b-4 sm:border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl h-[250px] md:h-[250px] lg:h-[265px] bg-cover bg-center">

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;