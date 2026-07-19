import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Hammer, Sparkles, Shield, ArrowRight, MousePointerClick, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';

export const Home: React.FC = () => {
  // Before / After Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeBeforeIndex, setActiveBeforeIndex] = useState(0);
  const [activeAfterIndex, setActiveAfterIndex] = useState(0);

  const beforeImages = [
    { src: '/before1.png', label: 'Overgrown Backyard' },
    { src: '/before2.png', label: 'Dry Unprepared Soil' },
    { src: '/before3.png', label: 'Cracked Walkway & Weeds' },
  ];

  const afterImages = [
    { src: '/image 14.png', label: 'Luxury Living Space' },
    { src: '/image 7.png', label: 'Zen Walkway' },
    { src: '/image 6.png', label: 'Modern Courtyard' },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div className="w-full bg-brand-bg select-none">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Background Image with Zoom Animation */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/image 1.png")' }}
        />
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
          {/* Hero Left Info */}
          <div className="max-w-2xl text-white">
            {/* Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold text-white/95 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primaryLight" />
              Premium Landscaping &amp; Lawn Care
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6"
            >
              Create Outdoor Spaces <br />
              That Feel <span className="font-serif italic font-normal text-brand-primaryLight lowercase">timeless.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/80 font-light leading-relaxed max-w-lg mb-10"
            >
              Premium landscaping, lawn care and outdoor living solutions designed for homeowners who expect exceptional craftsmanship and lasting beauty.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="primary" as="span" className="!bg-brand-primary hover:!bg-brand-accent text-white">
                  Request Estimate
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="secondary" as="span" className="!bg-white/10 !text-white border-white/20 hover:!bg-white/20">
                  Explore Projects
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Hero Right Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block w-96 glass-effect p-8 rounded-card-lg border border-white/20 shadow-premium-xl z-20 text-white"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-brand-primaryLight mb-6">
              Our Specialties
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                { title: 'Landscape Design', desc: 'Crafting beautiful customized environments.' },
                { title: 'Lawn Care', desc: 'Meticulous mowing, feeding, and edging.' },
                { title: 'Garden Maintenance', desc: 'Professional hedging, pruning, and weed control.' },
                { title: 'Outdoor Living', desc: 'Elegant stone paths, fire pits, and patios.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primaryLight mt-2 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-medium text-sm text-white group-hover:text-brand-primaryLight transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/50 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll Down</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: SERVICES PREVIEW */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          badge="Our Services" 
          title="Premium Lawn Care & Landscaping" 
          subtitle="We approach landscaping with care, precision, and craftsmanship to ensure your estate is beautifully maintained all year round."
          accentWords={['landscaping', 'care']}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Lawn Mowing', img: '/image 12.png', desc: 'Meticulous, premium lawn mowing with precision edging.' },
            { title: 'Hedge Trimming', img: '/image 10.png', desc: 'Expert shaping and trimming of hedges and ornamental shrubs.' },
            { title: 'Garden Maintenance', img: '/image 4.png', desc: 'Ongoing botanical care, soil management, and weed control.' },
            { title: 'Landscaping', img: '/image 11.png', desc: 'Complete garden transformations, stone installation, and plantings.' }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[420px] rounded-card-md overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center img-zoom-hover"
                style={{ backgroundImage: `url("${service.img}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity group-hover:opacity-90" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end h-full text-white">
                <span className="text-xs uppercase tracking-widest text-brand-primaryLight font-semibold mb-2 block">
                  Service 0{index + 1}
                </span>
                <h3 className="text-2xl font-light mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 font-light opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-brand-primaryLight group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="py-32 bg-brand-surface border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="The Prime Standard" 
              title="Why Luxury Homeowners Choose Us" 
              subtitle="We combine natural design, structural integrity, and dedicated, reliable care to transform residential estates into timeless environments."
              accentWords={['Luxury', 'timeless']}
            />
            
            <div className="mt-8">
              <Link to="/about">
                <Button variant="ghost" as="span" className="!px-0">
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Compass,
                title: 'Thoughtful Design',
                desc: 'We draft and plan natural systems that blend seamlessly with your home\'s layout and local climate.'
              },
              {
                icon: Hammer,
                title: 'Meticulous Craftsmanship',
                desc: 'From custom stone borders to perfect edging, we handle every detail with standard-setting precision.'
              },
              {
                icon: Shield,
                title: 'Reliability & Trust',
                desc: 'Our professional crews are punctual, uniform, and respectful of your privacy and property.'
              },
              {
                icon: Sparkles,
                title: 'Ongoing Excellence',
                desc: 'We go beyond basic maintenance to actively nurture your lawn, plants, and soil for long-term health.'
              }
            ].map((card, idx) => (
              <GlassCard key={idx} className="flex flex-col gap-4 text-brand-textPrimary !bg-white/80" hoverEffect={true}>
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <card.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                  <p className="text-sm text-brand-textSecondary mt-2 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROJECTS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          badge="Featured Works" 
          title="Masterpieces Crafted in Nature" 
          subtitle="Explore some of our recent residential landscape designs and high-end outdoor living projects."
          accentWords={['nature', 'crafted']}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            { title: 'Japanese Oasis', img: '/image 7.png', category: 'Luxury Landscape', year: '2025' },
            { title: 'Botanical Courtyard', img: '/image 8.png', category: 'Garden Design', year: '2026' },
            { title: 'Modern Living Terrace', img: '/image 14.png', category: 'Outdoor Living', year: '2025' },
            { title: 'Architectural Lawn', img: '/image 6.png', category: 'Modern Landscape', year: '2026' }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative h-[480px] rounded-card-lg overflow-hidden shadow-premium hover:shadow-premium-xl cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center img-zoom-hover"
                style={{ backgroundImage: `url("${project.img}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent z-10" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex justify-between items-end text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-primaryLight font-semibold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-light">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: BEFORE & AFTER SLIDER */}
      <section className="py-32 bg-brand-surface border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading 
            badge="The Transformation" 
            title="Witness the Transformation" 
            subtitle="Interact with the slider below to see how our detailed landscape installations bring structure and natural beauty to worn lawns."
            accentWords={['transformation']}
            centered={true}
          />

          {/* Selector Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {beforeImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveBeforeIndex(idx);
                  setActiveAfterIndex(idx);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all duration-300 font-medium ${
                  activeBeforeIndex === idx 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-brand-textSecondary border border-brand-border/40 hover:bg-brand-bg'
                }`}
              >
                Project Style 0{idx + 1}
              </button>
            ))}
          </div>

          {/* Interactive Drag/Hover Slider */}
          <div 
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[500px] md:h-[600px] rounded-card-lg overflow-hidden cursor-ew-resize shadow-premium-xl border border-brand-border select-none"
          >
            {/* Before (Left/Base) Image */}
            <div className="absolute inset-0">
              <img 
                src={beforeImages[activeBeforeIndex].src} 
                alt="Before" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute left-6 top-6 z-20 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Before: {beforeImages[activeBeforeIndex].label}
              </div>
            </div>

            {/* After (Right/Overlay) Image */}
            <div 
              className="absolute inset-y-0 right-0 overflow-hidden"
              style={{ left: `${sliderPosition}%` }}
            >
              <img 
                src={afterImages[activeAfterIndex].src} 
                alt="After" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ 
                  width: sliderRef.current?.getBoundingClientRect().width || 1440,
                  maxWidth: 'none',
                  left: `-${sliderPosition}%`
                }}
              />
              <div className="absolute right-6 top-6 z-20 bg-brand-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                After: {afterImages[activeAfterIndex].label}
              </div>
            </div>

            {/* Slider Divider Line */}
            <div 
              className="absolute inset-y-0 w-0.5 bg-white z-30 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white text-brand-primary flex items-center justify-center shadow-lg -translate-x-1/2">
                <MousePointerClick className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROCESS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          badge="How We Work" 
          title="Designed for Lasting Beauty" 
          subtitle="Our step-by-step landscape installation and care workflow ensures a seamless project delivery from consult to execution."
          accentWords={['beauty', 'designed']}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            {
              step: '01',
              title: 'Consultation',
              desc: 'We inspect the property, analyze soil conditions, discuss outdoor goals, and review your vision.'
            },
            {
              step: '02',
              title: 'Planning',
              desc: 'We draft detailed layouts, choose matching plants, and outline structural stone paths.'
            },
            {
              step: '03',
              title: 'Installation',
              desc: 'Our craftsman crews install trees, custom edging, garden layout beds, and premium sod.'
            },
            {
              step: '04',
              title: 'Ongoing Care',
              desc: 'We provide structured schedule mowing, hedge shaping, weeding, and nutrient management.'
            }
          ].map((process, index) => (
            <div key={index} className="relative group">
              {/* Connector line for desktop */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-[52px] left-[70%] right-[-30%] h-px bg-brand-border/70 z-0" />
              )}
              <GlassCard className="relative z-10 !bg-white hover:!bg-brand-surface flex flex-col gap-5 h-full" hoverEffect={true}>
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-brand-textPrimary group-hover:text-brand-primary transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-sm text-brand-textSecondary mt-2 leading-relaxed font-light">
                    {process.desc}
                  </p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: GALLERY PREVIEW */}
      <section className="py-32 bg-brand-surface border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <SectionHeading 
              badge="Portfolio Preview" 
              title="Luxury Gardens &amp; Lawns" 
              subtitle="Browse a showcase of our high-end landscaping achievements."
              accentWords={['gardens', 'luxury']}
              className="!mb-0"
            />
            <Link to="/gallery">
              <Button variant="primary" as="span">
                View Full Gallery
              </Button>
            </Link>
          </div>

          {/* Masonry Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/image 1.png', title: 'Estate Entranceway', size: 'h-[300px]' },
              { img: '/image 6.png', title: 'Minimalist Courtyard', size: 'h-[400px]' },
              { img: '/image 7.png', title: 'Zen Garden Path', size: 'h-[300px]' },
              { img: '/image 8.png', title: 'Formal Garden', size: 'h-[300px]' },
              { img: '/image 18.png', title: 'High-End Lawn Edging', size: 'h-[400px]' },
              { img: '/image 14.png', title: 'Premium Terrace Design', size: 'h-[300px]' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative ${item.size} rounded-card-md overflow-hidden shadow-premium hover:shadow-premium-lg cursor-pointer`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center img-zoom-hover"
                  style={{ backgroundImage: `url("${item.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-center">
                  <div>
                    <h4 className="font-serif italic text-lg text-brand-primaryLight">{item.title}</h4>
                    <p className="text-xs text-white/60">Residential Estate</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-brand-primaryLight" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LARGE CTA */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-card-xl overflow-hidden shadow-premium-xl border border-brand-border/40 py-24 px-8 md:px-16 text-center text-white">
          {/* Base dark backdrop */}
          <div className="absolute inset-0 bg-brand-primaryDark/95 z-0" />
          {/* Lawn texture bg */}
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15 z-10"
            style={{ backgroundImage: 'url("/image 2.png")' }}
          />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-brand-primaryLight/20 border border-brand-primaryLight/40 flex items-center justify-center mb-6"
            >
              <Calendar className="w-5 h-5 text-brand-primaryLight" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6"
            >
              Ready to Transform Your <br />
              <span className="font-serif italic font-normal text-brand-primaryLight">outdoor living space?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 font-light leading-relaxed text-base md:text-lg mb-10 max-w-xl"
            >
              Whether you're looking for ongoing lawn care or a complete landscape transformation, we're ready to help you create an outdoor environment you'll enjoy for years to come.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="primary" as="span" className="!bg-brand-primaryLight hover:!bg-white hover:!text-brand-primary">
                  Request Estimate
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" as="span" className="!bg-transparent !text-white border-white/20 hover:!bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
