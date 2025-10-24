import React from 'react';
import { Clock, DollarSign, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

// Data structure based on the benefits listed in tutor_cta.md
const benefits = [
    {
        icon: Clock,
        title: "Total Flexibility",
        description: "Set your own schedule and teach from anywhere in the world.",
    },
    {
        icon: DollarSign,
        title: "Control Your Rates",
        description: "Determine your own competitive hourly pricing and earnings.",
    },
    {
        icon: Globe,
        title: "Global Community",
        description: "Connect with motivated students across every continent.",
    },
    {
        icon: BookOpen,
        title: "Focus on Teaching",
        description: "We handle the marketing and administration, so you can focus on lessons.",
    },
];

const TutorCTA = () => {


    return (
        <div className="flex justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-[1500px] p-8 lg:p-12 bg-white dark:bg-gray-800 shadow-2xl rounded-xl border-t-4 border-secondary/90">

                {/* Header Content */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                        Ready to Share Your Language with the World?
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Join our global network of passionate and expert tutors and transform lives through education. Our platform provides the technology, flexibility, and worldwide audience you need to build a successful tutoring career on your own terms.
                    </p>
                    <p className="mt-4 text-lg font-medium text-secondary dark:text-indigo-400">
                        We are actively seeking experienced and dedicated individuals who are ready to inspire fluency in others.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
                        Why Tutor with Us?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 bg-indigo-50 dark:bg-gray-700 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                            >
                                <benefit.icon className="w-10 h-10 text-secondary dark:text-indigo-400 mb-4" />
                                <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action - Footer */}
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Take the Next Step
                    </h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        If you're ready to make a significant impact on someone's language journey, we invite you to apply.
                    </p>

                    {/* Primary CTA Button */}
                    <Link
                        to={''}
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-secborder-secondary/90 focus:ring-opacity-50 transition transform hover:scale-105 duration-300"
                    >
                        Apply to Become a Tutor Now
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TutorCTA;
