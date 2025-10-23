import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../pages/HomePage/Home';
import Error from '../pages/Error/Error';
import SignUp from '../pages/SignUp/SignUp';
import LogIn from '../pages/LogIn/LogIn';
import AddTutorial from '../pages/AddTutorial/AddTutorial';
import PrivetRout from '../routers/PrivetRout';
import Loader from '../pages/Loader/Loader';
import TutorDetails from '../pages/TutorDetails/TutorDetails';
import MyBookedTutorials from '../pages/MyBookedTutorials/MyBookedTutorials';
import MyAddedTutorials from '../pages/MyAddedTutorials/MyAddedTutorials';
import Settings from '../pages/Settings/Settings';
import ProfilePage from '../pages/Profile/ProfilePage';
import EditTutorial from '../pages/EditTutorial/EditTutorial';
import FindTutorialPage from '../pages/FindTutors/FindTutorialPage';
import DashboardLayout from '../layout/DashboardLayout/DashboardLayout';
import AboutPage from '../pages/AboutPage/AboutPage';

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
                path: '/findTutors',
                Component: FindTutorialPage,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/tutorDetails/:id',
                element: <TutorDetails />,
                // loader: ({ params }) => fetch(`https://fluent-talk-server-pink.vercel.app/tutorial?tutorial_id=${params.id}`),
                // hydrateFallbackElement: <Loader />
            },
            {
                path: '/about',
                Component: AboutPage,
            },
            {
                path: '/messages',
            },
            {
                path: '/help',
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
        path: 'dashboard',
        Component: DashboardLayout,
        children: [
            {
                path: 'myAddedTutorials',
                element: <PrivetRout>
                    <MyAddedTutorials />
                </PrivetRout>
            },
            {
                path: 'profile',
                element: <PrivetRout>
                    <ProfilePage />
                </PrivetRout>
            },
            {
                path: 'settings',
                element: <PrivetRout>
                    <Settings />
                </PrivetRout>
            },
            {
                path: 'addTutorials',
                element: <PrivetRout>
                    <AddTutorial />
                </PrivetRout>
            },
            {
                path: 'myBookedTutorials',
                element: <PrivetRout>
                    <MyBookedTutorials />
                </PrivetRout>
            },
            {
                path: 'editTutorial/:id',
                element: <PrivetRout>
                    <EditTutorial />
                </PrivetRout>,
                loader: ({ params }) => fetch(`https://fluent-talk-server-pink.vercel.app/tutorial?tutorialId=${params.id}`),
                hydrateFallbackElement: <Loader />
            },
        ]
    },
    {
        path: '*',
        Component: Error,
    }
])

export default router;