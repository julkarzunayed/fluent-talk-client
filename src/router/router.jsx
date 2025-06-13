import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../pages/HomePage/Home';
import Error from '../pages/Error/Error';

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

            },
            {
                path: 'signUp'
            }
        ]
    },
    {
        path: '*',
        Component: Error,
    }
])

export default router;