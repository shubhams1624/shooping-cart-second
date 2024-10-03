import React, { createContext, useContext, useState, useEffect } from "react"; // Correct path
import CartItems from "../../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

const getdefaultcart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};
const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getdefaultcart());
    const [allProduct, setAllProduct] = useState([]); // Corrected initialization to empty array
    useEffect(() => {
        // Fetching products
        fetch('http://localhost:3004/products') // Ensure correct endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Make sure the data is an array
                if (Array.isArray(data)) {
                    setAllProduct(data);
                } else {
                    console.error("Received non-array data:", data);
                }
            })
            .catch((error) => console.error('Error fetching products:', error));
    
        // Fetching cart data if token exists
        const token = localStorage.getItem('auth-token');
        if (token) {
            fetch('http://localhost:3004/getCart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({}),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then((data) => {
                setCartItem(data); // Assuming data is already in the desired format
            })
            .catch((error) => console.error('Error fetching cart data:', error));
        }
    }, []);
    

    const addToCart = (itemId) => {
        // Update local cart state
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    
        // Get user from local storage
        const user = JSON.parse(localStorage.getItem('user')); // Parse user data from local storage
        const userId = user ? user._id : null; // Safely extract user ID
    
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:3004/addToCart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json', // Capitalized 'Content-Type' for consistency
                },
                body: JSON.stringify({ itemId, userId }), // Correctly structure the request body
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data); // Log server response
            })
            .catch((error) => {
                console.error('Error adding item to cart:', error); // Handle any errors
            });
        }
    };
    

    const removeToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
        }));

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:3004/removeToCart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItem = () => {
        return Object.values(cartItem).reduce((total, count) => total + count, 0);
    };

    const ContextValue = { getTotalCartAmount, allProduct, cartItem, addToCart, removeToCart, getTotalCartItem };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
