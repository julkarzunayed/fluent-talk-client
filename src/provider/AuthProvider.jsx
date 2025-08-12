import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import useAxios from '../hokes/useAxios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxios();
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
            async function fetchDBuser() {
                const res = await axiosPublic.get(`user?email=${user.email}`)
                // .then(response => setDBUser(response.data))
                // .catch(err => {
                //     console.log(err)
                // })
                console.log(res)
                setDBUser(res.data)
            }
            fetchDBuser()
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