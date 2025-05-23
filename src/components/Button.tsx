import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  primary = false,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const primaryClasses = 'bg-primary-600 text-white hover:bg-primary-700 shadow-md focus:ring-primary-500';
  const secondaryClasses = 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const classes = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${disabled ? disabledClasses : ''} ${className}`;
  
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
};