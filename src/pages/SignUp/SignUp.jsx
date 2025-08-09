import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hokes/useAuth';
// import axios from 'axios';
import Swal from 'sweetalert2'
import useDBUserCreation from '../../hokes/useDBUserCreation';
import SocialLogIn from '../../Components/SocialLogIn/SocialLogIn';

const SignUp = () => {
    const { createUser } = useAuth();
    const { handleDBUserCreation } = useDBUserCreation()
    const navigate = useNavigate();
    const location = useLocation();
    const role = location?.state?.role;
    const isRole = Boolean(role);
    


    const handleEmailPasswordLogin = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        const photo_URL = formData.get('photo_URL');
        // const userInfo = Object.fromEntries(formData.entries());

        const userInfo = {
            email,
            name,
            photo_URL,
            role: role,
        }
        if (!isRole) {
            userInfo.role = 'student'
        }
        


        createUser(email, password)
            .then(result => {
                if (result.user) {
                    handleDBUserCreation(userInfo)
                        .then(result => {
                            if (result.data.insertedId) {

                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "You have successfully signed up!",
                                    showConfirmButton: true,
                                    timer: 5000
                                });
                                
                                // if(location?.state?.role){
                                //     navigate('/')
                                // }else{
                                // }
                                navigate(location?.state?.path || '/')
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            }).catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="flex items-center justify-center py-10">
            <div className="max-w-sm w-full">
                <h1 className="my-3 font-bold text-3xl">Sign up as a
                    {isRole ? location?.state?.role : " student"}!</h1>
                <div className="">
                    <div className="mb-3 flex  gap-2">
                        Already have an account?
                        <Link state={location?.state?.path} to={`/logIn`} className='underline'>Log in</Link>
                    </div>

                    <SocialLogIn></SocialLogIn>
                    <div className="divider">OR</div>

                    {/* Form */}
                    <form
                        onSubmit={handleEmailPasswordLogin}
                        className='flex flex-col *:w-full'>

                        {/* Name */}
                        <label className='label'>Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input"
                            placeholder="Name" />

                        {/* photo Url */}
                        <label className='label mt-2'>Photo URL</label>
                        <input
                            type="url"
                            name='photo_URL'
                            className="input"
                            placeholder="Photo URL" />

                        {/* Email */}
                        <label className='label mt-2'>Email</label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                name='email'
                                placeholder="mail@site.com"
                                required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>

                        {/* Password */}
                        <label className='label mt-2'>Password</label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                type="password"
                                name='password'
                                required
                                placeholder="Password"
                                minlength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>
                        <input className='btn w-full mt-2' type="submit" value='Sign Up' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;