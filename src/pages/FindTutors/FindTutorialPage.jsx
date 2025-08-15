import React, { Suspense, useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import FindTutors from './FindTutors';
import { LuSearchX } from 'react-icons/lu';
import { useLocation } from 'react-router';
import useAxios from '../../hokes/useAxios';


const FindTutorialPage = () => {
    const axiosPublic = useAxios();
    const location = useLocation();
    const state = location?.state
    const [search, setSearch] = useState();
    // const [tutors, setTutors] = useState();
    // useEffect(() => {
    //     fetch(`https://fluent-talk-server-pink.vercel.app/tutorial${search ? `?search=${search}` : ''}`)
    //         .then(res => res.json())
    //         .then(data => setTutors(data))
    // }, [search])

    useEffect(() => {
        setTimeout(() => {
            if (state) {
                setSearch(state)
            }
        }, 500);
    }, [])

    const { isPending, isLoading, data: tutors = [] } = useQuery({
        queryKey: ['tutorialData', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`tutorial${search ? `?search=${search}` : ''}`)
            console.log(res)
            return res.data
        },
        // enabled: ,
    })
    // const tutors = data;
    // loader: ({ params }) => fetch(`https://fluent-talk-server-pink.vercel.app/tutorial/byTutorId?tutorialId=${params.id}`),



    const isTutors = Boolean(tutors?.length);
    return (
        <div className={`py-10 bg-base-200 min-h-screen`}>
            <div className="grid md:grid-cols-6 max-w-[1500px] mx-auto bg-primary -top-0">
                <div className="bg-[#092746] col-span-6 md:col-span-1">
                    <h1 className="text-center flex sm:flex-col gap-3 justify-center font-semibold font-sanchez my-5">
                        <span className="text-3xl md:text-4xl text-white">
                            Find Your
                        </span>
                        
                        <span className=" text-3xl sm:text-4xl md:text-5xl text-secondary">
                            Tutor
                        </span>
                    </h1>
                </div>
                <div className="flex justify-center flex-wrap gap-4 items-center mb-5 col-span-6 p-3  md:col-span-5 border-gray-50 h-full bg-transparent">
                    <input
                        type="text"
                        placeholder="Tutor Name"
                        defaultValue={location.state}
                        // onClickCapture={(e) => setSearch(e.target.value)}
                        onChange={(e) => setSearch(e.target.value)}
                        className=" outline-0 p-4 max-w-2xs w-full  bg-[#224161]  text-white" />
                    <input
                        type="text"
                        placeholder="Language"
                        defaultValue={location.state}
                        // onClickCapture={(e) => setSearch(e.target.value)}
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-0 p-4 max-w-2xs w-full  bg-[#224161]  text-white" />
                </div>
            </div>


            {
                (!isPending && !isLoading) ?
                    <>
                        <FindTutors tutors={tutors} />
                        {
                            isTutors ||
                            <div className="flex items-center justify-center">
                                <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                                    <LuSearchX color='red' size={30} /> No tutors found
                                </h2>
                            </div>
                        }
                    </>
                    :
                    <Loader></Loader>
            }
            {/* <Suspense fallback={<Loader></Loader>}>
                <FindTutors tutors={tutors} />
            </Suspense> */}

        </div>
    );
};

export default FindTutorialPage;