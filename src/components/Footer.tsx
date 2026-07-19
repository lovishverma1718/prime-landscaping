import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border/60 pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
          {/* Logo & Brief Description */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center w-fit focus:outline-none">
              <img 
                src="/logo.png" 
                alt="Prime Landscaping Logo" 
                className="h-[200px] w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-brand-textMuted font-light leading-relaxed mt-2">
              Premium residential landscaping and lawn care crafted with precision and long-term care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-primaryLight">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/" className="text-sm text-brand-textSecondary hover:text-brand-primary transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-brand-textSecondary hover:text-brand-primary transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-brand-textSecondary hover:text-brand-primary transition-colors font-light">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-brand-textSecondary hover:text-brand-primary transition-colors font-light">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-brand-textSecondary hover:text-brand-primary transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-primaryLight">
              Business Hours
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-brand-textSecondary font-light">
              <li className="flex justify-between border-b border-brand-border/40 pb-1.5">
                <span>Monday – Friday</span>
                <span className="font-medium text-brand-textPrimary">7:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-border/40 pb-1.5">
                <span>Saturday</span>
                <span className="font-medium text-brand-textPrimary">8:00 AM – 2:00 PM</span>
              </li>
              <li className="flex justify-between pb-1.5">
                <span>Sunday</span>
                <span className="font-medium text-brand-primaryLight">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact & Business Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-primaryLight">
              Contact Information
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-textSecondary font-light">
              <li>
                <span className="block text-xs uppercase text-brand-textMuted tracking-wider mb-0.5">Phone</span>
                <a href="tel:5551234567" className="hover:text-brand-primary font-medium text-brand-textPrimary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase text-brand-textMuted tracking-wider mb-0.5">Email</span>
                <a href="mailto:primelandscaping.gta@gmail.com" className="hover:text-brand-primary transition-colors">
                  primelandscaping.gta@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase text-brand-textMuted tracking-wider mb-0.5">Address</span>
                <address className="not-italic leading-relaxed">
                  100 Premium Way, Suite 200<br />
                  Beverly Hills, CA 90210
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-textMuted font-light">
          <div>
            &copy; {currentYear} Prime Landscaping &amp; Lawn Care. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
