import React from 'react'
import './Offer.css'
import discount from '../Assets/discount.jpeg'

const Offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>EXCLUSIVE </h1>
            <h1>OFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>check now</button>

        </div>
        <div className='offers-righ'>
            <img src={discount} alt="" />

        </div>
      
    </div>
  )
}

export default Offer
