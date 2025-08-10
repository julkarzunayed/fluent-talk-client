import React, { useEffect, useState } from 'react';
import LanguageCategoryCard from './LanguageCategoryCard';

const LanguageCategory = () => {
    const [languages, setLanguages] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch(`./data/language_data.json`)
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);
    const filteredLanguages = languages?.filter(language => language.id < (showAll ? languages?.length : 10))
    return (
        <div className='max-w-[1500px] mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {
                    filteredLanguages?.map(language => <LanguageCategoryCard
                        language={language}
                    />)
                }
            </div>
            <button
                onClick={() => setShowAll(!showAll)}
                className='mt-5 ml-2 font-bold'>
                - <span className="underline ">
                    Show {showAll ? 'Less' : 'All'}
                </span>
            </button>
        </div>
    );
};

export default LanguageCategory;