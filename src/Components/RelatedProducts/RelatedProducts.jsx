import {React, useState,useEffect }from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'

const RelatedProducts = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    fetch('http://localhost:3004/relatedProducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load Related products. Please try again later.');
        setLoading(false);
      });
  }, []); 


  return (
    <div className='realtedproducts'>
      <h1>Related products</h1><hr/>
      <div className='relatedproducts-item'>
        {Products.map((item) => {
            return< Item
           
            key={item._id} // Use item.id as the key
            id={item._id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
       
      </div>
    </div>
  )
}

export default RelatedProducts
