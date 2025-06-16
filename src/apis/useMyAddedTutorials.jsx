import React from 'react';
import useAxiosSecure from '../hokes/useAxiosSecure';

const useMyAddedTutorials = () => {
    const axiosSecure = useAxiosSecure();

    const myAddedTutorialsPromise = email => {
        return axiosSecure.get(`tutorial/byTutorId?email=${email}`)
            .then(res => res.data);
    }
    return {
        myAddedTutorialsPromise,
    };
};

export default useMyAddedTutorials;
