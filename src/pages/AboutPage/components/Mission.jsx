import React from 'react';

const cardData = [
    {
        id: 1,
        title: "History",
        subTitle: 'The genesis of connecting learners and expert tutors globally.',
        text: 'Sed posuere consectetur est at lobortis. Morbi leo risus porta. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.',
    },
    {
        id: 2,
        title: "Mission",
        subTitle: 'Empowering everyone to achieve fluency through personalized, accessible teaching.',
        text: 'Nunc viverra est ullamcorper ult rices posuere cubilia tellus. Nullam aliquet, lacus nec pede sed tortor. Phasellus vestibulum. Nulla lobortis volutpat. Praesent faucibus. Sed non sapien. Curabitur condimentum auctor sapien. Nullam aliquet, lacus nec pede sed tortor. Phasellus vestibulum. Nulla lobortis.',
    },
    {
        id: 3,
        title: "Philosophy",
        subTitle: 'Believe in effective learning through cultural immersion and dedicated one-on-one sessions.',
        text: 'Curabitur nec libero. Suspendisse justo sem, rutrum vel, varius. Aliquam ut orci pellentesque adipiscing justo quis ipsum. Nam nunc iaculis quis, ultricies massa. Mauris et arcu. In hac habitasse platea dictumst. Vestibulum ullamcorper id, congue risus. Vivamus sed enim. Mauris pretium, diam sodales turpis.',
    },
    // {
    //     id: 1,
    //     title: "History",
    //     subTitle: 'Why I have learned MERN stack?',
    //     text: 'I was exploring Programming so I have learned about Web development. I have learned MERN stack'
    // },
    // {
    //     id: 2,
    //     title: "Mission",
    //     subTitle: 'Why I have learned MERN stack?',
    //     text: 'I was exploring Programming so I have learned about Web development. I have learned MERN stack'
    // },
    // {
    //     id: 3,
    //     title: "Philosophy",
    //     subTitle: 'Why I have learned MERN stack?',
    //     text: 'I was exploring Programming so I have learned about Web development. I have learned MERN stack'
    // },
]

const Mission = () => {
    return (
        <section className="py-14 px-2">
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    cardData?.map((card) => 
                        <div className="text-gray-500">
                            <h3 className="text-3xl font-semibold">
                                {card?.title}
                            </h3>
                            <h5 className="my-3 text-lg ">
                                {card?.subTitle}
                            </h5>
                            <p className="">
                                {card?.text}
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Mission;