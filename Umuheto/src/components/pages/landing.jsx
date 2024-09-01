import HeroSection from "../landing/Hero"
import Aboutus from "../landing/aboutus"
import Services from "../landing/services"
import Contactus from "../landing/contactus"

function landing() {
  return (
    <div>
      <HeroSection/>
      <Aboutus/>
      <Services/>
      <Contactus/>
    </div>
  )
}

export default landing
