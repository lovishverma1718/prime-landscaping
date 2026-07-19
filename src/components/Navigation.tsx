import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 px-6 md:px-12' 
            : 'py-6 px-6 md:px-12'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Navigation Bar */}
          <div className={`flex items-center justify-between transition-all duration-500 w-full ${
            isScrolled 
              ? 'glass-effect py-3 px-6 rounded-full shadow-premium border border-white/50' 
              : 'bg-transparent py-3 px-4'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center group focus:outline-none">
              <img 
                src="/logo.png?v=2" 
                alt="Prime Landscaping Logo" 
                className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? 'h-[100px]' : 'h-[160px]'
                }`}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none py-1.5 ${
                      isScrolled 
                        ? (isActive ? 'text-brand-primary' : 'text-brand-textSecondary hover:text-brand-primary')
                        : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-colors duration-300 ${
                          isScrolled ? 'bg-brand-primaryLight' : 'bg-white'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  as="span" 
                  className={`text-xs uppercase tracking-wider !px-6 !py-2.5 transition-all duration-300 ${
                    isScrolled 
                      ? '!bg-brand-primary !text-white hover:!bg-brand-primaryDark' 
                      : '!bg-white !text-brand-primary hover:!bg-brand-primaryLight hover:!text-white'
                  }`}
                >
                  Request Estimate
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors focus:outline-none ${
                  isScrolled ? 'text-brand-textPrimary hover:text-brand-primary' : 'text-white hover:text-brand-primaryLight'
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-brand-bg/98 backdrop-blur-lg md:hidden flex flex-col pt-32 px-10 pb-12"
          >
            <nav className="flex flex-col gap-6 text-2xl font-light">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-2 ${
                        isActive 
                          ? 'text-brand-primary font-medium' 
                          : 'text-brand-textSecondary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto w-full"
            >
              <Link to="/contact" className="w-full">
                <Button variant="primary" as="span" className="w-full uppercase tracking-wider py-4">
                  Request Estimate
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navigation;
