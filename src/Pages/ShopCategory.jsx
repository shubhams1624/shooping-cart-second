import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './CSS/ShopCategory.css';
// import down_arrow from '../Components/Assets/down_arrow.png';
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(''); // State for error handling
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  

  useEffect(() => {
    fetch(`http://localhost:3004/productspag?page=${currentPage}&limit=10`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data); // Set fetched data to products state
        setLoading(false); // Set loading to false after data is fetched
        setTotalPages(data.totalPages)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load products. Please try again later.'); // Set error message
        setLoading(false); // Set loading to false if there is an error
      });
  }, [currentPage]);

  const handleNext = () => {
   setCurrentPage(currentPage => currentPage + 1);
  }

  const handlePrevious = () => {
   setCurrentPage(currentPage => currentPage - 1);
   }

  

  return (
    <div className='shop-category'>
      {props.banner && <img className='img' src={props.banner} alt="Category Banner" />}
      
      <div className='shopcategory-indexsort'>
        <h2><span>Showing {products.length} </span> products</h2>
        <div className='shopcategory-sort'>
          {/* <img src={down_arrow} alt="Sort" /> */}
        </div>
      </div>

      <div className="shopcategory-product">
        {loading ? (
          <p>Loading products...</p> // Loading message
        ) : error ? (
          <p className='error'>{error}</p> // Display error message
        ) : 
          products.map((item) =>  {
            
            // if (props.category === item.category) {
              return (
                <Item
                  key={item._id} // Use unique id as key
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } 
           //if category does not match
)
        }
         
      </div>
       <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage===1}>Prev</button>
        {
          new Array(totalPages).fill(0).map((index) => {
            return  <button onClick={() => setCurrentPage(index + 1)} key={index}>{index + 1}</button>
          })
        }
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
       </div>
     

    </div>
  );
};

export default ShopCategory;
