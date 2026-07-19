import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';

export const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'lawn-mowing',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Construct WhatsApp Message
      const messageText = `*New Landscape Inquiry*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Requested:* ${formData.service}
*Message:* ${formData.message}`;

      const whatsappNumber = '15551234567'; // Company WhatsApp number (formatted without symbols)
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      
      // Open WhatsApp Web or mobile app in a new tab
      window.open(whatsappUrl, '_blank');

      // Show success screen and reset form
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'lawn-mowing',
        message: ''
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error on type
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <div className="w-full bg-brand-bg select-none">
      {/* HERO SECTION */}
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/image 14.png")' }}
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <span className="text-xs uppercase tracking-widest text-brand-primaryLight font-semibold mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6">
              Let's Talk About Your <span className="font-serif italic text-brand-primaryLight font-normal">landscape.</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-light max-w-xl leading-relaxed">
              We look forward to partnering with you to design, build, or maintain your residential property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TWO-COLUMN CONTACT LAYOUT */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-light text-brand-textPrimary mb-8">
              Request a Consultation
            </h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-brand-primary/10 border border-brand-primary/20 rounded-card-md p-8 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-light text-brand-textPrimary">Estimate Requested Successfully</h3>
                  <p className="text-sm text-brand-textSecondary leading-relaxed max-w-md font-light">
                    Thank you for reaching out to Prime Landscaping. Our landscape coordinator will review your request and contact you within one business day to discuss details.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  noValidate
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-brand-textSecondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full glass-effect rounded-full px-6 py-3.5 text-sm text-brand-textPrimary focus:outline-none focus:ring-2 focus:ring-brand-primaryLight/40 transition-all ${
                        errors.name ? 'border-red-500 ring-2 ring-red-500/20' : 'border-brand-border/40'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-light">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-brand-textSecondary">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full glass-effect rounded-full px-6 py-3.5 text-sm text-brand-textPrimary focus:outline-none focus:ring-2 focus:ring-brand-primaryLight/40 transition-all ${
                          errors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-brand-border/40'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-light">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-brand-textSecondary">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className={`w-full glass-effect rounded-full px-6 py-3.5 text-sm text-brand-textPrimary focus:outline-none focus:ring-2 focus:ring-brand-primaryLight/40 transition-all ${
                          errors.phone ? 'border-red-500 ring-2 ring-red-500/20' : 'border-brand-border/40'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-light">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service type select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs uppercase tracking-wider font-semibold text-brand-textSecondary">
                      Requested Service
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full glass-effect rounded-full px-6 py-3.5 text-sm text-brand-textPrimary focus:outline-none focus:ring-2 focus:ring-brand-primaryLight/40 transition-all appearance-none cursor-pointer border-brand-border/40"
                      >
                        <option value="lawn-mowing">Lawn Mowing &amp; Edging</option>
                        <option value="lawn-care">Lawn Care &amp; Feeding</option>
                        <option value="garden-maintenance">Garden Maintenance</option>
                        <option value="hedge-trimming">Hedge Trimming</option>
                        <option value="landscaping">Landscaping Design</option>
                        <option value="luxury-landscaping">Luxury Landscaping &amp; Architecture</option>
                        <option value="sod-installation">Sod Turf Installation</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-textSecondary">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-brand-textSecondary">
                      Property Details &amp; Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your property size, the current condition of your yard, or details of your landscaping goals..."
                      className={`w-full glass-effect rounded-card-md px-6 py-4 text-sm text-brand-textPrimary focus:outline-none focus:ring-2 focus:ring-brand-primaryLight/40 transition-all resize-none ${
                        errors.message ? 'border-red-500 ring-2 ring-red-500/20' : 'border-brand-border/40'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-600 flex items-center gap-1 mt-1 font-light">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" className="w-full sm:w-fit py-4 px-10 uppercase tracking-wider mt-2">
                    Request Estimate
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Details & Map Placeholder */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <GlassCard className="!bg-white flex flex-col gap-6" hoverEffect={false}>
              <h3 className="text-2xl font-light text-brand-textPrimary pb-4 border-b border-brand-border/60">
                Business Information
              </h3>
              
              <ul className="flex flex-col gap-5 text-sm text-brand-textSecondary font-light">
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-brand-primaryLight shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brand-textMuted mb-0.5">Phone</span>
                    <a href="tel:5551234567" className="font-semibold text-brand-textPrimary hover:text-brand-primary transition-colors text-base">
                      (555) 123-4567
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Mail className="w-5 h-5 text-brand-primaryLight shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brand-textMuted mb-0.5">Email</span>
                    <a href="mailto:info@primelandscaping.com" className="hover:text-brand-primary transition-colors">
                      info@primelandscaping.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-primaryLight shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brand-textMuted mb-0.5">Address</span>
                    <address className="not-italic leading-relaxed">
                      100 Premium Way, Suite 200<br />
                      Beverly Hills, CA 90210
                    </address>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Clock className="w-5 h-5 text-brand-primaryLight shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-brand-textMuted mb-0.5">Business Hours</span>
                    <p className="leading-relaxed">
                      Monday – Friday: 7:00 AM – 5:00 PM<br />
                      Saturday: 8:00 AM – 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* Google Maps Simulated Placeholder */}
            <div className="relative rounded-card-md overflow-hidden h-72 border border-brand-border/40 shadow-premium">
              {/* Base dark backdrop */}
              <div className="absolute inset-0 bg-brand-primaryDark/80 z-0" />
              {/* Lawn texture background with low opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 z-10"
                style={{ backgroundImage: 'url("/image 9.png")' }}
              />

              {/* Map UI Overlay */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between text-white font-light">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-base">Serving Beverly Hills &amp; Surrounding Areas</h4>
                    <p className="text-xs text-white/60 mt-1">Los Angeles County Residential Region</p>
                  </div>
                  <div className="px-2.5 py-1 bg-brand-primaryLight text-xs rounded-full font-semibold uppercase tracking-wider">
                    Service Map
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-card-sm text-xs mt-auto">
                  <div className="w-3 h-3 rounded-full bg-brand-primaryLight animate-ping" />
                  <p>Our office is located at 100 Premium Way. Call to schedule an in-person layout meeting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA: CALL NOW BANNER */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-card-xl overflow-hidden shadow-premium-xl border border-brand-border/40 py-20 px-8 md:px-16 text-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center img-zoom-hover"
            style={{ backgroundImage: 'url("/image 1.png")' }}
          />
          <div className="absolute inset-0 bg-brand-primaryDark/55 z-10" />

          <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Let's Create Something <span className="font-serif italic font-normal text-brand-primaryLight">beautiful</span> outdoors.
            </h2>
            <p className="text-white/80 font-light leading-relaxed mb-8 text-sm md:text-base">
              Call us directly to speak to a landscape architect or fill out our online estimation questionnaire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5551234567">
                <Button variant="primary" as="span" className="!bg-brand-primaryLight hover:!bg-white hover:!text-brand-primary">
                  Call: (555) 123-4567
                </Button>
              </a>
              <Button 
                variant="secondary" 
                onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
                className="!bg-transparent !text-white border-white/20 hover:!bg-white/10"
              >
                Request Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
