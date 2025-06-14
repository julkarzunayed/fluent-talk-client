import React from 'react';
import { IoLanguageSharp } from 'react-icons/io5';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudentDuotone } from 'react-icons/pi';

const Stat = () => {
    return (
        <div className="flex p-5">
            <div className="stats shadow mx-auto">
                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <LiaChalkboardTeacherSolid  size={40}/>
                    </div>
                    <div className="stat-title">Tutors</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <PiStudentDuotone  size={40}/>
                    </div>
                    <div className="stat-title">Learners</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <IoLanguageSharp size={40} />
                    </div>
                    <div className="stat-title">Language</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>

    );
};

export default Stat;