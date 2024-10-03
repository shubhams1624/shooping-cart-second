import React, { useState, useEffect, useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import { useParams } from 'react-router-dom';

const ProductDisplay = ({ product }) => {
  const {addToCart} = useContext(ShopContext)
return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className="productdisplay-img-list">
          {/* Display a list of product images (if multiple) */}
          {Array(4).fill().map((_, index) => (
            <img key={index} src={product.image} alt={`product-${index}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-img-main' src={product.image} alt={product.namee} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">${product.old_price}</div>
          <div className="productdisplay-right-prices-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem delectus fugit libero perferendis dolorem? Est aliquid quos veritatis inventore sequi expedita magnam. Maiores, dignissimos.</p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-options">
            <div>XXXL</div>
            <div>XXL</div>
            <div>XL</div>
            <div>L</div>
            <div>S</div>
          </div>
        </div>
       {console.log( "here",product)}
        <button onClick={() => addToCart(product._id)} className='btn'>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
