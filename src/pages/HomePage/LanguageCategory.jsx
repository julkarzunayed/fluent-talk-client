import React, { useEffect, useState } from 'react';
import LanguageCategoryCard from './LanguageCategoryCard';

const LanguageCategory = () => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch(`./data/language_data.json`)
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);
    const filteredLanguages = languages?.filter(language => language.id < 10 )
    console.log(filteredLanguages)
    return (
        <div className='p-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
                {
                    filteredLanguages?.map(language =>   <LanguageCategoryCard 
                        language={language}
                        />  )
                }
            </div>
        </div>
    );
};

export default LanguageCategory;