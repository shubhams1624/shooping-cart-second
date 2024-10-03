import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
  console.log(props); 
  
  return (
    <div className='item'>
        <Link  to={`/Product/${props.id}`}><img onClick={window.scroll(0,0)}  src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                 New Price : 
                ${props.new_price}
            </div>
            <div className='item-price-old'>
                Old Price : 
                ${props.old_price}
            </div>
        </div>
      
    </div>
  );
};

export default Item;
