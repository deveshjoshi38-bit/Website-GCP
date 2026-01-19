import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 pb-24">
        {/* Title Section matching Home style */}
        <div className="mb-32">
           <div className="overflow-hidden mb-4">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tight"
             >
                Expertise
             </motion.h1>
           </div>
           <Reveal delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mt-8 leading-relaxed">
              Comprehensive production solutions tailored for brands, agencies, and broadcasters worldwide.
            </p>
           </Reveal>
        </div>

        <div className="space-y-32">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-12 border-t border-neutral-800 pt-12">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    {/* Matching numbering style from Home (ServiceListItem) */}
                    <span className="block text-sm font-mono text-gray-600 mb-4">0{index + 1}</span>
                    
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                        {service.category}
                    </h2>
                    
                    <div className="w-12 h-0.5 bg-white/20 mb-8 group-hover:w-24 group-hover:bg-white transition-all duration-500" />
                    
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {service.items.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-baseline space-x-4 border-b border-neutral-900 pb-4 hover:border-neutral-700 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0 translate-y-2" />
                      <span className="text-gray-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;