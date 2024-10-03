import React, { useState, useEffect } from 'react'; 
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3004/popularInWomen')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPopularproducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load popular products. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      <div className='popular_item'>
        {popularProducts.map((item, i) => (
          <Item 
            key={item._id} // It's better to use a unique id instead of index
            id={item._id} 
            name={item.name}  
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
