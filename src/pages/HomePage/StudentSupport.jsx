import React from 'react';

import HomeTitle from '../../Components/HomeTitle/HomeTitle';


import background from "../../assets/support_teme.jpg"
import supportGirl from "../../assets/headphone_wearing_student.png"
import Swal from 'sweetalert2';

const StudentSupport = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log({ name, email, message })
        Swal.fire({
            title: "Submit your Message?",
            html: `
            <br />
            <h3>${name}</h3>
            <br />
            <h3>${email}</h3>
            <br />
            <p>${message}</p>
            
            `,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#092746",
            cancelButtonColor: "#aece61",
            confirmButtonText: "Yes, Submit!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Submitted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to bottom, oklch(20% 0.05 252 / 0.6), oklch(20% 0.05 252 / 0.8)), url(${background})`,
            }}
            className='bg-center bg-cover bg-fixed '
        >
            <div className="max-w-[1500px] mx-auto ">
                <HomeTitle
                    titleMini="Having issue! Need some online support?"
                    title_1='Tale Online '
                    title_2='Support'
                    title_1_color='text-white'

                />
                <div className="flex flex-col-reverse sm:flex-row *:flex-1 gap-10 sm:py-20 md:py-24 lg:py-32">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-gray-200 font-bold text-2xl">
                            Reach out Our support teem
                        </h3>
                        <p className="text-gray-200">
                            Write down your problems our support teem will reach out you.
                        </p>
                        <form className='space-y-2.5' onSubmit={handleFormSubmit}>
                            <div className="flex flex-col sm:flex-row *:flex-1 sm:gap-2">
                                {/* name field */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-gray-200">Your Name:</legend>
                                    <label className="input validator w-full">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </g>
                                        </svg>
                                        <input
                                            type="text"
                                            name='name'
                                            required
                                            placeholder="Mr Example"
                                            minlength="3"
                                            maxlength="30"
                                            title="Only letters, numbers or dash"
                                        />
                                    </label>
                                    <p className="validator-hint">
                                        Your name is required
                                    </p>
                                </fieldset>
                                {/* Email Field */}
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend text-gray-200">Your Name:</legend>
                                    <label className="input validator w-full">
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
                                            name='email'
                                            type="email"
                                            placeholder="example@mail.com"
                                            required />
                                    </label>
                                    <div className="validator-hint hidden">Enter valid email address</div>
                                </fieldset>
                            </div>
                            {/* Message */}
                            <textarea
                                className="textarea w-full"
                                name='message'
                                required
                                placeholder="Write down your problem">

                            </textarea>
                            <button role='submit' className='btn btn-secondary w-full'>
                                Submit
                            </button>
                        </form>
                    </div>
                    <figure className=''>
                        <img className='rounded-4xl opacity-80 max-w-[250px] sm:max-w-full mx-auto' src={supportGirl} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default StudentSupport;