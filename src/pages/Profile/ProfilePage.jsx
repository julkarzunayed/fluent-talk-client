import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router';

const ProfilePage = () => {
    return (
        <div className='max-w-5xl border bg-base-200 pb-8 w-full mx-auto mb-5'>
            <Profile></Profile>
            <div className="flex items-center justify-center gap-4">
                <Link
                    to={`/settings`}
                    className='btn flex-1 border w-full max-w-sm border-orange-500'>
                    Profile Settings
                </Link>

            </div>
        </div>
    );
};

export default ProfilePage;