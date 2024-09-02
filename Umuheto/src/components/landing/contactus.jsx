
function contactus() {
    const sectors = [
        { name: 'Healthcare' },
        { name: 'Finance' },
        { name: 'E-commerce' },
        { name: 'Manufacturing' },
        { name: 'Education' },
        { name: 'Retail' },
        { name: 'Education' },
        { name: 'Technologies' },
        { name: 'And Many more' },
    ]

    return (

        <div className="mt-4 p-4"> 
            <div className="max-w-6xl bg-blue-950 rounded-lg p-11 mx-auto flex flex-col lg:flex-row  items-start lg:items-center">
                <div className="lg:w-1/3 ml-5 mb-8 lg:mb-0">
                    <h1 className="text-2xl font-bold text-orange-500 mb-4">
                    Got  questions about 
                    your specific industry needs? 
                    </h1>

                    <p className="text-white mb-6">
                    Our team specializes in various sectors and is here to help you
                    </p>
                    <a href="#" className="inline-flex items-center px-7 py-2 text-sm font-medium text-center text-white bg-orange-500   rounded-lg -start">
                        Contact Us
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>
                    </a>

                </div>

                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {sectors.map((sectors, index) => (
                        <div key={index} className=" p-4 bg-blue-900 rounded-lg text-center">
                            <h1 className="text-white text-2xl">{sectors.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default contactus
