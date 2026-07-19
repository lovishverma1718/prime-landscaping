import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  accentWords?: string[];
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  accentWords = [],
  centered = false,
  className = '',
}) => {
  // Function to render title with accent words formatted in Instrument Serif
  const renderTitle = () => {
    if (accentWords.length === 0) return title;

    const words = title.split(' ');
    return words.map((word, index) => {
      // Strip common punctuation for matching
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
      const isAccent = accentWords.some(acc => acc.toLowerCase() === cleanWord);

      return (
        <React.Fragment key={index}>
          <span className={isAccent ? 'font-serif italic font-normal text-brand-primaryLight' : ''}>
            {word}
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-primaryLight mb-3 border border-brand-border/60 rounded-full px-3 py-1 bg-brand-surface/40"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-textPrimary leading-tight"
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-brand-textSecondary font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
export default SectionHeading;
