import React from 'react';
import TutorCard from './TutorCard';

const FindTutors = ({tutors}) => {

    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <div className="grid lg:grid-cols-2 gap-3">
                {
                    tutors?.map(tutor => <TutorCard
                        tutor={tutor}
                        key={tutor._id}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;