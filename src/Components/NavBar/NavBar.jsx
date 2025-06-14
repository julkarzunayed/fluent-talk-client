import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hokes/useAuth';
import { FaListUl } from 'react-icons/fa';


const NavBar = () => {
    const { user } = useAuth();
    const [showLinks, setShowLinks] = useState(false);
    // console.log(showLinks)
    // console.log(user)
    const links = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/findTutors`}>Find Tutors</NavLink></li>
        <li><NavLink to={`/addTutorials`}>Add Tutorials </NavLink></li>
        <li><NavLink to={`/myTutorials`}>My Tutorials</NavLink></li>

    </>
    return (
        <div className="p-2 min-h-14 flex items-center justify-between">
            <Link to={`/`}>
                <h2 className="text-2xl font-bold">FluentTalk</h2>
            </Link>

            <div className="hidden md:block">
                <ul className='*:p-2 *:hover:bg-gray-100 flex'>
                    {links}
                </ul>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}><FaListUl size={28} /></button>

            <div onClick={() => setShowLinks(false)} className={`${showLinks ? '' : 'hidden'} fixed  bg-amber-20 w-screen h-[200vh] z-30`}>

            </div>

            {
                user ?
                    <div className={`transition duration-100  ${showLinks ? 'scale-100' : 'scale-0'} absolute right-5 top-15 bg-white  rounded-sm shadow-2xl z-40`}>
                        <ul className='*:p-2 *:w-full *:hover:bg-gray-100'>
                            {links}
                            <li><NavLink to={`/messages`}>Messages</NavLink></li>
                            <li><NavLink to={`/settings`}>Settings</NavLink></li>
                            <li><NavLink to={`/help`}>Help</NavLink></li>
                        </ul>
                    </div>
                    :
                    <button className='btn'>Log In</button>
            }

        </div>
    );
};

export default NavBar;