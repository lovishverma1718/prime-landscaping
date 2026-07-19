import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-brand-bg select-none">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/image 18.png")' }}
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
              About Prime Landscaping
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6">
              Crafting <span className="font-serif italic text-brand-primaryLight font-normal">beautiful</span> outdoor spaces with care.
            </h1>
            <p className="text-base md:text-lg text-white/80 font-light max-w-xl leading-relaxed">
              We serve luxury residential clients who value meticulous attention, structured design, and consistent premium maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              badge="Our Story"
              title="A Purposeful Approach to Nature"
              accentWords={['purposeful', 'nature']}
            />
            <div className="text-brand-textSecondary font-light leading-relaxed flex flex-col gap-6 text-base md:text-lg">
              <p className="text-brand-textPrimary font-medium text-lg border-l-2 border-brand-primaryLight pl-6 italic">
                "Every project begins by understanding the property, the client's goals, and the way the outdoor space will be enjoyed."
              </p>
              <p>
                Our philosophy is simple: we believe that high-end residential landscaping is an art form that requires structural precision and ongoing nurture. By treating your estate as an evolving natural gallery, we ensure that every hedge, grass blade, and stone is placed with professional intent.
              </p>
              <p>
                We collaborate directly with homeowners to design paths, install custom garden beds, lay architectural sod, and provide ongoing garden upkeep that protects and elevates your real estate investment.
              </p>
            </div>
          </div>

          {/* Image card */}
          <div className="lg:col-span-5 relative h-[500px] rounded-card-lg overflow-hidden shadow-premium">
            <div 
              className="absolute inset-0 bg-cover bg-center img-zoom-hover"
              style={{ backgroundImage: 'url("/image 7.png")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primaryDark/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-brand-surface border-y border-brand-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <GlassCard className="flex flex-col gap-4 !bg-white/80" hoverEffect={true}>
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-light text-brand-textPrimary">Our Mission</h3>
            <p className="text-brand-textSecondary font-light leading-relaxed mt-2">
              Luxury outdoor spaces built with quality, precision and long-term care. We are committed to using best practices, quality tools, and refined processes that result in flawless outcomes for our clients' residential properties.
            </p>
          </GlassCard>

          {/* Vision Card */}
          <GlassCard className="flex flex-col gap-4 !bg-white/80" hoverEffect={true}>
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-light text-brand-textPrimary">Our Vision</h3>
            <p className="text-brand-textSecondary font-light leading-relaxed mt-2">
              To create landscapes that remain beautiful through every season while enhancing the way people experience their homes. We envision a standard of residential landscaping that blends modern minimalism with healthy botanical density.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* PROFESSIONAL APPROACH */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          badge="Professional Standards" 
          title="Meticulous Care at Every Step" 
          subtitle="Our structured workflow guarantees standard-setting care for residential estates."
          accentWords={['care', 'meticulous']}
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="h-[400px] rounded-card-lg overflow-hidden shadow-premium">
            <div 
              className="w-full h-full bg-cover bg-center img-zoom-hover"
              style={{ backgroundImage: 'url("/image 17.png")' }}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-light text-brand-textPrimary">Dedicated &amp; Uniform Crews</h3>
            <p className="text-brand-textSecondary font-light leading-relaxed">
              We employ professional garden craftsmen who arrive in marked vehicles, wearing matching uniforms. Our crew members respect the privacy and security of your estate, adhering to rigid noise, cleanliness, and security policies on site.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {['Licensed & Insured', 'Experienced Horticulturalists', 'Clean, Structured Equipment', 'Punctual & Reliable scheduling'].map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-brand-textPrimary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primaryLight" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h3 className="text-3xl font-light text-brand-textPrimary">A Horticultural Focus</h3>
            <p className="text-brand-textSecondary font-light leading-relaxed">
              Lawn care and landscape management isn't just about cutting grass. We analyze your estate's soil nutrients, prune shrubs at correct growth phases, check irrigation systems, and manage turf diseases before they emerge.
            </p>
            <div className="mt-4">
              <Link to="/services">
                <Button variant="ghost" as="span" className="!px-0">Explore Our Services</Button>
              </Link>
            </div>
          </div>
          <div className="h-[400px] rounded-card-lg overflow-hidden shadow-premium order-1 lg:order-2">
            <div 
              className="w-full h-full bg-cover bg-center img-zoom-hover"
              style={{ backgroundImage: 'url("/image 4.png")' }}
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-card-xl overflow-hidden shadow-premium-xl border border-brand-border/40 py-24 px-8 md:px-16 text-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center img-zoom-hover"
            style={{ backgroundImage: 'url("/image 14.png")' }}
          />
          <div className="absolute inset-0 bg-brand-primaryDark/55 z-10" />

          <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Create an outdoor environment you'll cherish <span className="font-serif italic font-normal text-brand-primaryLight">always.</span>
            </h2>
            <p className="text-white/80 font-light leading-relaxed mb-10 text-sm md:text-base">
              Get in touch with our landscape design professionals today to schedule a structured consultation on your property.
            </p>
            <Link to="/contact">
              <Button variant="primary" as="span" className="!bg-brand-primaryLight hover:!bg-white hover:!text-brand-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
