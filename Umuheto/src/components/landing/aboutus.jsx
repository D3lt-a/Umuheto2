import Image from '../../assets/images/placeholder.png'

function aboutus() {

    return (
        <div className='p-4 lg:flex lg:space-x-40'>

            <div className="relative max-w-sm ">
                <a href="#">
                    <img className="rounded-lg" src={Image} alt="image description" />
                </a>
            </div>
            

<div className="max-w-sm p-6 rounded-lg">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500">Your trusted partner in the world
        of custom software development, training, and IT services.</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We are a team of passionate technologists, driven by a relentless pursuit of innovation and a deep understanding of our clients’ needs.</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">we believe that technology is the foundation upon which businesses and individuals can thrive in the digital age. That’s why we’ve dedicated ourselves to crafting bespoke solutions that not only meet your unique requirements but also empower you to achieve your goals.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

        </div>
    )
}

export default aboutus
