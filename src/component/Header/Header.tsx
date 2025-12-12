import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Product from '../Product/Product.js';
import Corporate from '../Home/Corporate.js';
import Home from '../Home/Home.js';
import Export from '../Home/Export.js';

function Header() {
  return (

<BrowserRouter>

<nav className='flex flex-col sm:flex-row sm:justify-start sm:space-x-8 
   p-4 bg-gray-900 text-white shadow-lg'>

  <Link to =""
  className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-600 
  rounded-md transition duration-200'
  >Home</Link>
 < Link to="product"
 className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-600 
  rounded-md transition duration-200'
 >Product</Link>
 < Link to="corporate"
 className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-600 
  rounded-md transition duration-200'
 >Corporate</Link>
 <Link to="export"
 className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-600 
  rounded-md transition duration-200'
 >Export</Link>
</nav>

 <Routes>
  <Route path='' element={<Home/>}/>
   <Route path="/product" element={<Product/>}/>
   <Route path='corporate' element={<Corporate/>}/>
   <Route path='export' element={<Export/>}/>
 </Routes>

</BrowserRouter>  

);
};

export default Header;