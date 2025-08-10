import React from 'react';
import { RiArrowRightWideLine } from "react-icons/ri";
import { Navigate, useNavigate } from 'react-router';
import FindTutorialPage from '../FindTutors/FindTutorialPage';

const LanguageCategoryCard = ({ language }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        console.log('clicked', language?.languageName)
        navigate('/findTutors', { state: language?.languageName })
        // return <Navigate to={'/findTutors'}></Navigate>
    }

    return (
        <div
            onClick={handleNavigate}
            className='flex gap-3 bg-white hover:shadow-sm rounded-2xl p-3'>
            <div className="w-13">
                <img
                    alt="Flags"
                    className='border border-base-300'
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${language?.alpha2Code}.svg`} />
            </div>
            <div className="flex justify-between items-center w-full">
                <h2 className="text-2xl font-bold">
                    {language?.languageName}
                </h2>
                <RiArrowRightWideLine size={35} />
            </div>
        </div>
    );
};

export default LanguageCategoryCard;