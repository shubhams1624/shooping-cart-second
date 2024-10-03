import React from 'react';
import './Breadcrums.css';
import arrw_icon from '../Assets/arrw_icon.png';

const Breadcrums = (props) => {
    const { product } = props;

    // Check if product is undefined or missing properties before rendering
    const category = product?.category || 'Default Category'; // Optional chaining and default value
    const namee = product?.namee || 'Default Product Name';  // Optional chaining and default value

    return (
        <div className='breadcrums'>
            HOME <img src={arrw_icon} alt="arrow icon" /> SHOP <img src={arrw_icon} alt="arrow icon" /> {category} <img src={arrw_icon} alt="arrow icon" /> {namee}
        </div>
    );
};

export default Breadcrums;
