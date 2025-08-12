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
            <h1 className="text-center text-4xl font-bold my-5">
                Find a Teacher for You
            </h1>
            <div className="flex justify-center mb-5">
                <input
                    type="text"
                    placeholder="Search"
                    defaultValue={location.state}
                    // onClickCapture={(e) => setSearch(e.target.value)}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-secondary" />
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