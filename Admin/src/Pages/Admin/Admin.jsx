import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Navigate to='/addproduct' />} /> {/* Redirect from '/' to '/addproduct' */}
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/productList' element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;
