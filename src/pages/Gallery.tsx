import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Lightbox } from '../components/ui/Lightbox';

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: '/image 1.png', title: 'Estate Entranceway', category: 'Landscape Architecture', alt: 'Manicured front entry garden' },
    { src: '/image 2.png', title: 'Luxury Lawn Care', category: 'Lawn Maintenance', alt: 'Close-up of premium green lawn texture' },
    { src: '/image 3.png', title: 'Backyard Renovation', category: 'Before & After', alt: 'Sparse garden bed before landscape installation' },
    { src: '/image 4.png', title: 'Garden Upkeep', category: 'Garden Maintenance', alt: 'Professional pruning and shaping of lavender and perennials' },
    { src: '/image 5.png', title: 'Lawn Restoration', category: 'Before & After', alt: 'Worn soil patches before sod seeding' },
    { src: '/image 6.png', title: 'Minimalist Courtyard', category: 'Modern Landscape', alt: 'Clean horizontal stone paths and manicured bushes' },
    { src: '/image 7.png', title: 'Japanese Zen Path', category: 'Garden Design', alt: 'Pristine gravel pathway with stepping stones' },
    { src: '/image 8.png', title: 'Formal English Garden', category: 'Garden Design', alt: 'Symmetrical hedges surrounding flowers' },
    { src: '/image 9.png', title: 'Sod Base Preparation', category: 'Sod Installation', alt: 'Freshly graded topsoil and grass roll layout' },
    { src: '/image 10.png', title: 'Laser-Cut Boxwood Hedges', category: 'Hedge Trimming', alt: 'Geometric hedge shaping and trimming detailing' },
    { src: '/image 11.png', title: 'Architectural Stone Border', category: 'Landscaping', alt: 'Custom flagstone walkway surrounded by mulched garden beds' },
    { src: '/image 12.png', title: 'Estate Lawn Mowing', category: 'Lawn Care', alt: 'Clean striped pattern cut in premium green lawn' },
    { src: '/image 14.png', title: 'Premium Terrace Design', category: 'Outdoor Living', alt: 'Luxury stone patio dining space next to clean lawn' },
    { src: '/image 15.png', title: 'Precision Lawn Edging', category: 'Lawn Care', alt: 'Laser-sharp grass border separating lawn from mulch' },
    { src: '/image 16.png', title: 'Neglected Estate Lot', category: 'Before & After', alt: 'Overgrown weeds and grass before clearing' },
    { src: '/image 17.png', title: 'Professional Crew Operations', category: 'About Us', alt: 'Uniformed landscaping professionals at work' },
    { src: '/image 18.png', title: 'Modern Shrub Selection', category: 'Botanical Curation', alt: 'Elegantly styled garden showcase with white hydrangeas' }
  ];

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-brand-bg select-none">
      {/* HERO SECTION */}
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/image 6.png")' }}
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6">
              A Showcase of <span className="font-serif italic text-brand-primaryLight font-normal">artistry.</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-light max-w-xl leading-relaxed">
              Explore our collection of luxury landscaping installations, precision turf mowing, and garden restorations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MASONRY GALLERY GRID */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          badge="Image Gallery" 
          title="Refined Details in Outdoor Living" 
          subtitle="Click on any image to launch the fullscreen lightbox. Navigate using the on-screen arrows or the left/right keys on your keyboard."
          accentWords={['details', 'outdoor']}
        />

        {/* Masonry Columns Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
              onClick={() => handleOpenLightbox(index)}
              className="break-inside-avoid relative rounded-card-md overflow-hidden shadow-premium hover:shadow-premium-lg cursor-pointer group border border-brand-border/40"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy" 
                className="w-full h-auto object-cover img-zoom-hover block"
              />
              {/* Glass Overlay Caption */}
              <div className="absolute inset-0 bg-brand-primaryDark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-20 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-primaryLight font-semibold">
                    {image.category}
                  </span>
                  <h4 className="font-serif italic text-base mt-0.5 text-white/90">
                    {image.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX COMPONENT */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
export default Gallery;
