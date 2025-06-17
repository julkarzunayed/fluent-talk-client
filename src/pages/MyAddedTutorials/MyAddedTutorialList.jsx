import React, { use } from 'react';
import { Link } from 'react-router';
import MyAddedTutorialsRow from './MyAddedTutorialsRow';

const MyAddedTutorialList = ({ myAddedTutorialsPromise }) => {
    const tutorials = use(myAddedTutorialsPromise);
    console.log(tutorials)
    const isTutorials = Boolean(tutorials.length);
    return (
        <div>
            {
                isTutorials ?
                    <div className="">
                        <div className="flex justify-center my-8">
                            <h1 className="text-3xl font-bold">
                                Total Added Tutorials: {tutorials?.length}
                            </h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>Tutor</th>
                                        <th>Language</th>
                                        <th>Price </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        tutorials?.map((tutorial, index) => <MyAddedTutorialsRow
                                            index={index}
                                            tutorial={tutorial}
                                            key={tutorial._id} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className="h-[80vh] flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-3">
                                No tutorial Added Yet!
                            </h1>
                            <p className="mb-5">
                                As soon as you Add a beautiful tutorial and add your first tutorial, you'll see it here
                            </p>
                            <Link
                                to={`/addTutorials`}
                                className='btn flex-1 border w-full max-w-2xs border-orange-500'>
                                Add Tutorial
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyAddedTutorialList;