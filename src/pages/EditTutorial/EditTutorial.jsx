import React, { useEffect, useState } from 'react';
import useAuth from '../../hokes/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router';
import useMyAddedTutorials from '../../apis/useMyAddedTutorials';

const EditTutorial = () => {
    const { myAddedTutorialPatch } = useMyAddedTutorials();
    const { dbUser, user } = useAuth();
    const [tutorial] = useLoaderData()
    const [languages, setLanguages] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`/public/data/language_data.json`)
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);

    console.log(tutorial)
    // console.log(languages);
    const handleAddTutorial = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const language = formData.get('language');
        const price = formData.get('price');
        const description = formData.get('description');
        if (!language) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Select a Language!",
                showConfirmButton: true,
            });
            return;
        }
        const language_alpha2Code = languages.find(L => L?.languageName === language)

        const updateInfo = {
            language,
            language_alpha2Code: language_alpha2Code?.alpha2Code,
            price,
            description
        }
        // console.log(tutorialInfo);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Update!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Edit!"
        }).then((result) => {
            if (result.isConfirmed) {
                myAddedTutorialPatch(user.email, tutorial._id, updateInfo)
                    .then(res => {
                        if (res.modifiedCount) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Tutorial successfully Updated.",
                                icon: "success"
                            });
                        }
                        // console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                        Swal.fire({
                            title: "Error!",
                            text: "Some kinds of error occurred! Try again",
                            icon: "Error"
                        });
                    })


            }
        });

    }
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-5xl">Edit tutorial</h1>
            {/* <p className="text-center my-5">Add a Tutorial and some clean money</p> */}
            <form
                onSubmit={handleAddTutorial}
                className=''>
                <div className="grid md:grid-cols-2  gap-3">
                    <fieldset className='fieldset'>
                        <label className='label'>Your Name</label>
                        <input
                            type="text"
                            name='name'
                            value={dbUser?.name}
                            className="input w-full"
                            placeholder="Name" />
                    </fieldset>

                    {/* Email */}
                    <fieldset className='fieldset'>
                        <label className='label'>Your Email</label>
                        <input
                            type="email"
                            name='email'
                            value={dbUser?.email}
                            className="input w-full"
                            placeholder="Email" />
                    </fieldset>
                    {/* Language */}
                    <fieldset className='fieldset'>
                        <label className='label'>Language</label>

                        <select
                            className='select w-full'
                            required
                            name="language"
                            defaultValue={'Select a Language'}>
                            <option disabled={true}>Select a Language</option>
                            {
                                languages?.map(language => <option key={language.id} >{language?.languageName}</option>)
                            }
                        </select>
                    </fieldset>

                    {/* Price */}
                    <fieldset className='fieldset'>
                        <label className='label'>Price</label>
                        <input
                            type="number"
                            name='price'
                            required
                            defaultValue={tutorial?.price}
                            className="input w-full"
                            placeholder="Price $" />
                    </fieldset>
                </div>

                {/* Description */}
                <fieldset className='fieldset'>
                    <label className='label'>Description</label>
                    <textarea
                        type=""
                        name='description'
                        required
                        defaultValue={tutorial?.description}
                        className="textarea w-full"
                        placeholder="Description" />
                </fieldset>

                {/* Submit Button */}
                <input
                    className='btn w-full bg-orange-500 text-white'
                    type="submit"
                    value='Update Tutorial' />
            </form>
        </div>
    );
};

export default EditTutorial;