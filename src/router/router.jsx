import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../pages/HomePage/Home';
import Error from '../pages/Error/Error';
import SignUp from '../pages/SignUp/SignUp';
import LogIn from '../pages/LogIn/LogIn';
import AddTutorial from '../pages/AddTutorial/AddTutorial';
import PrivetRout from '../routers/PrivetRout';
import FindTutors from '../pages/FindTutors/FindTutors';
import Loader from '../pages/Loader/Loader';
import TutorDetails from '../pages/TutorDetails/TutorDetails';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/addTutorials',
                element: <PrivetRout>
                    <AddTutorial />
                </PrivetRout>
            },
            {
                path: '/findTutors',
                loader: () => fetch(`http://localhost:3000/tutorial`),
                Component : FindTutors,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/tutorDetails/:id',
                element: <PrivetRout>
                    <TutorDetails/>
                </PrivetRout>,
                loader: ({params}) => fetch(`http://localhost:3000/tutorial?tutorialId=${params.id}`),
                hydrateFallbackElement: <Loader/>
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