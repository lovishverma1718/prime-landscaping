import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showArrow?: boolean;
  as?: 'button' | 'span';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  showArrow = false,
  as = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/55 cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-white rounded-full px-8 py-3.5 shadow-premium hover:shadow-premium-lg hover:bg-brand-primaryDark',
    secondary: 'glass-effect text-brand-primary hover:bg-white/80 rounded-full px-8 py-3.5 border border-brand-border/40 shadow-sm',
    ghost: 'text-brand-primary bg-transparent py-2 px-4 hover:opacity-85 gap-1 group',
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      {(showArrow || variant === 'ghost') && (
        <ArrowRight 
          className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
            variant === 'ghost' ? 'group-hover:translate-x-1' : ''
          }`} 
        />
      )}
    </>
  );

  if (variant === 'ghost') {
    if (as === 'span') {
      return (
        <span
          onClick={onClick}
          className={`${baseStyles} ${variants.ghost} ${className}`}
        >
          {buttonContent}
        </span>
      );
    }
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variants.ghost} ${className}`}
      >
        {buttonContent}
      </button>
    );
  }

  const Tag = as === 'span' ? motion.span : motion.button;
  const tagProps = as === 'span' ? {} : { type };

  return (
    <Tag
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...tagProps}
    >
      {buttonContent}
    </Tag>
  );
};
export default Button;
