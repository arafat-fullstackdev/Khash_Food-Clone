import React, { useState } from "react";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Define Main Navigation
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Product", href: "#" },
    { name: "Corporate", href: "#" },
    { name: "Export", href: "#" },
    { name: "Outlets", href: "#" },
    { name: "Halal Investment", href: "#" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold text-green-700 font-serif">
            <span className="text-sm">Khash </span>Food
            <span className="text-green 700 ml-1">
              <svg
                className="w-4 h-4 inline-block align-top"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  className="text-green-500"
                />
              </svg>
            </span>
          </div>
        </div>
     {/* /? Desktop */}
     <div className="hidden lg:flex items-center space-x-6">
      {navLinks.map((link) =>(
        <a 
        key={link.name}
        href={link.href}
        className="text-grey-600 hover:text-700 transition duration-150 font-medium text-sm">
      {link.name}
        </a>
      ))}

     </div>

     {/* mobile menu */} 
     <button 
     onClick={() => setIsMenuOpen(!isMenuOpen)}
     className="lg:hidden text-gray-600 hover:text-green-700 p-2 rounded-full hover:bg-gray-100
     aria-label=Toggle Menu"
     >
     <Menu className="w-6 h-6"/>
     </button>
        
      </nav>

      {/* conditionally renderd */} 

      <div className="flex items-center space-x-4">

      
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200 py-2">
          {navLinks.map((link) => (
            <a
             key={link.name}

            href={link.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-700"
            onClick={() => setIsMenuOpen(false)}
            >
         {link.name}
         </a>
         ))}

        </div>
        
      )}
      </div>
    </header>
  );
};



export default Header;
