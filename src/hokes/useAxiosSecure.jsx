// import axios from 'axios';
// import React from 'react';
// import useAuth from './useAuth';


// const axiosInstance = axios.create({
//     baseURL: `http://localhost:3000/`
//     // baseURL: 'https://fluent-talk-server-pink.vercel.app/',
// })

// const useAxiosSecure = () => {
//     const { user } = useAuth();
//     // console.log(user)

//     // request Interceptors
//     axiosInstance.interceptors.request.use((config) => {
//         config.headers.authorization = `Bearer ${user?.accessToken}`
//         return config;
//     });

//     // response interceptors
//     axiosInstance.interceptors.response.use(response => {
//         return response;
//     }, error => {
//         if (error.status === 401 || error.status === 403) {
//             //user Wiil signout here
//         }
//         console.log(error);
//         return Promise.reject(error);
//     })
//     return axiosInstance;
// };

// export default useAxiosSecure;



import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

// Create a single instance of the axios client outside of the hook.
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000/'
    baseURL: 'https://fluent-talk-server-pink.vercel.app/',
});

const useAxiosSecure = () => {
    const { user, logOut, isLoading } = useAuth();
    console.log(user, isLoading)

    // Use a single useEffect hook to manage the interceptors.
    // The dependency array [user, logOut] ensures the interceptor is re-created
    // whenever the user or logOut function changes.
    useEffect(() => {
        // Request interceptor: add the authorization header
        const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
            // Check if the user and accessToken exist before adding the header
            if (user?.accessToken) {
                config.headers.authorization = `Bearer ${user?.accessToken}`;
            }
            return config;
        });

        // Response interceptor: handle errors
        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                // Check for 401 or 403 status codes and log out the user
                if (error.response?.status === 401 || error.response?.status === 403) {
                    console.error('Unauthorized or Forbidden access. Logging out...');
                    if (logOut) {
                        logOut(); // Call the logOut function from your useAuth hook
                    }
                }
                return Promise.reject(error);
            }
        );

        // Cleanup function: eject the interceptors when the component unmounts
        // or before the effect runs again. This is crucial to prevent memory leaks.
        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [user, logOut]); // Dependency array: Re-run this effect when `user` or `logOut` changes.

    return axiosInstance;
};

export default useAxiosSecure;
