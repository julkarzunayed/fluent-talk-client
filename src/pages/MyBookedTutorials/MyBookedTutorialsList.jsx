import React, { use } from 'react';

const MyBookedTutorialsList = ({ myBookedTutorialsPromise }) => {
    const tutorials = use(myBookedTutorialsPromise)
    console.log(tutorials)
    return (
        <div>
            My Booked Tutorials {tutorials.length}
        </div>
    );
};

export default MyBookedTutorialsList;