import React, { Suspense } from 'react';
import MyBookedTutorialsList from './MyBookedTutorialsList';
import useMyBookedTutorials from '../../apis/useMyBookedTutorials';
import useAuth from '../../hokes/useAuth';

const MyBookedTutorials = () => {
    const { user } = useAuth();
    const { myBookedTutorialsPromise } = useMyBookedTutorials()
    return (
        <div>
            <Suspense>
                <MyBookedTutorialsList
                    myBookedTutorialsPromise={myBookedTutorialsPromise(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyBookedTutorials;