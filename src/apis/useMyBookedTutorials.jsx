import React from 'react';
import useAxiosSecure from '../hokes/useAxiosSecure';

const useMyBookedTutorials = () => {
    const axiosSecure = useAxiosSecure();

    const myBookedTutorialsPromise = (email, tutorial_id) => {
        console.log(tutorial_id)
        return axiosSecure.get(`tutorialBooking?email=${email}${tutorial_id ? `&tutorial_id=${tutorial_id}` : ''}`)
            .then(res => res.data);
    }
    // const myTutorialBookingCheckPromise = (email, tutorial_id) => {
    //     return axiosSecure.get(`tutorialBooking?email=${email}&tutorial_id=${tutorial_id}`)
    //         .then(res => res.data);
    // }
    const myBookedTutorialsDelete = (email, data) => {
        return axiosSecure.delete(`tutorialBooking?email=${email}&_id=${data}`)
            .then(res => res.data);
    }
    return {
        myBookedTutorialsPromise,
        myBookedTutorialsDelete
    };
};

//`&tutorial_id=${

export default useMyBookedTutorials;