import React from 'react';
import useAuth from '../hokes/useAuth';
import { useNavigate } from 'react-router';
import Loader from '../pages/Loader/Loader';

const PrivetRout = ({ children }) => {

    const { user, isLoading } = useAuth();
    const navigate = useNavigate()

    if(isLoading){
        return Loader;
    }

    if (!user) {
        return navigate("/logIn")
    }

    return children;
};

export default PrivetRout;