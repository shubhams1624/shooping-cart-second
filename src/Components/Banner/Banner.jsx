import React from 'react';
import './Banner.css'; // Ensure the path to Banner.css is correct
import hm from '../Assets/hm.png'; // Ensure the path to the image is correct

const Banner = () => {
  return (
    <div className='banner'>
      <img src={hm} alt="Banner" />
    </div>
  );
};

export default Banner;
