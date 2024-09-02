import HeroSection from "../landing/Hero"
import Aboutus from "../landing/aboutus"
import Services from "../landing/services"
import Contactus from "../landing/contactus"
import Whyus from "../landing/whyus"
import Testimonials from "../landing/testimonials"

function landing() {
  return (
    <div>
      <HeroSection/>
      <Aboutus/>
      <Services/>
      <Whyus/>
      <Contactus/>
      <Testimonials/>
    </div>
  )
}

export default landing
