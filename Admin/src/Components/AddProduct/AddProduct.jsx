import React, { useState } from 'react';
import './AddProduct.css';
import upload from '../../assets/upload.png';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetail, setProductDetail] = useState({
    name: "",
    category: "",
    old_price: "",
    new_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    const { name, category, old_price, new_price } = productDetail;
  
    const formData = new FormData();
    formData.append('product', image);
    formData.append('name', name);
    formData.append('category', category);
    formData.append('old_price', old_price);
    formData.append('new_price', new_price);
  
    try {
      const uploadResponse = await fetch('http://localhost:3004/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
  
      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        console.error("Upload Error:", errorData); // Log error details
        throw new Error(errorData.message || 'Upload failed');
      }
  
      const responseData = await uploadResponse.json();
  
      if (responseData.success) {
        const product = { ...productDetail, image: responseData.image_url };
  
        const addProductResponse = await fetch('http://localhost:3004/addProduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
  
        if (!addProductResponse.ok) {
          const addProductErrorData = await addProductResponse.json();
          console.error("Add Product Error:", addProductErrorData); // Log error details
          throw new Error(addProductErrorData.message || 'Failed to add product');
        }
  
        const addProductData = await addProductResponse.json();
        alert(addProductData.success ? "Product added successfully" : "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred: " + error.message); // Show specific error message
    }
  };
  
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetail.name}
          onChange={changeHandler}
          type='text'
          name='name'
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Old Price</p>
          <input
            value={productDetail.old_price}
            onChange={changeHandler}
            type='text'
            name='old_price'
            placeholder='Type here'
          />
        </div>

        <div className="addproduct-itemfield">
          <p>New Price</p>
          <input
            value={productDetail.new_price}
            onChange={changeHandler}
            type='text'
            name='new_price'
            placeholder='Type here'
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Category</p>
        <select
          value={productDetail.category}
          onChange={changeHandler}
          name='category'
          className='add-product-selecter'
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor='file-input'>
          <img src={image ? URL.createObjectURL(image) : upload} alt="Upload" className='addproduct-thumbnail-img' />
        </label>
        <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
      </div>

      <button onClick={addProduct} className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;
