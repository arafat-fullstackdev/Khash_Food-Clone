import React, { useState } from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Product from '../Product/Product.js';
import Corporate from '../Home/Corporate.js';
import Home from '../Home/Home.js';
import Export from '../Home/Export.js';

function Header() {
  // state manage for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //? Function to toggle menu
  const  toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (

<BrowserRouter>

<nav className='bg-white text-grey-900 shadow-lg p-4'>
  <div className='container mx-auto flex justify-between items-center'>
      <Link to="/" className='text-xl font-bold'>My Brand</Link>
       {/* Hamburger Menu */}
      <button 
            className='sm:hidden p-2 rounded-md
            hover:bg-gray-100 focus:outline-none
            focus:ring-2 focus:ring-indigo-500'
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile_menu"
            >
  {isMenuOpen? (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
  )}
      </button>

       {/* Navigation menu */}
      <div 
      id='mobile_menu'
      className={`
          ${isMenuOpen ? 'flex': 'hidden'}
          flex-col w-full mt-4 space-y-2
          sm:flex sm:flex-row sm:space-y-0 
          sm:space-x-8 sm:w-auto sm:mt-0 `}
          >
            <Link to =""
  className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-400 
  rounded-md transition duration-200'
  onClick={()=> setIsMenuOpen(false)}
  >Home</Link>
 < Link to="product"
 className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-400 
  rounded-md transition duration-200'
  
 >Product</Link>
 < Link to="corporate"
 className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-400 
  rounded-md transition duration-200'
  onClick={()=> setIsMenuOpen(false)}
 >Corporate</Link>
 <Link to="export"
 className='py-2 px-4 block text-center sm:text-left hover:bg-indigo-400 
  rounded-md transition duration-200'
  onClick={()=> setIsMenuOpen(false)}
 >Export</Link>

      </div>

  </div>


  
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