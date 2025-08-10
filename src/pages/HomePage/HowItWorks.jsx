import React from 'react';

import image01 from '../../assets/students-with-monitor.jpg';
import image02 from '../../assets/making_payments.jpg';
import image03 from '../../assets/child_onlineclass.jpg';

const HowItWorks = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <div className="space-y-10 md:space-y-14 lg:space-y-20">
                <div className="flex flex-col sm:flex-row *:flex-1 gap-7 sm:gap-10 md:gap-14 lg:gap-20 *:">
                    <figure role='' className=" overflow-hidden">
                        <img src={image01} alt="" className='rounded-3xl'/>
                    </figure>
                    <div className="flex flex-col gap-2 justify-center">
                        <h2 className="flex items-center justify-center text-4xl rounded-full p-2 h-14 w-14 font-semibold bg-secondary text-white font-sanchez">
                            1
                        </h2>
                        <h3 className="font-bold text-3xl font-sanchez">
                            Browse a Tutor
                        </h3>
                        <p className="text-lg">
                            Find a suitable Tutor for you or Your Child. Get detail information from tutor details page.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row *:flex-1 gap-7 sm:gap-10 md:gap-14 lg:gap-20 *:">
                    <div className="flex flex-col gap-2 justify-center">
                        <h2 className="flex items-center justify-center text-4xl rounded-full p-2 h-14 w-14 font-semibold bg-secondary text-white font-sanchez">
                            2
                        </h2>
                        <h3 className="font-bold text-3xl font-sanchez">
                            Purchase quickly and securely
                        </h3>
                        <p className="text-lg">
                            If You find a suitable tutor for you Purchase the tutor quickly. And while Purchasing be aware of your security. We are not harmful for your bank information.
                        </p>
                    </div>
                    <figure role='' className="overflow-hidden">
                        <img src={image02} alt="" className='rounded-3xl'/>
                    </figure>
                </div>
                <div className="flex flex-col sm:flex-row *:flex-1 gap-7 sm:gap-10 md:gap-14 lg:gap-20 *:">
                    <figure role='' className=" overflow-hidden">
                        <img src={image03} alt="" className='rounded-3xl'/>
                    </figure>
                    <div className="flex flex-col gap-2 justify-center">
                        <h2 className="flex items-center justify-center text-4xl rounded-full p-2 h-14 w-14 font-semibold bg-secondary text-white font-sanchez">
                            3
                        </h2>
                        <h3 className="font-bold text-3xl font-sanchez">
                            Start learning right away
                        </h3>
                        <p className="text-lg">
                            After purchasing Your favorite tutor start learning withe your tutor. Learn New thing every day. Learning is more Easy, more Effective, more Productive!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;