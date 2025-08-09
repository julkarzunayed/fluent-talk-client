import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [dbUser, setDBUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        if (user) {
            axios.get(`https://fluent-talk-server-pink.vercel.app/user?email=${user.email}`)
                .then(response => setDBUser(response.data))
                .catch(err => {
                    console.log(err)
                })
        }
    }, [user])


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const signOutUser = () => {
        return signOut(auth);
    }


    const userInfo = {
        user,
        dbUser,
        setDBUser,
        isLoading,
        createUser,
        logInUser,
        googleLogin,
        signOutUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;