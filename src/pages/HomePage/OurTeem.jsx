import React from 'react';
import HomeTitle from '../../Components/HomeTitle/HomeTitle';

const OurTeem = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <HomeTitle
                titleMini=""
                title_1='Meet our '
                title_2='Teem'
                title_1_color='text-primary'
            ></HomeTitle>

            <div className="*:max-w-3xs  grid grid-cols-1 *:mx-auto *:w-full sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8  *:hover:scale-105">
                <div className="p-3 py-6 bg-base-100 group rounded-2xl shadow-xl ">
                    <div className="flex justify-center ">
                        <div className="avatar ">
                            <div className="w-32 group-hover:scale-110 rounded-xl">
                                <img src="https://i.ibb.co.com/ZnF2B7G/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg" />
                            </div>
                        </div>
                    </div>

                    {/* <img
                        className=' mx-auto rounded-xl'
                        src="https://i.ibb.co.com/ZnF2B7G/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg" alt="" /> */}
                    <div className="text-center border-t border-gray-400 mt-2 pt-2">
                        <h3 className="text-xl font-bold">Alimuzzman Haric</h3>
                        <p className="text-sm">Junior Developer at,</p>
                        <h6 className="text-lg font-semibold">SR Dream IT</h6>
                        <p className="text-sm">haric@alimuzzman.com</p>
                    </div>
                </div>
                <div className="p-3 py-6 bg-base-100 rounded-2xl group shadow-xl">
                    <div className="flex justify-center ">
                        <div className="avatar ">
                            <div className="w-32 group-hover:scale-110 rounded-xl">
                                <img src="https://i.ibb.co.com/fYfnRM7g/dr-2.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center border-t border-gray-400 mt-2 pt-2">
                        <h3 className="text-xl font-bold">Ak Shakib</h3>
                        <p className="text-sm">Junior Developer at,</p>
                        <h6 className="text-lg font-semibold">Remedy It Media</h6>
                        <p className="text-sm">sakib.ak@gmail.com</p>
                    </div>
                </div>
                <div className="p-3 py-6 bg-base-100  rounded-2xl group shadow-xl">
                    <div className="flex justify-center ">
                        <div className="avatar ">
                            <div className="w-32 group-hover:scale-110 rounded-xl">
                                <img src="https://i.ibb.co.com/mMY9DPZ/IMG-20220617-112803.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center border-t border-gray-400 mt-2 pt-2">
                        <h3 className="text-xl font-bold">Shophiqul Islam</h3>
                        <p className="text-sm">Junior Developer at,</p>
                        <h6 className="text-lg font-semibold">Remedy It Barishal</h6>
                        <p className="text-sm">shophiq@gmail.com</p>
                    </div>
                </div>
                <div className="p-3 py-6 bg-base-100 rounded-2xl group shadow-xl">
                    <div className="flex justify-center ">
                        <div className="avatar ">
                            <div className="w-32 group-hover:scale-110 rounded-xl">
                                <img src="https://i.ibb.co/Fv7CrqG/dr-jonkor-mahbub.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center border-t border-gray-400 mt-2 pt-2">
                        <h3 className="text-xl font-bold">Jhankar Mahbub</h3>
                        <p className="text-sm">Sr. Web Developer,</p>
                        <h6 className="text-lg font-semibold">Nielsen</h6>
                        <p className="text-sm">jonkar@mahbub.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTeem;