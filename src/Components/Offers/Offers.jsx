import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="container">
      <div className='offers col-12'>
      <div className="row">
      <div className='offers-left col-6'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right col-6'>
        <img src={exclusive_image} alt="" />
      </div>
      </div>

    </div>
    </div>
  )
}

export default Offers
