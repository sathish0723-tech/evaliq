'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to take control of
          <br />
          your educational management?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of educators who trust Evaliq for secure, seamless, and efficient student data management.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(74, 222, 128, 0.4)' }}
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
    </section>
  );
};

export default CTA;

