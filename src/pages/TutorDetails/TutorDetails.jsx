import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { IoMdHeart } from "react-icons/io";
import { FaGraduationCap, FaRegHeart } from 'react-icons/fa';
import useAuth from '../../hokes/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const TutorDetails = () => {
    const { dbUser } = useAuth()
    const [tutor] = useLoaderData();

    const hanDleBookTutorial = () => {
        const tutorialBookingInfo = {
            tutorial_id: tutor._id,
            student_email: dbUser.email,
            tutor_name: tutor.tutorName,
            tutorial_language: tutor.language
        }
        console.log(tutorialBookingInfo);
        axios.post(`http://localhost:3000/tutorialBooking`, tutorialBookingInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Booked Tutor!",
                        text: "You Have successfully Booked the tutor.",
                        icon: "success"
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(tutor)
    return (
        <div className='max-w-5xl relative mx-auto my-10 bg-base-200'>
            <div className="relative border-b border-orange-300">
                <div className="absolute w-full">
                    <div className="bg-gray-300 h-36 rounded-b-3xl"></div>
                    <div className="h-36"></div>
                </div>
                <figure
                    style={{ backgroundImage: `url(${tutor?.tutorImage})` }}
                    className="absolute top-[19px] left-1/2 transform -translate-x-1/2 z-10 border border-gray-400 max-w-[250px] w-full max-h-[250px] h-full rounded-full bg-center bg-cover border-t-4 border-t-orange-600 ">

                </figure>
                <div className="py-5">
                    <div className="h-[250px] "></div>
                </div>

            </div>

            <div className="max-w-sm *:mb-5 mx-auto mt-5 pb-5">
                <div className="flex justify-between ">
                    <div className="">
                        <div className="flex gap-3">
                            <h3 className="text-2xl font-bold">
                                <span>Tutor: </span>
                                {tutor?.tutorName}
                            </h3>
                            <img
                                className='w-7'
                                alt="Flags"
                                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${tutor?.language_alpha2Code}.svg`} />
                        </div>
                        <p className="">Tutor Email: {tutor?.tutorEmail}</p>
                        <p className="">Tutor ID: {tutor?.tutorId}</p>
                    </div>
                    <div className="">
                        <p className="">
                            <IoMdHeart size={20} color='red' />
                            { }
                        </p>
                        <p className="font-bold text-2xl">{tutor?.price} $</p>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <div className="md:col-span-2">
                            <p className="text-lg font-semibold flex items-center gap-2">
                                <FaGraduationCap size={22} />
                                {tutor?.language}</p>
                            <p className="">
                                <span className='font-bold underline'>Description: </span>
                                {tutor?.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={hanDleBookTutorial}
                        className='btn flex-1 border border-orange-500'>Book Tutor
                    </button>
                    <button
                        className='shadow-2xl text-shadow-2xs p-2 rounded-lg hover:bg-gray-200 text-orange-600'><FaRegHeart size={25} />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TutorDetails;