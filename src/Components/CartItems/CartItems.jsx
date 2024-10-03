import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

const CartItems = ({cartData}) => {
    const { getTotalCartAmount, allProduct, cartItem, addToCart, removeToCart } = useContext(ShopContext);

   
    const subtotal = Object.keys(cartData).reduce((total, itemId) => {
        if (cartData[itemId] > 0) {
            const product = cartData.find(item => item.id === Number(itemId));
            if (product) {
                total += product.new_price * cartData[itemId];
            }
        }
        return total;
    }, 0);
//     console.log(cartData);
// let subtotal = 0;

// cartData?.forEach((cartItem) => {
//     cartItem?.product?.forEach((productItem) => {
//         subtotal += productItem.new_price;
//     });
// });

// console.log("Subtotal:", subtotal);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartData?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartData?.map((e) => {
                    if ( e.product?.length > 0) {
                        return (
                            <div className='cartitems-format' key={e.id}>
                                <img src={ e.product.image} alt={ e.product.name} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{e.product.available}</button>
                                <p>${(e.product.new_price).toFixed(2)}</p>
                                {<img src={remove_icon} alt="Remove" onClick={() => removeToCart(e.product._id)} className='cartitems-remove-icon' /> }
                            </div>
                        );
                    }
                    return null; // Return null for items not in the cart
                })
            )}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${subtotal.toFixed(2)}</h3>
                    </div>
                </div>
                <button className='btn'>
                    Proceed To Pay
                </button>
            </div>
        </div>
    );
};

export default CartItems;
