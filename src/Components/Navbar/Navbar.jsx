import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shops");
    const { cartItem , getTotalCartItem } = useContext(ShopContext);
     const totalItemsInCart = Object.values(cartItem).reduce((total, count) => total + count, 0);

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='Logo' />
                <p>Shopper</p>
            </div>
            <div className='nav-menu'>
            <ul>
                <li onClick={() => setMenu("Shops")}>
                    <Link to='/Shops'>Shops</Link>
                    {menu === "Shops" && <hr />}
                </li>
                <li onClick={() => setMenu("Mens")}>
                    <Link to='/Mens'>Mens</Link>
                    {menu === "Mens" && <hr />}
                </li>
                <li onClick={() => setMenu("Womens")}>
                    <Link to='/Womens'>Womens</Link>
                    {menu === "Womens" && <hr />}
                </li>
                <li onClick={() => setMenu("Kids")}>
                    <Link to='/Kids'>Kids</Link>
                    {menu === "Kids" && <hr />}
                </li>
            </ul>
            </div>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token') ? (
                    <button onClick={handleLogout}>LogOut</button>
                ) : (
                    <Link to='/login'>
                        <button className='login-button'>Login</button>
                    </Link>
                )}
                <Link to='/Cart'>
                    <img src={cart_icon} alt='Cart' />
                </Link>
                <div className='nav-cart-count'>{getTotalCartItem}</div>
            </div>
        </div>
    );
};

export default Navbar;
