import React from 'react'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'; 
import Footer from './Components/Footer/Footer'
import men_banner3 from './Components/Assets/men_banner3.jpg'
import women_banner from './Components/Assets/women_banner.png'
import kids_banner2 from './Components/Assets/kids_banner2.avif'
import  Loginsignup from './Pages/Loginsignup'
import ShopContextProvider from './Context/ShopContext/ShopContext';
function App() {
  return (
   <ShopContextProvider>

    <div >
       <BrowserRouter>
       <Navbar></Navbar>

          <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Shops' element={<Shop />} />
          <Route path='Mens' element={<ShopCategory banner={men_banner3} category="men" />} />
          <Route path='Womens' element={<ShopCategory banner={women_banner} category="women" />} />
           <Route path='Kids' element={<ShopCategory banner={kids_banner2} category="kids" />} />
           <Route path='/Product/:ProductID' element={<Product />} />

              <Route path='/Cart' element={<Cart/>}></Route>
              <Route path='login' element={<Loginsignup/>}></Route>
          </Routes>
          <Footer/>
              

       </BrowserRouter>
      
    </div>
    </ShopContextProvider>
  );
}

export default App;
