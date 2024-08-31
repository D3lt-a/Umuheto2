import Image from '../../assets/images/code.png'

function aboutus() {

  return (
    <div>
        
<figure className="relative max-w-sm ">
  <a href="#">
    <img className="rounded-lg" src={Image} alt="image description" />
  </a>
  <figcaption className="absolute px-4 text-lg text-white bottom-6">
        <h3 className="font-bold">5</h3>
      <p>Pus years of Experience</p>
  </figcaption>
</figure>

    </div>
  )
}

export default aboutus
