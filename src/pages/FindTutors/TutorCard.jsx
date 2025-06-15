import React from 'react';

const TutorCard = ({ tutor }) => {

    return (
        <div className='border p-2 max-w-7xl mx-auto mb-2'>
            <div className="grid gap-2 grid-cols-4">
                <div className="">
                    <img src={tutor?.tutorImage} alt="" />
                </div>
                <div className="col-span-2">
                    <div className="flex gap-3">
                        <h3 className="text-2xl font-bold">{tutor?.tutorName}</h3>
                        <img
                            className='w-5'
                            alt="Flags"
                            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${tutor?.language_alpha2Code}.svg`} />
                    </div>
                    <p className="text-lg font-semibold">{tutor?.language}</p>
                    <p className="">{tutor?.description}</p>
                </div>
                <div className="">
                    <p className="font-bold">{tutor?.price} $</p>

                </div>
            </div>
        </div>
    );
};

export default TutorCard;