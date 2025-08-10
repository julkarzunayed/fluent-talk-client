import { Tooltip } from 'react-tooltip'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hokes/useAuth';
import { FaListUl } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { PiSignInBold, PiSignOutBold } from 'react-icons/pi';
import ThemeController from '../ThemeController/ThemeController';
import FluentTalkLogo from '../FluentTalkLogo/FluentTalkLogo';



const {
    navLinks
} = {
   navLinks: 'py-1 px-4 rounded-2xl ' 
}

const NavBar = () => {
    const { user, dbUser, signOutUser, setDBUser } = useAuth();
    const [showLinks, setShowLinks] = useState(false);

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
        <div className="min-h-14 ">
            <div className=" fixed top-0 bg-primary w-full z-50 px-1 font-sanchez">

                <div className="p-2 min-h-14 max-w-[1500px] mx-auto flex   items-center justify-between  w-full ">
                    {/* ------------logo------------- */}
                    <FluentTalkLogo />
                    {/* links in navBar */}
                    <div className="hidden md:block">

                        {/* ------- Center links ------- */}
                        <ul className='font-semibold text-white  *:hover:text-secondary flex'>
                            <li><NavLink className={navLinks} to={`/`}>Home</NavLink></li>
                            <li><NavLink className={navLinks} to={`/findTutors`}>Find Tutors</NavLink></li>
                            {
                                user && <>
                                    {
                                        dbUser?.role === 'tutor' && <li>
                                            <NavLink className={navLinks} to={`/addTutorials`}>Add Tutorial</NavLink>
                                        </li>
                                    }
                                    {
                                        dbUser?.role === 'student' && <li>
                                            <NavLink className={navLinks} to={`/myBookedTutorials`}>My Booked Tutorials</NavLink>
                                        </li>
                                    }

                                </>
                            }
                        </ul>
                    </div>



                    {/* --------------full screen nav Popup Closer------------ */}

                    <div onClick={() => setShowLinks(false)} className={`${showLinks ? '' : 'hidden'} fixed left-0 bg-black opacity-15 w-screen h-[200vh] z-30`}>

                    </div>
                    {/* -------------navigation Popup Box------------- */}

                    <div className="">
                        <Tooltip className='z-50' anchorSelect=".my-anchor-element" place="bottom">
                            {dbUser?.name}
                        </Tooltip>
                        {/* Navigation popup box */}
                        {
                            <div className={`transition text-black duration-100  ${showLinks ? 'scale-100' : 'scale-0'} absolute right-5 top-15 bg-white  rounded-sm shadow-2xl z-40`}>
                                {
                                    user ?
                                        <div className=" flex sm:hidden items-center gap-1 pt-3 p-2">
                                            {/*   user Profile pic */}
                                            <a className="my-anchor-element">
                                                <div
                                                    style={{ backgroundImage: `url(${dbUser?.photo_URL || 'https://placehold.co/550x400/444444/ff7800.png?text=Avater'})` }}
                                                    className="my-anchor-element border border-gray-400 w-7 h-7 rounded-sm bg-center bg-cover">

                                                </div>
                                            </a>
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
                                <ul className='*:p-2  *:px-5 *:w-full *:hover:bg-gray-100'>
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
                                            <NavLink to={`/myBookedTutorials`}>My Booked Tutorials</NavLink>
                                        </li>
                                    }

                                    <li><NavLink to={`/messages`}>Messages</NavLink></li>
                                    <li><NavLink to={`/profile`}>Profile</NavLink></li>
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

                            {/* ------------Theme Control Button ------------- */}
                            <ThemeController />

                            {/* User Profile */}
                            {
                                user &&

                                <Link to={`/profile`} className="my-anchor-element">
                                    <div
                                        style={{ backgroundImage: `url(${dbUser?.photo_URL || 'https://placehold.co/550x400/444444/ff7800.png?text=Avater'})` }}
                                        className="hidden sm:block border border-gray-400 w-9 h-9 rounded-full bg-center bg-cover">

                                    </div>
                                </Link>
                            }
                            {/* Navigation buttons */}
                            <button
                                className=''
                                onClick={() => setShowLinks(!showLinks)}>
                                <FaListUl size={28} />
                            </button>
                        </div>
                    </div>
                </div>



            </div >
        </div>
    );
};

export default NavBar;