
function testimonials() {
    const personnels = [
        { image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png", name: "Pablo Anthony", title: "i&m Ceo", paragraph: "Game individual procrastinating horse first-order territories functional tomorrow will. Nor win-win-win unpack incompetent revision these future-proof deliverables tentative. Gave adoption." },
        { image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png", name: "Pablo Anthony", title: "i&m Ceo", paragraph: "Game individual procrastinating horse first-order territories functional tomorrow will. Nor win-win-win unpack incompetent revision these future-proof deliverables tentative. Gave adoption." },
        { image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png", name: "Pablo Anthony", title: "i&m Ceo", paragraph: "Game individual procrastinating horse first-order territories functional tomorrow will. Nor win-win-win unpack incompetent revision these future-proof deliverables tentative. Gave adoption." }
    ]

    return (
        <div>
            <figure className="max-w-screen-md mx-auto text-center">
                <div className="lg:flex space-x-11 mx-auto">
                    {personnels.map((personnels, index) => (
                        <div key={index} className="text-center mb-4  bg-gray-100 p-4 rounded-xl">
                            <svg className="w-6 h-6 mx-auto mb-3 text-blue-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <blockquote>
                                <p className="text-2xl  italic font-medium text-gray-900 ">{personnels.paragraph}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                <img className="w-6 h-6 rounded-full" src={personnels.image} alt="profile picture" />
                                <div className="flex items-center divide-x-2 rtl:divide-x-reverse ">
                                    <cite className="pe-3 font-medium text-gray-900 ">{personnels.name}</cite>
                                    <cite className="ps-3 text-sm text-gray-500 ">{personnels.title}</cite>
                                </div>
                            </figcaption>
                        </div>

                    ))}

                </div>
            </figure>
        </div>
    )
}

export default testimonials
