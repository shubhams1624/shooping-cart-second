import React, { useState, useEffect } from 'react'; 
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3004/newCollections')
      .then((response) => response.json())
      .then((data) => {
        setNew_collection(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching new collections:', error);
        setError('Failed to load collections. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className='error'>{error}</p>
      ) : (
        <div className='collections'>
          {new_collection.map((item) => (
            <Item
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
               new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewCollections;
