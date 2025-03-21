import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          FreshSeal
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><a href="#products" className="text-gray-600 hover:text-gray-800">Products</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>

        {/* Cart Button */}
        <Button><ShoppingCart className="mr-2" size={16}/> Cart</Button>
      </div>
    </header>
  );
};

export default Header;
