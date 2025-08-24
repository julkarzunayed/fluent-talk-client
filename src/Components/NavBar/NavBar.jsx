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
        <div className="min-h-5 ">
            <div className=" fixed top-0 bg-primary w-full z-50 px-1 font-sanchez">

                {/* Navbar */}
                <div className="p-2 min-h-14 max-w-[1500px] mx-auto flex   items-center justify-between  w-full ">
                    {/* ------------logo------------- */}
                    <FluentTalkLogo />

                    {/* links in navBar */}
                    <div className="hidden lg:block">

                        {/* ------- Center links ------- */}
                        <ul className='font-semibold text-white  *:hover:text-secondary flex'>
                            <li><NavLink className={navLinks} to={`/`}>Home</NavLink></li>
                            <li><NavLink className={navLinks} to={`/findTutors`}>Find Tutors</NavLink></li>
                            {
                                user &&
                                <li>
                                    <NavLink className={navLinks} to={`/myBookedTutorials`}>My Booked Tutorials</NavLink>
                                </li>

                            }
                            <li><NavLink className={navLinks} to={`/dashboard`}>Dashboard</NavLink></li>
                            <li><NavLink className={navLinks} to={`/help`}>Help</NavLink></li>
                        </ul>
                    </div>


                    {/* <NavLink to={`/addTutorials`}>Add Tutorial</NavLink>
                    <NavLink className={navLinks} to={`/addTutorials`}>Add Tutorial</NavLink>
                    <NavLink to={`/myAddedTutorials`}>My Added Tutorial</NavLink>
                    <NavLink to={`/myBookedTutorials`}>My Booked Tutorials</NavLink>
                    <NavLink to={`/messages`}>Messages</NavLink>
                    <NavLink to={`/profile`}>Profile</NavLink> */}

                    {/* --------------full screen nav Popup Closer------------ */}

                    <div onClick={() => setShowLinks(false)} className={`${showLinks ? '' : 'hidden'} fixed left-0 bg-black opacity-15 w-screen h-[200vh] z-30`}>

                    </div>

                    {/* -------------navigation Popup Box------------- */}

                    <div className="">
                        <Tooltip className='z-50' anchorSelect="my-anchor-element" place="bottom">
                            {dbUser?.name}
                        </Tooltip>
                        {/* Navigation popup box */}
                        {
                            <div className={`transition  duration-100  ${showLinks ? 'scale-100' : 'scale-0'} absolute right-5 top-15 bg-base-100 text-base-content  rounded-sm shadow-2xl z-40 font-semibold`}>
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
                                <ul className='*:p-2  *:px-5 *:w-full *:hover:bg-gray-200/25'>
                                    <li><NavLink className={navLinks} to={`/`}>Home</NavLink></li>
                                    <li><NavLink className={navLinks} to={`/findTutors`}>Find Tutors</NavLink></li>
                                    {
                                        // user && 
                                        <li>
                                            <NavLink className={navLinks} to={`/myBookedTutorials`}>My Booked Tutorials</NavLink>
                                        </li>
                                    }
                                    <li><NavLink className={navLinks} to={`/dashboard`}>Dashboard</NavLink></li>
                                    <li><NavLink className={navLinks} to={`/help`}>Help</NavLink></li>
                                    {
                                        user &&
                                        <li>
                                            <hr />
                                            <button
                                                className='ml-4 flex items-center gap-2 '
                                                onClick={handleUserSighOut}>Sign Out <PiSignOutBold />
                                            </button>

                                        </li>
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
                                className='lg:hidden'
                                onClick={() => setShowLinks(!showLinks)}>
                                <FaListUl className='text-gray-200' size={28} />
                            </button>
                        </div>
                    </div>
                </div>



            </div >
        </div>
    );
};

export default NavBar;