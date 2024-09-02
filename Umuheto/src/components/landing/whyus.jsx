
function whyus() {
    const reasons = [
        {icons: 'src/assets/new_icons/eye.png', title: 'Unparalleled Expertise', description: 'Our team of seasoned developers and trainers bring a wealth of experience to the table, ensuring that your project is in the hands of true professionals.'},
        {icons: 'src/assets/new_icons/lamp.png', title: 'Tailored Solutions', description: 'We understand that every client is unique, which is why we take a personalized approach to every engagement, crafting solutions that perfectly fit your needs.'},
        {icons: 'src/assets/new_icons/target.png', title: 'Commitment to Excellence', description: 'Quality is our top priority, and we strive to exceed your expectations at every step of the way, delivering exceptional results that stand the test of time.'},
        {icons: 'src/assets/new_icons/lamp.png', title: 'Collaborative Approach', description: 'We believe in fostering strong partnerships with our clients, working closely with you to understand your vision and bring it to life.'}

    ]

  return (
    <div className="">
        <h1 className="text-2xl lg:text-5xl text-blue-950 tracking-wide text-center font-bold">Discover Why We’re the Top Choice for Tech Excellence</h1>   
        <div>
                <div className="lg:w-2/2  lg:flex items-center mx-auto sm:grid-cols-2 p-11 gap-10">
                    {reasons.map((reasons, index) => (
                        <div key={index} className="text-center ">

                            <img src={reasons.icons} alt="" className="w-24 mx-auto rounded-xl" />
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">{reasons.title}</h3>
                                <p className="text-blue-950">{reasons.description}</p>
                            </div>
                        </div>
                    ))}
                </div>            
        </div>   
    </div>
  )
}

export default whyus
