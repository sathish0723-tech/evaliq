'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-green-500/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Intelligent insights, effortless management
          <br />
          
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Evaliq offers a seamless, secure experience for managing your educational assets.
          Instant insights, optimized workflows, and premium design.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(74, 222, 128, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl text-lg font-semibold shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get started now
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <p className="text-white/60 text-sm">They trust us</p>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </motion.svg>
            ))}
            <span className="text-white ml-2 text-sm">4.9 G</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

