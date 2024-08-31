import Image from '../../assets/images/placeholder.png'

function aboutus() {

    return (
        <div className='p-4 '>
            <div className='lg:flex lg:space-x-40 justify-center p-6'>
                <div className="relative max-w-sm ">
                    <a href="#">
                        <img className="rounded-lg" src={Image} alt="image description" />
                    </a>
                </div>
                <div className="sm:max-w-sm w-1/2 text-left">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-950">Your trusted partner in the world
                            of custom software development, training, and IT services.</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We are a team of passionate technologists, driven by a relentless pursuit of innovation and a deep understanding of our clients’ needs.</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">we believe that technology is the foundation upon which businesses and individuals can thrive in the digital age. That’s why we’ve dedicated ourselves to crafting bespoke solutions that not only meet your unique requirements but also empower you to achieve your goals.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg -start">
                        Learn more
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default aboutus
