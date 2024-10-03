import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import remove from '../../assets/remove.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const productList = async () => {
    try {
      const response = await fetch("http://localhost:3004/products");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  

  const removeProduct = async(id) =>{
    await fetch('http://localhost:3004/removeProduct',{
      method:'POST',
      headers : {
        Accept : 'application/json',
      'Content-Type' : 'application/json',
      },
      body:JSON.stringify({id:id}),
    })
    await productList();
  }

  return (
    <div className='listproduct'>
      <h1>All Product List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr />
        {allProducts?.map((product, index) => (
          <div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={removeProduct(product.id)}  className='listproduct-remove-icon' src={remove} alt="Remove" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
