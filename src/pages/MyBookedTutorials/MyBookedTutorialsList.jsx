import React, { use } from 'react';
import MyBookedTutorialsRow from './MyBookedTutorialsRow';
import { Link } from 'react-router';

const MyBookedTutorialsList = ({ myBookedTutorialsPromise }) => {
    const tutorials = use(myBookedTutorialsPromise)
    console.log(tutorials)
    const isTutorials = Boolean(tutorials.length);
    console.log(isTutorials)
    return (
        <div className='max-w-7xl mx-auto'>
            {
                isTutorials ?
                    <div className="">
                        <div className="flex justify-center my-8">
                            <h1 className="text-3xl font-bold">
                                Total Booked Tutorials: {tutorials?.length}
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
                                        <th>Acton</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        tutorials?.map((tutorial, index) => <MyBookedTutorialsRow
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
                                No tutorial Booked Yet!
                            </h1>
                            <p className="mb-5">
                                As soon as you find a suitable tutor and book your first lesson, you'll see it here
                            </p>
                            <Link
                                to={`/findTutors`}
                                className='btn flex-1 border w-full max-w-2xs border-orange-500'>
                                Find a Tutor
                            </Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyBookedTutorialsList;