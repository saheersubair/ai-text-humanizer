import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Humanize Your AI Text
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform robotic AI content into natural, engaging human writing in seconds
        </motion.p>
        
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#converter" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md shadow-md hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105"
          >
            Try it now
          </a>
          <Link 
            to="/signup" 
            className="inline-flex items-center justify-center ml-4 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
};