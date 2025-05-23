import React from 'react';
import { Brain, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary-600" />
          <span className="text-xl font-semibold text-gray-900">HumanizeAI</span>
        </Link>
        
        <div className="md:hidden">
          <button className="p-2">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#converter" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
            Features
          </a>
          <Link to="/payment" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
            Contact
          </Link>
          <Link to="/login" className="px-4 py-2 rounded-md text-primary-600 font-medium hover:bg-primary-50 transition-colors duration-200">
            Log in
          </Link>
          <Link to="/signup" className="px-4 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-200">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
};