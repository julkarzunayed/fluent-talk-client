import React from 'react';
import { useLoaderData } from 'react-router';

const EditTutorial = () => {
    const [tutorial] = useLoaderData()
    console.log('tutorial in Edit tutorila', tutorial)
    return (
        <div>
            
        </div>
    );
};

export default EditTutorial;