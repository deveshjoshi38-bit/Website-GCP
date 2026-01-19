import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDownRight, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ImageWithLoad } from '../components/ImageWithLoad';
import { SERVICES_DATA, WHY_US_POINTS, CLIENT_LOGOS, WORK_ITEMS } from '../constants';

// --- SUB-COMPONENTS ---

const AtmosphericBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
     <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]"
     />
     <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-800/20 rounded-full blur-[120px]"
     />
  </div>
);

const CurtainText: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ServiceListItem: React.FC<{ service: any, index: number }> = ({ service, index }) => {
  return (
    <Link to="/services">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
        className="group relative border-b border-neutral-800 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors duration-500 hover:bg-neutral-900/30 px-4"
      >
        <div className="flex items-baseline gap-6 z-10">
          <span className="text-xs font-mono text-gray-600">0{index + 1}</span>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-400 group-hover:text-white transition-colors duration-300">
            {service.category}
          </h3>
        </div>
        <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowRight size={16} />
        </div>
      </motion.div>
    </Link>
  );
};

// --- MAIN PAGE ---

const Home: React.FC = () => {
  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);

  // Work Section Parallax Columns
  const workRef = useRef(null);
  const { scrollYProgress: workScroll } = useScroll({ target: workRef, offset: ["start end", "end start"] });
  const springConfig = { stiffness: 50, damping: 20 };
  const smoothWorkScroll = useSpring(workScroll, springConfig);
  // Column 1 moves normally, Column 2 moves faster (upwards) to create slide effect
  const col1Y = useTransform(smoothWorkScroll, [0, 1], [0, -50]); 
  const col2Y = useTransform(smoothWorkScroll, [0, 1], [100, -200]);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden w-full">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <video
            autoPlay loop muted playsInline
            poster="https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover filter brightness-[0.4] contrast-110 scale-105"
          >
            <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <CurtainText className="mb-2">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white font-bold tracking-tight">
              Stories That Move
            </h1>
          </CurtainText>
          <CurtainText delay={0.2} className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-gray-500 font-bold tracking-tight">
              Films That Matter
            </h1>
          </CurtainText>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
             <Link to="/work" className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
                View Portfolio <ArrowRight size={14} />
             </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO / MANIFESTO */}
      <section className="py-32 md:py-48 relative">
        <AtmosphericBackground />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
               <SectionHeading title="The Studio" subtitle="About Us" />
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <p className="text-2xl md:text-4xl font-light leading-tight text-gray-200 mb-12">
                  We are <span className="text-white font-serif italic">Girl Child Productions</span>. A one-stop destination where journalistic integrity meets cinematic brilliance. We craft diverse, vibrant, and budget-agnostic stories that cut through the noise.
                </p>
                <Link to="/about" className="text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors border-b border-gray-700 pb-1">
                  Read Our Story
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORK (PARALLAX COLUMNS) */}
      <section ref={workRef} className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 mb-24">
           <div className="flex justify-between items-end">
             <h2 className="text-5xl md:text-7xl font-serif text-white">Selected Works</h2>
             <Reveal delay={0.2}>
                <Link to="/work" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                  All Projects <ArrowDownRight />
                </Link>
             </Reveal>
           </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Column 1 - Slower / Normal */}
            <motion.div style={{ y: col1Y }} className="space-y-16 md:space-y-32">
              {WORK_ITEMS.filter((_, i) => i % 2 === 0).slice(0, 3).map((work) => (
                <Link to="/work" key={work.id} className="block group">
                  <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                     <ImageWithLoad 
                       src={work.image} 
                       alt={work.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                       containerClassName="w-full h-full"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                  <Reveal>
                    <div className="flex justify-between items-baseline border-b border-neutral-800 pb-4">
                      <h3 className="text-2xl font-serif text-white group-hover:translate-x-4 transition-transform duration-300">{work.title}</h3>
                      <span className="text-xs uppercase tracking-widest text-gray-500">{work.category}</span>
                    </div>
                  </Reveal>
                </Link>
              ))}
            </motion.div>

            {/* Column 2 - Faster / Parallax Offset */}
            <motion.div style={{ y: col2Y }} className="space-y-16 md:space-y-32 pt-0 md:pt-32">
               {WORK_ITEMS.filter((_, i) => i % 2 !== 0).slice(0, 3).map((work) => (
                <Link to="/work" key={work.id} className="block group">
                  <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                     <ImageWithLoad 
                       src={work.image} 
                       alt={work.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                       containerClassName="w-full h-full"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                  <Reveal>
                    <div className="flex justify-between items-baseline border-b border-neutral-800 pb-4">
                      <h3 className="text-2xl font-serif text-white group-hover:translate-x-4 transition-transform duration-300">{work.title}</h3>
                      <span className="text-xs uppercase tracking-widest text-gray-500">{work.category}</span>
                    </div>
                  </Reveal>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES LIST */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <SectionHeading title="Expertise" subtitle="Our Services" />
          <div className="mt-12">
            {SERVICES_DATA.map((service, index) => (
              <ServiceListItem key={service.category} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY US - STICKY VERTICAL SCROLL LAYOUT */}
      <section className="bg-neutral-900 relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row">
              
              {/* Left Column: Sticky Title */}
              <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-20 lg:py-0 pr-8">
                 <SectionHeading title="Why Choose Us?" subtitle="Our Value" />
                 <Reveal delay={0.2}>
                   <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                      We don't just make films. We build narratives that resonate, influence, and endure. 
                      Partner with us for a production experience that is as seamless as it is spectacular.
                   </p>
                   <div className="hidden lg:flex">
                      <Link to="/contact" className="text-sm font-bold uppercase tracking-[0.2em] text-white border-b border-white pb-2 hover:opacity-70 transition-opacity">
                        Start a Project
                      </Link>
                   </div>
                 </Reveal>
              </div>

              {/* Right Column: Vertical List */}
              <div className="lg:w-2/3 py-20 lg:py-32 flex flex-col gap-8">
                 {WHY_US_POINTS.map((point, i) => (
                   <Link 
                     to={point.link || '/contact'} 
                     key={i} 
                   >
                     <Reveal delay={i * 0.1} className="bg-neutral-800/20 border border-neutral-800 p-8 md:p-12 hover:bg-neutral-800/60 transition-all duration-300 group rounded-sm">
                       <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                          <div>
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-3xl font-display text-neutral-600 group-hover:text-white transition-colors">0{i + 1}</span>
                              <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-white transition-colors">{point.title}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg pl-0 md:pl-10">{point.desc}</p>
                          </div>
                          
                          <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end md:self-center">
                             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ChevronRight size={18} />
                             </div>
                          </div>
                       </div>
                     </Reveal>
                   </Link>
                 ))}
                 
                 {/* Mobile only button */}
                 <div className="lg:hidden mt-8">
                    <Reveal>
                      <Link to="/contact" className="inline-block border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all">
                        Start a Project
                      </Link>
                    </Reveal>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 6. CLIENTS MARQUEE */}
      <section className="py-24 bg-background border-t border-neutral-900">
        <div className="container mx-auto px-6 mb-12 text-center">
           <span className="text-xs uppercase tracking-[0.3em] text-gray-600">They Trust Us</span>
        </div>
        <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap space-x-24 px-4 w-max"
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                <span key={`${client}-${idx}`} className="text-4xl md:text-5xl font-display text-neutral-800 uppercase tracking-widest shrink-0 hover:text-white transition-colors duration-500 cursor-default">
                  {client}
                </span>
              ))}
            </motion.div>
        </div>
      </section>

      {/* 7. CTA / FOOTER PREVIEW */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-noise opacity-10" />
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 leading-tight">
              Ready to tell your story?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="inline-block border border-white/20 px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-300">
              Start a Project
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Home;