import React from 'react';
import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router';

const TutorCard = ({ tutor }) => {

    return (
        <div className='bg-base-100 hover: box-shadow-hover hover:border-gray-500 rounded-sm p-5 '>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-4">
                <div className="flex gap-5 sm:gap-1">
                    <figure className='max-w-[150px] min-h-[150px] flex-1 w-full'>
                        <div
                            style={{ backgroundImage: `url(${tutor?.tutorImage || 'https://placehold.co/550x400/444444/ff7800.png?text=Avater'})` }}
                            className="w-full h-full rounded-sm bg-center bg-cover">

                        </div>
                        {/* <img
                            className=''
                            src={tutor?.tutorImage} alt="tutor image" /> */}
                    </figure>
                    <div className="sm:hidden">
                        <div className="flex gap-3">
                            <h3 className="text-2xl font-bold">{tutor?.tutorName}</h3>
                            <img
                                className='w-5'
                                alt="Flags"
                                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${tutor?.language_alpha2Code}.svg`} />
                        </div>
                        <div className="">
                            <p className="font-bold">{tutor?.price} $</p>
                            <p className=" flex items-center gap-3">
                                <IoMdHeart size={17} color='red' />
                                <span className='font-bold'>
                                    {tutor?.review?.length || 0}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 grid md:grid-cols-3">
                    <div className="md:col-span-2">
                        <div className="hidden  sm:flex gap-3">
                            <h3 className="text-2xl font-bold">{tutor?.tutorName}</h3>
                            <img
                                className='w-5'
                                alt="Flags"
                                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${tutor?.language_alpha2Code}.svg`} />
                        </div>
                        <p className="text-lg font-semibold">{tutor?.language}</p>
                        <p className="text-sm">
                            <span className='font-medium'>Description:</span>
                            {tutor?.description?.slice(0, 70)}
                            <Link className='text-blue-600 '> Read More</Link>
                        </p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="hidden sm:flex justify-between">
                            <p className="font-bold">{tutor?.price} $</p>
                            <p className=" flex items-center gap-3">
                                <IoMdHeart size={17} color='red' />
                                <span className='font-bold'>
                                    {tutor?.review?.length || 0}
                                </span>
                            </p>
                        </div>
                        <Link to={`/tutorDetails/${tutor?._id}`}>
                            <button className='btn w-full '>Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TutorCard;