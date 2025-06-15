import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hokes/useAuth';
import { FaListUl } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { PiSignInBold, PiSignOutBold } from 'react-icons/pi';


const NavBar = () => {
    const { user, dbUser, signOutUser, setDBUser } = useAuth();
    const [showLinks, setShowLinks] = useState(false);
    // console.log(showLinks)
    // console.log(user)

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
                        setDBUser(null)
                    }).catch(err => {
                        console.log(err);
                    })

            }
        });

    }


    return (
        <div className="p-2 min-h-14 flex items-center justify-between relative">
            <Link to={`/`}>
                <h2 className="text-2xl font-bold">FluentTalk</h2>
            </Link>

            <div className="hidden md:block">
                <ul className='*:p-2 *:hover:bg-gray-100 flex'>
                    <li><NavLink to={`/`}>Home</NavLink></li>
                    <li><NavLink to={`/findTutors`}>Find Tutors</NavLink></li>
                    {
                        user && <>
                            {
                                dbUser?.role === 'tutor' && <li>
                                    <NavLink to={`/addTutorials`}>Add Tutorial</NavLink>
                                </li>
                            }
                            {
                                dbUser?.role === 'student' && <li>
                                    <NavLink to={`/myTutorials`}>My Tutorials</NavLink>
                                </li>
                            }

                        </>
                    }
                </ul>
            </div>



            <div onClick={() => setShowLinks(false)} className={`${showLinks ? '' : 'hidden'} fixed  bg-amber-20 w-screen h-[200vh] z-30`}>

            </div>
            <div className="">
                {
                    <div className={`transition duration-100  ${showLinks ? 'scale-100' : 'scale-0'} absolute right-5 top-15 bg-white  rounded-sm shadow-2xl z-40`}>
                        {
                            user ?
                                <div className=" flex sm:hidden items-center gap-1 pt-3 p-2">
                                    <div
                                        style={{ backgroundImage: `url(${dbUser?.photo_URL})` }}
                                        className=" border border-gray-400 w-7 h-7 rounded-sm bg-center bg-cover">

                                    </div>
                                    <h3 className="font-bold text-sm">{dbUser?.name}</h3>
                                </div>
                                :
                                <button className='border-b border-gray-400 w-full'>
                                    <Link
                                        className='flex items-center justify-center p-2'
                                        to={`/logIn`}>
                                        <PiSignInBold /> Log In
                                    </Link>
                                </button>
                        }

                        {/* All Navigation Links */}
                        <ul className='*:p-2 *:px-5 *:w-full *:hover:bg-gray-100'>
                            <li><NavLink to={`/`}>Home</NavLink></li>
                            <li><NavLink to={`/findTutors`}>Find Tutors</NavLink></li>
                            {
                                dbUser?.role === 'tutor' && <>
                                <li>
                                    <NavLink to={`/addTutorials`}>Add Tutorial</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/myAddedTutorials`}>My Added Tutorial</NavLink>
                                </li>
                                </>
                            }
                            {
                                user && <li>
                                    <NavLink to={`/myTutorials`}>My Tutorials</NavLink>
                                </li>
                            }

                            <li><NavLink to={`/messages`}>Messages</NavLink></li>
                            <li><NavLink to={`/settings`}>Settings</NavLink></li>
                            <li><NavLink to={`/help`}>Help</NavLink></li>
                            {
                                user &&
                                <button
                                    className='flex items-center gap-2 border-t border-gray-400'
                                    onClick={handleUserSighOut}>Sign Out <PiSignOutBold />
                                </button>

                            }

                        </ul>
                    </div>


                }
                <div className="flex items-center gap-2">
                    {
                        user && <div
                            style={{ backgroundImage: `url(${dbUser?.photo_URL})` }}
                            className="hidden sm:block border border-gray-400 w-9 h-9 rounded-full bg-center bg-cover">

                        </div>
                    }
                    <button
                        className=''
                        onClick={() => setShowLinks(!showLinks)}>
                        <FaListUl size={28} />
                    </button>
                </div>
            </div>



        </div>
    );
};

export default NavBar;