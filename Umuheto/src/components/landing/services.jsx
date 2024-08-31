
function services() {
    const services = [
        { icon: 'src//assets//icones//css.png', title: 'Custom Software Solutions', descritpion: "Creating tailored software solutions that meet specific client needs, whether it's for web, mobile, or desktop platforms." },
        { icon: 'src//assets//icones//web.png', title: 'Web and Mobile Application Development', descritpion: "Designing and developing responsive and feature-rich web and mobile applications for various platforms like iOS, Android, and web browsers." },
        { icon: 'src//assets//icones//web.png', title: 'Software Strategy Consulting', descritpion: "Providing expert advice on software development strategies, technology stack selection, project management, and software architecture design." },
        { icon: 'src//assets//icones//uiux.png', title: 'User Interface and Experience Design', descritpion: " Designing user interfaces and experiences that are intuitive, engaging, and meet the end-user's needs, ensuring a seamless interaction with the software." },
        { icon: 'src//assets//icones//square.png', title: 'Cloud Computing and DevOps Services', descritpion: "Offering cloud computing solutions, including cloud migration, management, and DevOps services to streamline and automate software development and deployment processes." },
        { icon: 'src//assets//icones//square.png', title: 'Software Maintenance and Technical Support', descritpion: "Elevate your digital presence with stunning user interface and user experience design. We focus on creating visually appealing and intuitive interfaces to maximize user engagement." }
    ]

    return (
        <div className="bg-blue-950 text-white p-4">
            <div>
                <div>
                    <h1 className="text-2xl lg:text-5xl tracking-wide  text-center font-bold">Dive Into Our Suite of Developers Solutions Today!</h1>
                </div>
                <div>
                    {services.map((services, index) => (
                        <div key={index}>

                            <img src={services.icon} alt="" className="w-11 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{services.title}</h3>
                            <p className="text-white">{services.descritpion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default services
