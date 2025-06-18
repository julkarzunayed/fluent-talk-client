import React, { useEffect, useState } from 'react';
import useAuth from '../../hokes/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddTutorial = () => {
    const { dbUser } = useAuth();
    const [languages, setLanguages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`./data/language_data.json`)
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);

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

        const tutorialInfo = {
            tutorName: dbUser?.name,
            tutorEmail: dbUser?.email,
            // tutorId: dbUser?._id,
            tutorImage: dbUser?.photo_URL,
            language,
            language_alpha2Code: language_alpha2Code?.alpha2Code,
            price,
            description
        }
        // console.log(tutorialInfo);
        axios.post(`http://localhost:3000/tutorial`, tutorialInfo)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Created Your tutorial!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myAddedTutorials')
                }
            }).catch(err => console.log(err))

    }
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-5xl">Add a Tutorial</h1>
            <p className="text-center my-5">Add a Tutorial and some clean money</p>
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
                            defaultValue='Select a Language'>
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
                        className="textarea w-full"
                        placeholder="Description" />
                </fieldset>

                {/* Submit Button */}
                <input
                    className='btn w-full bg-orange-500 text-white'
                    type="submit"
                    role='button'
                    value='Add Tutorial' />
            </form>
        </div>
    );
};

export default AddTutorial;