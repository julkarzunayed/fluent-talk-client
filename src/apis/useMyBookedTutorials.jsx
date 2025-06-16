import React from 'react';
import useAxiosSecure from '../hokes/useAxiosSecure';

const useMyBookedTutorials = () => {
    const axiosSecure = useAxiosSecure();

    const myBookedTutorialsPromise = email => {
        return axiosSecure.get(`tutorialBooking?email=${email}`)
            .then(res => res.data);
    }
    return {
        myBookedTutorialsPromise,
    };
};

export default useMyBookedTutorials;