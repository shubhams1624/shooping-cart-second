import React from 'react'
import './Footer.css'
// import fi from '../Assets/logo.png'
import insta from '../Assets/phone.png'
import what from '../Assets/what.png'
import pin from '../Assets/pin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        {/* <img src={fi} alt="" /> */}
        <p>
            SHOPPER
        </p>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>offices</li>
            <li>Contact</li>
        </ul>
     
      <div className='footer-socail-icon'>
        <div className='footer-icons-container'>
            <img src={what} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={insta} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={pin} alt="" />
        </div>
        <div className='footer-copywright'>
            {/* <hr/> */}
            <p>Copywright@2024</p>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer
