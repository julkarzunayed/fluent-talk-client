import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';


const axiosInstance = axios.create({
    baseURL: 'https://fluent-talk-server-pink.vercel.app/',
})

const useAxiosSecure = () => {
    const { user } = useAuth();

    // request Interceptors
    axiosInstance.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });

    // response interceptors
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if(error.status === 401|| error.status === 403){
            console.log();
        }
        console.log(error);
        return Promise.reject(error);
    })
    return axiosInstance;
};

export default useAxiosSecure;