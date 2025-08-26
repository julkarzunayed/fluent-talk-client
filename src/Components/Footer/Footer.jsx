import React from 'react';
import { FaRocketchat } from 'react-icons/fa';
import FluentTalkLogo from '../FluentTalkLogo/FluentTalkLogo';
import { NavLink } from 'react-router';
import { Icon } from '@iconify/react/dist/iconify.js';

const { linkStyles } = {
    linkStyles: 'py-0.5 px-1.5 rounded-full link link-hover'
}

const Footer = () => {

    return (
        <footer className='bg-primary text-gray-200'>
            <div className="footer max-w-[1500px] px-4 mx-auto sm:footer-horizontal py-14">
                <aside>
                    <FluentTalkLogo />
                    <p>
                        A Language tutor and learner
                        <br />
                        connection platform.

                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <NavLink className={linkStyles} to={`/`}>Home</NavLink>
                    <NavLink className={linkStyles} to={`/findTutors`}>Find Tutors</NavLink>
                    <NavLink className={linkStyles} to={`/dashboard`}>Dashboard</NavLink>
                    <NavLink className={linkStyles} to={`/help`}>Help</NavLink>
                </nav>
                {/* <nav>
                    <h6 className="footer-title">Company</h6>
                </nav> */}
                <nav className='text-2xl'>
                    <h6 className="footer-title">Legal</h6>
                    <a href='https://github.com/julkarzunayed' target='_blank' className="link link-hover text-2xl">
                        <Icon icon="radix-icons:github-logo" />
                    </a>
                    <a href='https://www.linkedin.com/in/julkarzunayed/' target='_blank' className="link link-hover">
                        <Icon icon="skill-icons:linkedin" />
                    </a>
                    <a href='https://www.facebook.com/julkarzunayed' target='_blank' className="link link-hover">
                        <Icon icon="logos:facebook" />
                    </a>
                    <a href='https://julkar-zunayed.netlify.app/' target='_blank' className="link link-hover">
                        <Icon icon="gg:profile" />
                    </a>
                </nav>
            </div>
            <div className="max-w-[1500px] mx-auto px-4 min-h-7 border-t border-dashed border-gray-400 text-center pb-3">
                &copy; <span className="text-sm">Copyright by Julkarnain Zunayed</span>
            </div>
        </footer>
    );
};

export default Footer;