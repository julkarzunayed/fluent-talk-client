import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../pages/HomePage/Home';
import Error from '../pages/Error/Error';
import SignUp from '../pages/SignUp/SignUp';
import LogIn from '../pages/LogIn/LogIn';

const router = createBrowserRouter ([
    {
        path: '/',
        Component:  RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {

            },
            {
                path: 'logIn',
                Component: LogIn,

            },
            {
                path: 'signUp',
                Component: SignUp,
            }
        ]
    },
    {
        path: '*',
        Component: Error,
    }
])

export default router;