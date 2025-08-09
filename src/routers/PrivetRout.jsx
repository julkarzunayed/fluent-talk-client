import React from 'react';
import useAuth from '../hokes/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader/Loader';

const PrivetRout = ({ children }) => {

    const { user, isLoading } = useAuth();
    const location = useLocation()

    if(isLoading){
        return Loader;
    }

    if (!user) {
        return <Navigate to={'/logIn'} state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivetRout;