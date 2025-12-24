'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'Create your account',
    description: 'Sign up easily and secure your profile in just a few steps.',
    screenshot: (
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
        <div className="space-y-3">
          <div>
            <label className="text-white/60 text-sm">Email</label>
            <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80">
              john@doe.mail
            </div>
          </div>
          <div>
            <label className="text-white/60 text-sm">Password</label>
            <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80">
              ••••••••••••
            </div>
          </div>
          <button className="w-full bg-green-400 text-white rounded py-2 mt-4">
            Create account
          </button>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    title: 'Complete Your Management Process',
    description: 'Create a management account for the process.',
    screenshot: (
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
        <h3 className="text-white font-semibold">Complete Your Setup</h3>
        <p className="text-white/60 text-sm">Set up your management information to get started.</p>
        <div className="space-y-3">
          <div>
            <label className="text-white/60 text-sm">Organization Name</label>
            <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80">
              Enter your organization name.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/60 text-sm">Number of Coaches</label>
              <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80">
                0
              </div>
            </div>
            <div>
              <label className="text-white/60 text-sm">Number of Students</label>
              <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80">
                0
              </div>
            </div>
          </div>
          <div>
            <label className="text-white/60 text-sm">Logo (Optional)</label>
            <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-6 text-center text-white/60">
              Upload your organization logo
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: 'Add the Management data in platform',
    description: 'Enjoy the simplicity of a platform that makes every insight valuable.',
    screenshot: (
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-white font-semibold mb-2">Create New Student</h3>
            <p className="text-white/60 text-sm mb-4">Add a new student to this class.</p>
            <div className="space-y-3">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white">
                  ST
                </div>
              </div>
              <div>
                <label className="text-white/60 text-sm">Student Name*</label>
                <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80 text-sm">
                  e.g., John Doe
                </div>
              </div>
              <div>
                <label className="text-white/60 text-sm">Email*</label>
                <div className="mt-1 bg-white/5 border border-white/10 rounded px-4 py-2 text-white/80 text-sm">
                  e.g., john.doe@example.com
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-white/10 text-white rounded py-2 text-sm">Cancel</button>
                <button className="flex-1 bg-green-400 text-white rounded py-2 text-sm">Create</button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-30">
          <div className="text-white/60 text-xs mb-2">Name | Email | Phone | Batch | Action</div>
          <div className="space-y-1 text-xs text-white/40">
            <div>Shaurya Kumar | STU_6701 | Test-batch</div>
            <div>Student 2 | STU_6702 | Batch-2</div>
          </div>
        </div>
      </div>
    ),
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            A simple, fast, and secure platform to manage your educational data in just a few steps.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Create account now
            <motion.svg
              width="16"
              height="16"
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
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white text-2xl font-bold mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 mb-6 text-sm md:text-base">
                  {step.description}
                </p>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.screenshot}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

