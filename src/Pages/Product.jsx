import React, { useContext, useEffect, useFetch, useState } from 'react';
// import { ShopContext } from '../Context/ShopContext/ShopContext';
import { useParams } from 'react-router-dom';
// import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  // const { allProduct } = useContext(ShopContext); // Adjusted this line
  const { ProductID } = useParams();
  const [productDetail, setProductDetail] = useState({});
  // console.log(allProduct, 'hfddhfddfkh')
    // const product = allProduct.find((e) => e._id === Number(ProductID));
  

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const resp = await fetch(`http://localhost:3004/product/${ProductID}`);
        const data = await resp.json();
        setProductDetail(data)
        
      }
      catch(error) {
        console.log(error, 'error at Product.jsx')
      }

    }

    getProductDetail();
   
  }, [ProductID])


  // Log the product to verify

  return (
    <div>
      {/* <Breadcrums product={productDetail} /> */}
      <ProductDisplay product={productDetail} />
      <RelatedProducts/>
    </div>
  );
};

export default Product;
