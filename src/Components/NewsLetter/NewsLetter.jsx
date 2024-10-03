import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSISVE OFFER IN YOUR EMAIL</h1>
        <p>subsscribe our newsletter to keep updated</p>
        <div>
            <input type='email' placeholder='your emailid'>
            </input>
            <button>subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
