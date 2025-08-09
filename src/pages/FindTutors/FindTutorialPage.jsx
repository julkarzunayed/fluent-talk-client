import React, { Suspense, useEffect, useState } from 'react';
import TutorCard from './TutorCard';
// import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import FindTutors from './FindTutors';
import { LuSearchX } from 'react-icons/lu';
import { useLocation } from 'react-router';


const FindTutorialPage = () => {
    const location = useLocation();
    const state = location?.state
    const [search, setSearch] = useState();
    const [tutors, setTutors] = useState();
    useEffect(() => {
        fetch(`https://fluent-talk-server-pink.vercel.app/tutorial${search ? `?search=${search}` : ''}`)
            .then(res => res.json())
            .then(data => setTutors(data))
    }, [search])

    // const { isPending, error, isError, data } = useQuery({
    //     queryKey: ['tutorialData', search],
    //     queryFn: () => fetch(`https://fluent-talk-server-pink.vercel.app/tutorial`)
    //         .then(res => res.json())
    // })
    // const tutors = data;
    // if (isPending) return <Loader />
    // if (isError) return <Error />
    // loader: ({ params }) => fetch(`https://fluent-talk-server-pink.vercel.app/tutorial/byTutorId?tutorialId=${params.id}`),
    useEffect(() => {
        setTimeout(() => {
            if (state) {
                setSearch(state)
            }
        }, 500);
    }, [])

    
    const isTutors = Boolean(tutors?.length);
    return (
        <div className={`pb-10`}>
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
                    className="input input-error" />
            </div>
            <Suspense fallback={<Loader></Loader>}>
                <FindTutors tutors={tutors} />
            </Suspense>
            {
                isTutors || 
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                        <LuSearchX color='red' size={30} /> No tutors found
                    </h2>
                </div>
            }
        </div>
    );
};

export default FindTutorialPage;