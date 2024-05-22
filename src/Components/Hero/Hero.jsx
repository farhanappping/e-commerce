import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_img from '../Assets/hero_image.png'
import hero_men_img from '../Assets/menstyles.png'


const Hero = () => {
  return (
     <div className='hero col-12'>
   <div className="container">
    <div className="col-12">
    <div className="row justify-content-center">
     <div className="hero-left col-lg-8 col-md-6 col-6" style={{margin:'50px 0'}}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collection</p>
            <p>for everyone</p>
        </div>
        <a href="#newCollection" style={{textDecoration:'none'}}>
        <button className="col-lg-6 col-md-10 col-11 hero-latest-btn">
            <div>
              
              Latest Collection
              
            </div>
            <img src={arrow_icon} alt="" />
        </button>
        </a>
      </div>
      <div className="hero-right col-lg-4 col-md-6 col-6">
        <img src={hero_men_img} alt="" />
      </div>
     </div>
    </div>
    </div>
   </div>
  )
}

export default Hero
