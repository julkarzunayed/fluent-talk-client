import React, { Suspense } from 'react';
import MyAddedTutorialList from './MyAddedTutorialList';
import useMyAddedTutorials from '../../apis/useMyAddedTutorials';
import useAuth from '../../hokes/useAuth';

const MyAddedTutorials = () => {
    const {user} = useAuth();
    const {myAddedTutorialsPromise} = useMyAddedTutorials();
    return (
        <div>
            <Suspense>
                <MyAddedTutorialList myAddedTutorialsPromise={myAddedTutorialsPromise(user.email)}/>
            </Suspense>
        </div>
    );
};

export default MyAddedTutorials;