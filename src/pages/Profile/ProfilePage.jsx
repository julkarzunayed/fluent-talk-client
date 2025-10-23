import React from 'react';
import Profile from './Profile';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hokes/useAuth';
import Swal from 'sweetalert2';

const ProfilePage = () => {
    const { signOutUser, setDBUser } = useAuth();
    const handleUserSighOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Sign Out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sign Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                    .then(() => {
                        Swal.fire({
                            title: "Signed Out!",
                            text: "You Have successfully Sign Out.",
                            icon: "success"
                        });
                        setDBUser(null);

                    }).catch(err => {
                        console.log(err);
                    })

            }
        });

    }
    return (
        <div className='max-w-5xl bg-base-200 pb-8 w-full mx-auto mb-5'>
            <Profile></Profile>
            <div className="flex flex-col items-center justify-center *:py-1.5 gap-4">
                <button
                    onClick={handleUserSighOut}
                    className='btn flex-1 border w-full max-w-sm border-orange-500'>
                    Log Out
                </button>
                <Link
                    to={`/dashboard/settings`}
                    className='btn flex-1 border w-full max-w-sm border-orange-500'>
                    Profile Settings
                </Link>

            </div>
        </div>
    );
};

export default ProfilePage;