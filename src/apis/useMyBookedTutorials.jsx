import React from 'react';
import useAxiosSecure from '../hokes/useAxiosSecure';

const useMyBookedTutorials = () => {
    const axiosSecure = useAxiosSecure();

    const myBookedTutorialsPromise = email => {
        return axiosSecure.get(`tutorialBooking?email=${email}`)
            .then(res => res.data);
    }
    const myBookedTutorialsDelete = (email, data) => {
        console.log(data)
        return axiosSecure.delete(`tutorialBooking?email=${email}&_id=${data}`)
            .then(res => res.data);
    }
    return {
        myBookedTutorialsPromise,
        myBookedTutorialsDelete
    };
};

export default useMyBookedTutorials;