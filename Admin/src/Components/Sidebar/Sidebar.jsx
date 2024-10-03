import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import addproduct from '../../assets/addproduct.png';
import listprocust from '../../assets/listprocust.png'; // Ensure this path is correct

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: "none" }}>
        <div className='sidebar-item'>
          <img src={addproduct} alt="Add Product" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/productList' style={{ textDecoration: "none" }}>
        <div className='sidebar-item'>
          <img src={listprocust} alt="Product List" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
