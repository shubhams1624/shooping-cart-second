import React, { useEffect, useState } from 'react';
import CartItems from '../Components/CartItems/CartItems';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  // Retrieve user information from localStorage
  let user = JSON.parse(localStorage.getItem('user'));
  let userId = user?._id;

  console.log("User:", user); // Check if user data is correctly retrieved
  console.log("UserId:", userId); // Check if userId is available

  // Function to fetch cart data
  const fetchCart = async  () => {
    console.log("Fetching cart data...");

     let response = await fetch('http://localhost:3004/getCart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ "userId": userId }),
    })
    
    
    // const responseData = await response.json();
    
    // const newData = JSON.stringify(responseData);
    console.log(response)


    
  };

  // Call fetchCart inside useEffect to avoid calling it on every render
  useEffect(() => {
    if (userId) {
      console.log("userId found, calling fetchCart...");
      fetchCart();
    } else {
      console.log("userId not found, not fetching cart data.");
    }
  }, []); // Dependency on userId ensures fetch is called when userId changes

  return (
    <div>
      <CartItems cartData={cartData} />
    </div>
  );
};

export default Cart;
