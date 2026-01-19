import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ImageWithLoad } from '../components/ImageWithLoad';
import { Quote, ArrowDown } from 'lucide-react';

// --- SUB-COMPONENTS ---

// 1. Hero Title with "Curtain" Reveal
const HeroTitle = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center px-6 container mx-auto relative">
      <div className="overflow-hidden mb-2">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9]"
        >
          About
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-gray-500 leading-[0.9]"
        >
          The Studio
        </motion.h1>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-auto flex flex-col gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Scroll to Explore</span>
        <ArrowDown className="text-white w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

// 2. Scroll-Driven Opacity Text (Manifesto)
const Manifesto = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "end 0.5"]
  });

  const words = "Girl Child Productions is your one-stop destination for creative storytelling. We are a brainchild of Charnamrit Sachdeva, a renowned journalist and filmmaker. We bring diversity and vibrancy to every project, promising a stand-out film in a camera-saturated world.".split(" ");

  return (
    <section ref={container} className="py-32 container mx-auto px-6 max-w-5xl">
      <p className="text-3xl md:text-5xl leading-tight font-light flex flex-wrap gap-x-3 gap-y-2">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <OpacityWord key={i} children={word} progress={scrollYProgress} range={[start, end]} />;
        })}
      </p>
    </section>
  );
};

const OpacityWord: React.FC<{ children: string; progress: MotionValue<number>; range: number[] }> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="transition-colors duration-500 text-white">
      {children}
    </motion.span>
  );
};

// 3. Sticky Founder Section
const FounderSection = () => {
  return (
    <section className="bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row">
          
          {/* Sticky Image Side */}
          <div className="lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 flex items-center justify-center p-8 lg:p-0">
             <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                   <ImageWithLoad 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Charnamrit Sachdeva" 
                    className="w-full h-full object-cover filter brightness-90"
                    containerClassName="w-full h-full"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                  <h3 className="text-white font-serif text-2xl">Charnamrit Sachdeva</h3>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Founder & Lead Producer</p>
                </div>
             </div>
          </div>

          {/* Scrolling Text Side */}
          <div className="lg:w-1/2 py-24 lg:py-48 px-4 lg:pl-20">
            <SectionHeading title="The Founder" subtitle="Leadership" alignment="left" className="mb-16" />
            
            <div className="space-y-24">
              <Reveal>
                <h4 className="text-xl text-white font-serif mb-4">A Legacy of Storytelling</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  Charnamrit Sachdeva is an award-winning journalist and filmmaker with over 18 years of experience. Having served national organizations like NDTV and India News, she ventured into international press, contributing to global giants like The Daily Mail, The Telegraph, and BBC.
                </p>
              </Reveal>

              <Reveal>
                <h4 className="text-xl text-white font-serif mb-4">Recognition</h4>
                <div className="border-l border-white pl-6 py-2">
                   <p className="text-white italic text-xl font-light">
                     "Indian Women Achievers Award - Best Media Professional (2019)"
                   </p>
                </div>
              </Reveal>

              <Reveal>
                <h4 className="text-xl text-white font-serif mb-4">Documentary Excellence</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                   As a creative producer, she has crafted compelling non-fiction narratives broadcast by Discovery, TLC, and Channel 5 (UK). Her work on rare disorders and health documentaries showcases a deep commitment to impactful, truth-based storytelling.
                </p>
              </Reveal>

              <Reveal>
                <h4 className="text-xl text-white font-serif mb-4">Commercial Vision</h4>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                   From conceptualizing to the final cut, Charnamrit leads with meticulous planning. She has executed campaigns for Niva Bupa, NIIT, Hero Cycles, and music videos for legends like Salim-Sulaiman.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN COMPONENT ---

const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen pt-24">
      <HeroTitle />
      <Manifesto />
      <FounderSection />
      
      {/* Footer Quote */}
      <section className="py-40 flex justify-center items-center bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-noise opacity-10"></div>
         <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <Quote className="w-8 h-8 text-gray-600 mx-auto mb-8 rotate-180" />
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                "Every cut, every grade, every sound design choice is made to serve the truth of the story."
              </h2>
            </Reveal>
         </div>
       </section>
    </div>
  );
};

export default About;