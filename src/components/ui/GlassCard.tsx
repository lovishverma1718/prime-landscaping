import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  borderRadius = 'md',
}) => {
  const radiusClasses = {
    sm: 'rounded-card-sm',
    md: 'rounded-card-md',
    lg: 'rounded-card-lg',
    xl: 'rounded-card-xl',
  };

  const cardContent = (
    <div 
      onClick={onClick}
      className={`glass-effect shadow-premium p-6 md:p-8 border border-white/40 ${radiusClasses[borderRadius]} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );

  if (hoverEffect) {
    return (
      <motion.div
        whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(48, 72, 48, 0.12)' }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};
export default GlassCard;
