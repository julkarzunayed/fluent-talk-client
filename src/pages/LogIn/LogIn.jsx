import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hokes/useAuth';
import Swal from 'sweetalert2';
import SocialLogIn from '../../Components/SocialLogIn/SocialLogIn';

const LogIn = () => {
    const { logInUser } = useAuth();
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()

    const handleNavigateToSignUp = (role) => {
        console.log(role)
        // location.state.role = role;
        navigate('/signUp', { state: {role: role, path: location.state } })
        // console.log(location)
    }
    // console.log(import.meta.env.VITE_appId)
    const handleEmailPasswordLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You have successfully signed up!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state || '/');
                    setTimeout(() => {
                        window.location.reload()
                    }, 500);
                }
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
                console.log(err.code);
                if (err.code === 'auth/invalid-credential') {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Your Email might not registered!",
                        timer: 3000
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "There might some unknown Error occurred!",
                        timer: 3000
                    });
                }
            })

    }
    return (
        <div className="flex items-center justify-center py-10">
            <div className="max-w-sm w-full">
                <h1 className="my-3 font-bold text-3xl">LogIn Now!</h1>
                <div className="">
                    <div className="mb-3 flex justify-between gap-2">
                        {/* <Link
                            onClick={() => handleNavigateToSignUp('student')}
                            to={`/signUp`}
                            className='underline'>Sign Up as a student</Link> */}

                        <button
                            onClick={() => handleNavigateToSignUp('student')}
                            className='underline'>Sign Up as a student
                        </button>
                        or
                        <button
                            onClick={() => handleNavigateToSignUp('tutor')}
                            className='underline'>Sign Up as a tutor
                        </button>
                    </div>
                    
                    <SocialLogIn></SocialLogIn>

                    <div className="divider">OR</div>

                    {/* Form */}
                    <form
                        onSubmit={handleEmailPasswordLogin}
                        className='flex flex-col *:w-full'>
                        {/* Email */}
                        <label className='label'>Email</label>
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
                            // minlength="8"
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            />
                        </label>
                        <input className='btn w-full mt-2' type="submit" value='Log In' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default LogIn;