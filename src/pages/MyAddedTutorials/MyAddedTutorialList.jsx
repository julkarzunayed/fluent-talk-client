import React, { use } from 'react';

const MyAddedTutorialList = ({myAddedTutorialsPromise}) => {
    const tutorials = use(myAddedTutorialsPromise);
    console.log(tutorials)
    return (
        <div>
            My added tutorial : {tutorials.length}
        </div>
    );
};

export default MyAddedTutorialList;