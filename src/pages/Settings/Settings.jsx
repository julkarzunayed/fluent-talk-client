import React from 'react';
import useAuth from '../../hokes/useAuth';
import useDBUser from '../../apis/useDBUser';
import Swal from 'sweetalert2';
import Profile from '../Profile/Profile';

const Settings = () => {
    const { user, dbUser, setDBUser } = useAuth();
    const { dbUserPatch } = useDBUser();

    //db user update
    const dbUserInWeb = {
        ...dbUser,
    }
    // console.log(dbUserInWeb)
    const handleSettings = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo_URL = form.photo_URL.value;

        dbUserInWeb.name = name;
        dbUserInWeb.photo_URL = photo_URL;
        // console.log(dbUserInWeb);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to change Your Information!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Edit!"
        }).then((result) => {
            if (result.isConfirmed) {
                dbUserPatch(user.email, { name, photo_URL })
                    .then(res => {
                        console.log(res)
                        if (res.modifiedCount) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Successfully Updated Your Info.",
                                icon: "success"
                            });
                            setDBUser(dbUserInWeb);
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "There might be some kinds of error occurred!",
                                icon: "error"
                            });
                        }
                    }).catch(err => {
                        Swal.fire({
                            title: "Error!",
                            text: "There might be some kinds of error occurred!",
                            icon: "error"
                        });
                        console.log(err)
                    })
            }
        });

        console.log(name, photo_URL)
    }

    const handleTutorApply = () => {
        dbUserInWeb.role = 'tutor';
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Apply to become a Tutor!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Apply!"
        }).then((result) => {
            if (result.isConfirmed) {
                dbUserPatch(user.email, { role: 'tutor' })
                    .then(res => {
                        console.log(res)
                        if (res.modifiedCount) {
                            Swal.fire({
                                title: "Received!",
                                text: "We will approved your application Soon!",
                                icon: "success"
                            });
                            setTimeout(() => {
                                setDBUser(dbUserInWeb);
                                Swal.fire({
                                    title: "Granted!",
                                    text: "Your Application Granted!",
                                    icon: "success"
                                });
                            }, 10000);
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "There might be some kinds of error occurred!",
                                icon: "error"
                            });
                        }
                    }).catch(err => {
                        Swal.fire({
                            title: "Error!",
                            text: "There might be some kinds of error occurred!",
                            icon: "error"
                        });
                        console.log(err)
                    })
            }
        });
    }
    return (
        <div className='max-w-5xl bg-base-200 pb-8 w-full mx-auto mb-5'>
            <Profile></Profile>
            <h1 className="text-center font-bold text-3xl mb-5">Edit Your Profile Info</h1>
            <div className="max-w-sm w-full mx-auto border border-orange-100 p-3 rounded-lg shadow-xl">
                <form
                    onSubmit={handleSettings}
                    className='flex flex-col *:w-full'>
                    {/* Email */}
                    <label className='label'>Email</label>
                    <input
                        type="Email"
                        name='email'
                        className="input"
                        value={dbUser?.email}
                        placeholder="Email" />

                    {/* Name */}
                    <label className='label'>Name</label>
                    <input
                        type="text"
                        name='name'
                        className="input"
                        defaultValue={dbUser?.name}
                        placeholder="Name" />

                    {/* photo Url */}
                    <label className='label mt-2'>Photo URL</label>
                    <input
                        type="url"
                        name='photo_URL'
                        className="input"
                        defaultValue={dbUser?.photo_URL}
                        placeholder="Photo URL" />

                    <input className='btn w-full mt-2 border-orange-600' type="submit" value='Update Info' />
                </form>
            </div>
            {
                dbUser?.role !== 'tutor' &&

                <div className="max-w-sm w-full mx-auto border border-orange-200 p-3 rounded-lg shadow-xl mt-8">
                    <h2 className="text-center font-bold text-2xl">Become A Tutor</h2>
                    <button
                        onClick={handleTutorApply}
                        className="btn w-full mt-2 border-orange-600">
                        Apply for bing a tutor
                    </button>
                </div>
            }

        </div>
    );
};

export default Settings;