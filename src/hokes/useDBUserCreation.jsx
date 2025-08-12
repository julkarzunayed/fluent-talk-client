import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from './useAuth';
import useAxios from './useAxios';

const useDBUserCreation = () => {
    const axiosPublic = useAxios();
    const { setDBUser, } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const handleDBUserCreation = (userInfo) => {
        axiosPublic.post(`user`, userInfo)
            .then(result => {
                
                if (result.data.massage === 'user already exist and logged in successfully') {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Well come back ${userInfo?.name} !`,
                        showConfirmButton: true,
                        timer: 2000
                    });
                    
                    navigate(location?.state?.path || '/')
                    setDBUser(userInfo);
                }
                if (result.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You have successfully signed up!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    
                    navigate(location?.state?.path || '/')
                    setDBUser(userInfo);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return {
        handleDBUserCreation,
    };
};

export default useDBUserCreation;