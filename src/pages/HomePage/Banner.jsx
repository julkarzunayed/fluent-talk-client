import React from 'react';
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='py-10 bg-orange-50'>
            <div className="flex flex-col-reverse md:flex-row  max-w-7xl mx-auto">
                <div className="flex-1 flex  items-center pl-5">
                    <div className="py-10">

                        <h1 className="text-4xl font-bold flex flex-wrap gap-2">
                            <span className='text-black'>Learning is more</span>
                            <span className='text-orange-600 font-black'>
                                <Typewriter
                                    words={['Easy!', 'Effective!', 'Productive!']}
                                    loop={false}
                                    cursor={true}
                                    cursorBlinking={false}
                                />
                            </span>
                        </h1>
                        <p className="text-black">
                            Learning is more productive and more easy.
                        </p>
                    </div>
                </div>
                <div className="flex-1 md:block items-center justify-center">
                    <div className="">
                        <motion.div
                            animate={{ y: [70, 130, 70], x: [10] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundImage: `url('https://i.ibb.co/LDyHq0vt/boy-learning-online.jpg')` }}
                            className="w-[65%] border-orange-500 border-s-4 sm:border-s-8 border-b-4 sm:border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl h-[250px] md:h-[250px] lg:h-[265px] bg-cover bg-center">

                        </motion.div>
                        <motion.div
                            animate={{ x: [70, 130, 70] }}
                            transition={{ duration: 10, delay: 5, repeat: Infinity }}
                            style={{ backgroundImage: `url('https://i.ibb.co/Q3w9X38q/Child-online-learning.jpg')` }}
                            className="w-[65%] border-orange-500 border-s-4 sm:border-s-8 border-b-4 sm:border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl h-[250px] md:h-[250px] lg:h-[265px] bg-cover bg-center">

                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;