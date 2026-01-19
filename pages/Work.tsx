import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { ImageWithLoad } from '../components/ImageWithLoad';
import { WORK_ITEMS } from '../constants';

// Simplified categories mapping for better UX
const CATEGORIES = [
  { label: 'All', value: 'All' },
  { label: 'Documentaries', value: 'Documentary' },
  { label: 'Commercials', value: 'Commercial' },
  { label: 'Music & Events', value: 'Music/Event' },
  { label: 'Digital', value: 'Digital' }
];

const WorkSkeleton = () => (
  <div className="w-full">
    <div className="relative aspect-[4/3] bg-neutral-900/50 animate-pulse mb-6 overflow-hidden rounded-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer" />
    </div>
    <div className="flex justify-between items-start border-t border-neutral-800/50 pt-6">
      <div className="w-[70%] space-y-3">
        <div className="h-8 bg-neutral-900/50 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-neutral-900/50 rounded animate-pulse w-1/3" />
      </div>
      <div className="flex flex-col items-end gap-2 w-[20%]">
        <div className="h-3 bg-neutral-900/50 rounded animate-pulse w-10" />
        <div className="h-4 bg-neutral-900/50 rounded animate-pulse w-16" />
      </div>
    </div>
  </div>
);

const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleWorks, setVisibleWorks] = useState(WORK_ITEMS);

  // Simulate network request/filtering delay for premium feel
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      let filtered = WORK_ITEMS;
      
      if (filter !== 'All') {
        const lowerFilter = filter.toLowerCase();
        filtered = WORK_ITEMS.filter(item => {
          const cat = item.category.toLowerCase();
          
          if (filter === 'Commercial') {
            return cat.includes('commercial') || cat.includes('corporate') || cat.includes('brand');
          }
          if (filter === 'Music/Event') {
            return cat.includes('music') || cat.includes('event');
          }
          
          return cat.includes(lowerFilter);
        });
      }
      
      setVisibleWorks(filtered);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <div className="pt-32 min-h-screen bg-background text-white selection:bg-white selection:text-black">
      <div className="container mx-auto px-6 pb-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div>
            <div className="overflow-hidden mb-2">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tighter"
              >
                Selected
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-7xl md:text-9xl font-serif text-gray-600 leading-[0.85] tracking-tighter"
              >
                Works
              </motion.h1>
            </div>
          </div>

          <Reveal delay={0.5} className="mt-8 md:mt-0">
             <div className="flex flex-col items-start md:items-end">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Projects</span>
                <span className="text-4xl font-light">
                  {isLoading ? '-' : visibleWorks.length.toString().padStart(2, '0')}
                </span>
             </div>
          </Reveal>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 md:top-24 z-30 mb-16 py-4 bg-background/80 backdrop-blur-md border-y border-white/5 md:border-b md:border-t-0 -mx-6 px-6 md:mx-0 md:px-0 md:rounded-sm transition-all duration-300">
           <Reveal delay={0.4}>
            <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
              <div className="hidden md:flex items-center text-gray-600 mr-4 flex-shrink-0">
                <Filter size={14} className="mr-2" />
                <span className="text-xs font-mono uppercase tracking-widest">Filter</span>
              </div>
              <div className="flex gap-6 md:gap-10 min-w-max">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => setFilter(cat.value)}
                    disabled={isLoading && filter === cat.value}
                    className={`text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 relative group px-1 py-1 ${
                      filter === cat.value 
                        ? 'text-white' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {cat.label}
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${filter === cat.value ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Project Grid */}
        <div className="min-h-[50vh]">
          {isLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={i % 2 !== 0 ? 'md:mt-32' : ''}>
                    <WorkSkeleton />
                  </div>
                ))}
             </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24"
            >
              <AnimatePresence mode='popLayout'>
                {visibleWorks.map((work, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1
                    }}
                    key={work.id}
                    className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                    onMouseEnter={() => setHoveredWork(work.id)}
                    onMouseLeave={() => setHoveredWork(null)}
                  >
                    {/* Image Container with Mask Reveal Effect */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-900">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                         <ImageWithLoad 
                           src={work.image} 
                           alt={work.title} 
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                           containerClassName="w-full h-full"
                         />
                      </motion.div>
                      
                      {/* Overlay Info */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                        <div className="flex justify-between items-start">
                          <span className="inline-block px-2 py-1 bg-white/10 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white border border-white/20">
                            {work.category}
                          </span>
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                             <ArrowUpRight className="text-black w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Title & Meta */}
                    <div className="flex justify-between items-start border-t border-neutral-800 pt-6 group-hover:border-white/50 transition-colors duration-500">
                      <div className="max-w-[70%]">
                        <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight group-hover:text-gray-300 transition-colors">
                          {work.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">{work.client}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                         <span className="text-xs font-mono text-gray-600">Year</span>
                         <span className="text-sm font-mono text-white">{work.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!isLoading && visibleWorks.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-gray-500 font-light text-xl">No projects found.</p>
              <button onClick={() => setFilter('All')} className="mt-4 text-sm uppercase tracking-widest border-b border-white pb-1">Reset Filters</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Work;