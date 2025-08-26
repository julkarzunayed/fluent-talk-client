import React from 'react';
import HomeTitle from '../../Components/HomeTitle/HomeTitle';
import { Link } from 'react-router';

// This is a conceptual component to show how a Featured Institutions grid could work.
// It uses a static array for the data, but you would likely fetch this from an API.

const featuredTutors = [
    {
        id: '685108dc6bedf6cb7999c929',
        name: "Dr. Akashy",
        tutorImage: 'https://i.ibb.co/C3mH24Mx/dr-jorina.jpg',
        language: "Urdu",
        description: "Urdu is an Indo-Aryan language spoken chiefly in South Asia. It is the national language and lingua franca of Pakistan. In India, it is an Eighth Schedule language, the status and cultural heritage of which are recognised by the Constitution of India. It also has an official status in several Indian states."
    },
    {
        id: '684f7a6c2952f18767edeacf',
        name: "Jonkar Mahbub",
        language: "Japanese",
        tutorImage: 'https://i.ibb.co/Fv7CrqG/dr-jonkor-mahbub.jpg',
        description: "German is one of the major languages of the world, with nearly 80 million native speakers and over 130 million total speakers as of 2024.[10] It is the most spoken native language within the European Union. German is the second-most widely spoken Germanic."
    },
    {
        id: '684e6232c6ed8fb0cba20f18',
        name: "Tom",
        language: "Arabic",
        tutorImage: 'https://i.ibb.co/VY6VZ5j2/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg',
        description: "A world-renowned institution dedicated to advancing knowledge in science and technology."
    },
    {
        id: '684e61a6c6ed8fb0cba20f17',
        name: "Tom",
        language: "English",
        tutorImage: 'https://i.ibb.co/VY6VZ5j2/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg',
        description: "A world-renowned institution dedicated to advancing knowledge in science and technology."
    },
];

const FeaturedTutors = () => {
    return (
        <section className=" px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1536px] mx-auto">
                {/* Section Header */}
                <HomeTitle
                    titleMini="Explore Our top Booking tutors."
                    title_1='Featured '
                    title_2='Tutors'
                    title_1_color=''

                />
                {/* <div className="text- mb-12">
                    <h2 className="text-4xl font-extrabold text-base-content sm:text-5xl">
                        Featured Institutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl ">
                        Explore scholarships from some of the world's most prestigious universities.
                    </p>
                </div> */}

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                    {featuredTutors.map((tutor) => (

                        <div key={tutor.id} href={tutor.link} className=" bg-base-100 shadow-xl transition-transform transform hover:scale-105 flex flex-col" >
                            <figure
                                style={{
                                    backgroundImage: ` url(${tutor?.tutorImage}) `,
                                    aspectRatio: 1 / 1
                                }}
                                className="mb- bg-center bg-cover relative">
                                {/* <img
                                    src={tutor.logo}
                                    alt={`${tutor.name} logo`}
                                    className="mx-auto translate-y-[50%] absolute z-20 right-2 bottom-0 w-14 border border-secondary" /> */}
                            </figure>
                            <div className="flex flex-1 flex-col gap-2 p-4">
                                <div className=" ">
                                    <h3 className=" text-2xl font-bold text-base-content">{tutor.name}</h3>
                                    <h4 className=" text-lg font-bold  text-gray-400">{tutor.language}</h4>
                                    <p className=" text-sm text-gray-500 mt-2">
                                        {tutor.description.split('', 90)}
                                        {tutor.description.length >= 90 && <span className="text-blue-500 font-bold">. . .</span>}
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-end items-end">
                                    <Link to={`/tutorDetails/${tutor?.id}`}>
                                        <button className='btn  btn-secondary'>Details</button>
                                    </Link>
                                </div>
                            </div>

                        </div>


                    ))}
                </div>
            </div>

        </section>
    );
};

export default FeaturedTutors;

// aspect-ratio: 1 / 1