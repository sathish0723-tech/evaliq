'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const logoUrl = 'https://res.cloudinary.com/difauucm4/image/upload/v1766603112/student-management/logos/aiivy45l4cirjv5cxbkn.png';
  
  const navigationLinks = [
    { label: 'Why Evaliq?', href: '#why-evaliq' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: '404', href: '/404' },
  ];

  const socialLinks = [
    { label: 'Twitter (X)', href: 'https://twitter.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Branding Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src={logoUrl}
                  alt="Evaliq Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xl font-semibold">Evaliq</span>
            </div>
            <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">
              Secure, fast, and seamless educational management. Evaliq makes student data effortless.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Created by</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xs">A</span>
              </div>
              <span>Arthur in Framer</span>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Socials Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">Socials</h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

