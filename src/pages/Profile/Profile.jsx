import React from 'react';
import useAuth from '../../hokes/useAuth';
import { TfiEmail } from "react-icons/tfi";
import { IoMdHeart } from 'react-icons/io';
import { FaRegIdBadge } from 'react-icons/fa';

const Profile = () => {
    const { dbUser } = useAuth();
    return (
        <div className='max-w-5xl relative mx-auto  bg-base-200'>
            <div className="relative border-b border-orange-300">
                <div className="absolute w-full">
                    <div className="bg-gray-300 h-36 rounded-b-3xl"></div>
                    <div className="h-36"></div>
                </div>
                <figure
                    style={{ backgroundImage: `url(${dbUser?.photo_URL})` }}
                    className="absolute top-[19px] left-1/2 transform -translate-x-1/2 z-10 border border-gray-400 max-w-[250px] w-full max-h-[250px] h-full rounded-full bg-center bg-cover border-t-4 border-t-orange-600 ">

                </figure>
                <div className="py-5">
                    <div className="h-[250px] "></div>
                </div>

            </div>

            <div className="max-w-sm *:mb-5 mx-auto mt-5 pb-5">
                <div className="text-center space-y-2">
                    <h3 className="text-3xl font-bold">
                        {dbUser?.name}
                    </h3>
                    <p className="flex items-center justify-center gap-3"><TfiEmail className='text-orange-500'/> {dbUser?.email}</p>
                    <p className="flex items-center justify-center gap-3"> <FaRegIdBadge className='text-orange-500' />: {dbUser?._id}</p>
                </div>
                
            </div>

        </div>
    );
};

export default Profile;