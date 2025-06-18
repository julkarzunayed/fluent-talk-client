import { Tooltip } from 'react-tooltip'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hokes/useAuth';
import { FaListUl } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { PiSignInBold, PiSignOutBold } from 'react-icons/pi';
import useTheme from '../../hokes/useTheme';


const NavBar = () => {
    const { setIsDark, isDark } = useTheme();
    const { user, dbUser, signOutUser, setDBUser } = useAuth();
    const [showLinks, setShowLinks] = useState(false);

    const handleTheme = (e) => {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute("data-theme")
        const newTheme = currentTheme === 'light' ? 'dracula' : 'light'
        document.documentElement.setAttribute("data-theme", newTheme);
        console.log(currentTheme)
    }

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
        <div className="p-2 min-h-14 flex items-center justify-between relative">

            <Link to={`/`}>
                <h2 className="text-2xl font-bold">FluentTalk</h2>
            </Link>
            {/* links in navBar */}
            <div className="hidden md:block">
                <ul className='*:p-2 *:pb-1 *:border-b-4 *:border-b-base-100 *:hover:border-b-gray-400 flex'>
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
                                    <NavLink to={`/myBookedTutorials`}>My Booked Tutorials</NavLink>
                                </li>
                            }

                        </>
                    }
                </ul>
            </div>




            <div onClick={() => setShowLinks(false)} className={`${showLinks ? '' : 'hidden'} fixed left-0 bg-black opacity-15 w-screen h-[200vh] z-30`}>

            </div>
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
                    {/* Theme Control Button */}
                    <label
                        onClick={handleTheme}
                        className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
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



        </div >
    );
};

export default NavBar;