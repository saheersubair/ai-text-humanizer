import React from 'react';
import { Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-primary-600" />
              <span className="text-lg font-semibold text-gray-900">HumanizeAI</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Transform robotic AI content into natural, engaging human writing with our state-of-the-art text humanization service.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#converter" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a></li>
              <li><Link to="/payment" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</Link></li>
              <li><Link to="/login" className="text-gray-600 hover:text-primary-600 transition-colors">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary-600 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} HumanizeAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};