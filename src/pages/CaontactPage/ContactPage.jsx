import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

// Demo Contact Information (Replace these values)
const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        detail: "julkarnainzunayed@gmail.com",
        link: "julkarnainzunayed@gmail.com"
    },
    {
        icon: Phone,
        title: "Call Us",
        detail: "+880 1747782169",
        link: "tel:+8801747782169"
    },
    {
        icon: MapPin,
        title: "Office Location",
        detail: "123 Language Lane, Global City, GC 90210",
        link: "#"
    },
];

const ContactPage = () => {
    // State for managing form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // In a real application, you would send this data to an API endpoint here.
        console.log("Contact Form Submitted:", formData);

        // Display success message and clear form (simulation)
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Hide success message after a few seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    // Reusable input component for clean form structure
    const InputField = ({ label, name, type = 'text', icon: Icon, required = true }) => (
        <div className="mb-6">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type={type}
                    name={name}
                    id={name}
                    required={required}
                    value={formData[name]}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder={`Enter your ${label.toLowerCase()}`}
                />
            </div>
        </div>
    );

    return (
        <div className="flex justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="w-full max-w-[1500px]">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        We're here to help! Whether you're a tutor, student, or just curious, we look forward to hearing from you.
                    </p>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Information Panel (Left Column) */}
                    <div className="lg:col-span-1 p-8 bg-primary rounded-xl shadow-xl h-full">
                        <h2 className="text-3xl font-bold text-white mb-6">Contact Details</h2>
                        <p className="text-indigo-200 mb-8">
                            Reach out to our support team using the information below. We aim to respond within 24 hours.
                        </p>

                        <div className="space-y-8">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <item.icon className="flex-shrink-0 w-7 h-7 text-indigo-200 mr-4 mt-1" />
                                    <div>
                                        <p className="text-lg font-semibold text-white">{item.title}</p>
                                        <a
                                            href={item.link}
                                            className="text-indigo-100 hover:text-white transition duration-200 underline-offset-4 hover:underline"
                                        >
                                            {item.detail}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div className="lg:col-span-2 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                        {isSubmitted && (
                            <div role="alert" className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline ml-2">Your message has been received. We'll be in touch soon.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>

                            <InputField label="Full Name" name="name" icon={User} />

                            <InputField label="Email Address" name="email" type="email" icon={Mail} />

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                                        placeholder="Type your question or message here..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-opacity-50 transition transform hover:scale-[1.01] duration-300"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
