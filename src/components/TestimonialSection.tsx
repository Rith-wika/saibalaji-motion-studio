import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility for cleaner tailwind classes ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
  
// --- Data ---
// Duplicated once to ensure smooth infinite-feel scrolling on larger screens if needed
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Ramaprabhu Attepally",
    text: "It is a good company and will deliver in time with good quality of work.",
    badge: "Professional, Reliable & Cost Effective",
  },
  {
    id: 2,
    name: "Ram Prasad",
    text: "Genuine proprietors and good helping nature persons, quality and excellent work inspired by SBIIPL.",
    badge: "Professional, Reliable & Cost Effective",
  },
  {
    id: 3,
    name: "C. Bhaskar Rao",
    text: "Quality services and they complete the services in given quotation.",
    badge: "Professional, Reliable & Cost Effective",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Entrance Animation Trigger
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Autoplay Logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, itemsPerView]);

  const handleNext = () => {
    // Loop back logic
    setCurrentIndex((prev) => 
      prev === TESTIMONIALS_DATA.length - itemsPerView ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS_DATA.length - itemsPerView : prev - 1
    );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#020617] py-20 overflow-hidden font-sans text-slate-200"
    >
      {/* --- Background Elements --- */}
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Blueprint Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-yellow-500/70"></span>
            <span className="text-accent font-medium tracking-wider text-sm uppercase">What Our Clients Say</span>
            <span className="h-[1px] w-8 bg-yellow-500/70"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Testimonials
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Trusted by builders and contractors for reliable, on-time electrical works in high-rise and large infrastructure projects.
          </p>
        </motion.div>

        {/* --- Carousel Wrapper --- */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-yellow-500 hover:text-slate-900 hover:border-yellow-500 transition-all duration-300 backdrop-blur-sm hidden md:flex items-center justify-center group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-yellow-500 hover:text-slate-900 hover:border-yellow-500 transition-all duration-300 backdrop-blur-sm hidden md:flex items-center justify-center group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden py-4 -mx-4 px-4"> {/* Negative margin to allow shadows to clip nicely */}
            <motion.div 
              className="flex"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.div 
                className="flex w-full"
                animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {TESTIMONIALS_DATA.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    variants={itemVariants}
                    className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                  >
                    <TestimonialCard item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: TESTIMONIALS_DATA.length - (itemsPerView - 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentIndex === idx ? "w-8 bg-yellow-500" : "w-2 bg-slate-700 hover:bg-slate-600"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Individual Card Component ---
const TestimonialCard = ({ item }) => {
  return (
    <motion.div 
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="h-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col relative group shadow-lg hover:shadow-cyan-900/20 transition-all duration-300"
    >
      {/* Decorative Gradient Line Top */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

      {/* Header: Quote Icon & Badge */}
      <div className="flex justify-between items-start mb-6">
        <motion.div 
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-500 group-hover:text-accent transition-colors duration-300"
        >
          <Quote size={32} className="fill-current opacity-20 group-hover:opacity-100" />
        </motion.div>
        
        <div className="bg-cyan-950/50 border border-cyan-800/50 rounded-full px-3 py-1 flex items-center gap-1.5">
          <Zap size={12} className="text-accent fill-accent" />
          <span className="text-[10px] md:text-xs font-semibold text-cyan-100 tracking-wide uppercase">
            Professional & Reliable
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="text-slate-300 text-lg leading-relaxed italic relative z-10">
          "{item.text}"
        </p>
      </div>

      {/* Footer: User Info */}
      <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-5 group-hover:border-slate-700 transition-colors">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold text-sm border border-slate-600 shadow-inner">
          {item.name.split(' ').map(n => n[0]).join('').substring(0,2)}
        </div>
        <div>
          <h4 className="text-white font-semibold tracking-wide text-sm md:text-base">
            {item.name}
          </h4>
          <span className="text-xs text-slate-500 font-medium">
            Satisfied Client
          </span>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-slate-800/20 to-transparent rounded-br-2xl pointer-events-none"></div>
    </motion.div>
  );
};

export default TestimonialSection;