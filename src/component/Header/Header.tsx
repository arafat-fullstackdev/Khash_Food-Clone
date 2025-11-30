import React, { useState } from "react";
import { Menu, Search, ShoppingCart, User, ChevronDown } from "lucide-react";

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

        
      </nav>
    </header>
  );
};



export default Header;
