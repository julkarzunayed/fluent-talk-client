import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {

    const userInfo = {
        user : "jonkarmahbub",
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;