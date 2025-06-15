import React from 'react';
import { useLoaderData } from 'react-router';
import TutorCard from './TutorCard';

const FindTutors = () => {
    const tutors = useLoaderData();
    console.log(tutors);
    return (
        <div className='p-5'>
            <h1 className="text-center text-4xl font-bold my-5">Find a Teacher for You</h1>
            <div className="">
                {
                    tutors.map(tutor => <TutorCard 
                        tutor={tutor}
                        key={tutor._id}></TutorCard> )
                }
            </div>
        </div>
    );
};

export default FindTutors;