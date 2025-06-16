import React from 'react';
import useAxiosSecure from '../hokes/useAxiosSecure';

const useDBUser = () => {
    const axiosSecure = useAxiosSecure();

    const dbUserGet = email => {
        return axiosSecure.get(`user?email=${email}`)
            .then(res => res.data)
    }
    const dbUserPatch = (email, data) => {
        return axiosSecure.patch(`user?email=${email}`, data)
            .then(res => res.data)
    }
    return {
        dbUserGet,
        dbUserPatch
    }
};

export default useDBUser;