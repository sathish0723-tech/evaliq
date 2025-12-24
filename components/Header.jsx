'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const logoUrl = 'https://res.cloudinary.com/difauucm4/image/upload/v1766603112/student-management/logos/aiivy45l4cirjv5cxbkn.png';
  
  const navItems = [
    { label: 'Why Evaliq?', href: '#why-evaliq' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md relative overflow-hidden"
    >
      {/* Green Gradient Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={logoUrl}
                alt="Evaliq Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white text-xl md:text-2xl font-semibold">evaliq</span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-white text-sm lg:text-base transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg text-sm md:text-base font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Use template
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

