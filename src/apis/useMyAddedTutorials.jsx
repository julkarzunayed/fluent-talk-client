import React from 'react';
import useAxiosSecure from '../hokes/useAxiosSecure';

const useMyAddedTutorials = () => {
    const axiosSecure = useAxiosSecure();

    const myAddedTutorialsPromise = email => {
        return axiosSecure.get(`tutorial/byTutorId?email=${email}`)
            .then(res => res.data);
    }
    const myAddedTutorialDelete = (email, tutorial_id) => {
        console.log(email, tutorial_id)
        return axiosSecure.delete(`tutorial?email=${email}&tutorial_id=${tutorial_id}`)
            .then(res => res.data);
    }
    return {
        myAddedTutorialsPromise,
        myAddedTutorialDelete,
    };
};

export default useMyAddedTutorials;
