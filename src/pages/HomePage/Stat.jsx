import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCommentMedical } from 'react-icons/fa';
import { IoLanguageSharp } from 'react-icons/io5';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudentDuotone } from 'react-icons/pi';



const Stat = () => {
    const [studentCount, setStudentCount ]= useState(0);
    const [tutorCount, setTutorCount ]= useState(0);

    useEffect(() => {
        axios.get(`https://fluent-talk-server-pink.vercel.app/user/student`)
            .then(res => setStudentCount(res.data))
        axios.get(`https://fluent-talk-server-pink.vercel.app/user/tutor`)
            .then(res => setTutorCount(res.data))
    }, []);

    return (
        <div className="flex p-5">
            <div className="stats shadow mx-auto">
                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <LiaChalkboardTeacherSolid  size={40}/>
                    </div>
                    <div className="stat-title">Tutors</div>
                    <div className="stat-value">{tutorCount}+</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <FaCommentMedical size={40}/>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">4,200</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <PiStudentDuotone  size={40}/>
                    </div>
                    <div className="stat-title">Learners</div>
                    <div className="stat-value">{studentCount}+</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat">
                    <div className="stat-figure text-orange-600">
                        <IoLanguageSharp size={40} />
                    </div>
                    <div className="stat-title">Language </div>
                    <div className="stat-value">1,200</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>
            </div>
        </div>

    );
};

export default Stat;