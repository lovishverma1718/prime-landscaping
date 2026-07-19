import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Lawn Care',
      img: '/image 2.png',
      desc: 'Complete seasonal lawn care, including core aeration, soil conditioning, luxury feeding, and weed prevention programs.',
      features: ['Core aeration & seeding', 'Nutrient custom feeding', 'Pre-emergent crabgrass control']
    },
    {
      title: 'Lawn Mowing',
      img: '/image 12.png',
      desc: 'Meticulous, structured mowing scheduled regularly. Includes precision edging of paths, blowing driveways clean, and bagging clippings.',
      features: ['Consistent height mowing', 'Double-cut striping technique', 'Sidewalk & driveway edging']
    },
    {
      title: 'Garden Maintenance',
      img: '/image 4.png',
      desc: 'Ongoing botanical maintenance for shrub beds, weed removal, soil mulching, flower pruning, and perennial division.',
      features: ['Beds weeding & detailing', 'Bark mulch replenishment', 'Seasonal perennial trimming']
    },
    {
      title: 'Hedge Trimming',
      img: '/image 10.png',
      desc: 'Expert pruning and geometric shaping of privacy screens, tall hedges, boxwood globes, and architectural greenery.',
      features: ['Laser-straight top hedge trims', 'Shrub structural thinning', 'Deadwood removal & clearing']
    },
    {
      title: 'Landscaping Design',
      img: '/image 11.png',
      desc: 'Custom landscaping modifications including new garden beds, retaining stone walls, accent boulders, and architectural plants.',
      features: ['Property layout design', 'Custom shrub & tree plantings', 'Natural stone borders']
    },
    {
      title: 'Luxury Landscaping',
      img: '/image 14.png',
      desc: 'Comprehensive outdoor transformations that incorporate custom stone work, water features, lighting, and botanical galleries.',
      features: ['Bespoke estate architectures', 'Ambient lighting integration', 'Exotic specimen plantings']
    },
    {
      title: 'Outdoor Living Spaces',
      img: '/image 7.png',
      desc: 'Design and installation of elegant backyard living areas, incorporating stone patios, custom walkways, and fire pits.',
      features: ['Paver & flagstone patios', 'Custom garden walkways', 'Cozy stone fire pits']
    },
    {
      title: 'Sod Installation',
      img: '/image 9.png',
      desc: 'Professional turf lawn replacement. Includes grading of soil, nutrient amendments, roll laying, and initial irrigation cycles.',
      features: ['Old turf cleanout & grading', 'Premium Kentucky Bluegrass sod', 'Root system starter feeding']
    }
  ];

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
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6">
              Premium Landscaping <br />
              <span className="font-serif italic text-brand-primaryLight font-normal">services.</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-light max-w-xl leading-relaxed">
              Meticulous care and custom designs crafted specifically for high-end residential estates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          badge="Detailed Offerings" 
          title="Designed for Lasting Beauty" 
          subtitle="Every service is performed by skilled crews utilizing specialized equipment to ensure the highest standards."
          accentWords={['beauty', 'designed']}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col rounded-card-lg overflow-hidden border border-brand-border/50 bg-white shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center img-zoom-hover"
                  style={{ backgroundImage: `url("${service.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Service Details */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs uppercase tracking-widest text-brand-primaryLight font-semibold mb-2 block">
                  Service 0{index + 1}
                </span>
                <h3 className="text-2xl font-light text-brand-textPrimary mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-textSecondary leading-relaxed font-light mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Features Checklist */}
                <div className="border-t border-brand-border/40 pt-6 mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-textPrimary mb-4">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-brand-textSecondary font-light">
                        <Check className="w-4 h-4 text-brand-primaryLight shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <Link to="/contact" className="w-fit">
                  <Button variant="ghost" as="span" className="!px-0 !py-0 text-sm">
                    Inquire About Service
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-card-xl overflow-hidden shadow-premium-xl border border-brand-border/40 py-24 px-8 md:px-16 text-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center img-zoom-hover"
            style={{ backgroundImage: 'url("/image 8.png")' }}
          />
          <div className="absolute inset-0 bg-brand-primaryDark/55 z-10" />

          <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-primaryLight/20 border border-brand-primaryLight/40 flex items-center justify-center mb-6">
              <Calendar className="w-5 h-5 text-brand-primaryLight" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Create an custom maintenance <span className="font-serif italic font-normal text-brand-primaryLight">plan.</span>
            </h2>
            <p className="text-white/80 font-light leading-relaxed mb-10 text-sm md:text-base">
              Speak with a professional coordinator to customize a lawn mowing, trimming, and garden upkeep schedule for your property.
            </p>
            <Link to="/contact">
              <Button variant="primary" as="span" className="!bg-brand-primaryLight hover:!bg-white hover:!text-brand-primary">
                Get an Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
