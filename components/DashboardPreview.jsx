'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const DashboardPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const dashboardSections = [
    {
      title: 'Dashboard - Overview & Quick Stats',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609687/Screenshot_2025-12-25_at_12.36.13_AM_krdztq.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          ),
          title: 'Comprehensive Dashboard Overview',
          description: 'Get instant visibility into all key metrics—total students, attendance rates, upcoming tests, and recent activities—all in one centralized view.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          ),
          title: 'Real-Time Activity Feed',
          description: 'Monitor recent student activities, attendance changes, and test submissions as they happen with live updates and notifications.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          ),
          title: 'Quick Action Center',
          description: 'Access frequently used actions like marking attendance, adding students, or generating reports with one-click shortcuts.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          ),
          title: 'Alerts & Notifications Hub',
          description: 'Stay informed with smart alerts for low attendance, upcoming deadlines, and students requiring attention.',
        },
      ],
    },
    {
      title: 'Dashboard - Attendance & Performance Insights',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609687/Screenshot_2025-12-25_at_12.38.57_AM_t7u1py.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          ),
          title: 'Monthly Attendance Tracking',
          description: 'Visualize attendance patterns with interactive donut charts showing present, absent, and late days. Track trends across weeks and months.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="20" x2="12" y2="10"/>
              <line x1="18" y1="20" x2="18" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="16"/>
            </svg>
          ),
          title: 'Test Results Analytics',
          description: 'Analyze test performance with detailed breakdowns by subject, date, and difficulty. View average scores, highest marks, and performance trends.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          ),
          title: 'Performance Correlation Insights',
          description: 'Discover how attendance impacts test scores with AI-powered correlation analysis and predictive insights.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          ),
          title: 'Automated Parent Alerts',
          description: 'Set up automatic notifications to parents when attendance drops below thresholds or performance declines.',
        },
      ],
    },
    {
      title: 'Dashboard - AI-Powered Report Generation',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609685/Screenshot_2025-12-25_at_2.18.08_AM_nxyjga.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          ),
          title: 'AI Copilot Assistant',
          description: 'Ask natural language questions like "Show top 10 students" or "Generate quarterly report" and get instant, intelligent responses with comprehensive data analysis.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          ),
          title: 'Instant Report Generation',
          description: 'Create professional student performance reports in seconds with AI-generated insights, recommendations, and formatted summaries ready for export.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          ),
          title: 'Multi-Format Export',
          description: 'Export generated reports to PDF, Word, or Excel with one click. Customize templates and branding for professional documentation.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          ),
          title: 'Performance Predictions',
          description: 'Get AI-driven predictions about future performance based on historical trends, attendance patterns, and engagement levels.',
        },
      ],
    },
    {
      title: 'Dashboard - Attendance Insights & Trends',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609686/Screenshot_2025-12-25_at_2.20.20_AM_rmbt0e.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          ),
          title: 'Geographic Attendance Patterns',
          description: 'Identify attendance trends by location, transport routes, and time zones. Understand which students face logistical challenges.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          ),
          title: 'Daily & Weekly Patterns',
          description: 'Analyze attendance by day of week, time of day, and seasonal trends. Spot patterns like Monday absences or pre-holiday dips.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          ),
          title: 'Early Warning Indicators',
          description: 'Receive alerts when students show declining attendance patterns. AI predicts chronic absenteeism before it becomes critical.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          ),
          title: 'Group Attendance Comparison',
          description: 'Compare attendance rates across classes, sections, and teacher groups. Identify high-performing classes and those needing support.',
        },
      ],
    },
    {
      title: 'Dashboard - Performance Analytics',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609952/Screenshot_2025-12-25_at_2.29.04_AM_v7r0r2.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          ),
          title: 'Multi-Dimensional Performance Charts',
          description: 'Visualize student performance across subjects, tests, and time periods with interactive bar charts, line graphs, and heat maps.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          ),
          title: 'Trend Analysis & Forecasting',
          description: 'Track performance trends over weeks and months. AI forecasts future scores based on current trajectory and study patterns.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          ),
          title: 'Subject-Wise Breakdown',
          description: 'Analyze performance by subject with detailed metrics on strengths, weaknesses, and improvement areas for each student.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
          ),
          title: 'Peer Comparison Insights',
          description: 'Compare individual performance against class averages, percentile rankings, and similar student cohorts while maintaining privacy.',
        },
      ],
    },
    {
      title: 'Dashboard - Analytics & Visualization',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609685/Screenshot_2025-12-25_at_2.21.13_AM_iinixy.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          ),
          title: 'Interactive Data Visualizations',
          description: 'Explore data with interactive charts—zoom, filter, and drill down into specific metrics. Customize views for different stakeholders.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          ),
          title: 'Customizable Dashboards',
          description: 'Create personalized dashboards for teachers, admins, and parents. Drag, drop, and resize widgets to show relevant metrics.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          ),
          title: 'Data Export & Sharing',
          description: 'Export charts and data in multiple formats (PNG, PDF, CSV, Excel). Share insights securely with stakeholders.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          ),
          title: 'Real-Time Data Updates',
          description: 'All charts and metrics update in real-time as new data flows in. No manual refresh needed—always see the latest information.',
        },
      ],
    },
    {
      title: 'Dashboard - Student Data Management',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609685/Screenshot_2025-12-25_at_2.21.53_AM_zuqblp.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          ),
          title: 'Comprehensive Student Profiles',
          description: 'View and edit complete student information including personal details, contact info, emergency contacts, and medical records in organized tables.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          ),
          title: 'Advanced Search & Filtering',
          description: 'Find students instantly with powerful search across multiple fields. Filter by class, section, performance, attendance, or custom criteria.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
            </svg>
          ),
          title: 'Bulk Data Operations',
          description: 'Perform actions on multiple students at once—update classes, send notifications, export data, or assign tasks to entire groups efficiently.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="21 8 21 21 3 21 3 8"/>
              <rect x="1" y="3" width="22" height="5"/>
              <line x1="10" y1="12" x2="14" y2="12"/>
            </svg>
          ),
          title: 'Data Import & Export',
          description: 'Import student data from Excel or CSV files. Export to multiple formats with custom field selection and formatting options.',
        },
      ],
    },
    {
      title: 'Dashboard - Class & Section Management',
      imageUrl: 'https://res.cloudinary.com/difauucm4/image/upload/v1766609685/Screenshot_2025-12-25_at_2.22.57_AM_pfoxjn.png',
      features: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          ),
          title: 'Teacher & Coach Assignment',
          description: 'Assign and manage teachers, coaches, and mentors for each class and section. Track workload distribution and subject expertise.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          ),
          title: 'Class Structure Organization',
          description: 'Create and manage class hierarchies, sections, and groups. Set up timetables, room assignments, and capacity limits per section.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <polyline points="16 11 18 13 22 9"/>
            </svg>
          ),
          title: 'Student-Section Mapping',
          description: 'Assign students to appropriate sections based on performance, preferences, or administrative rules. Handle section transfers seamlessly.',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          ),
          title: 'Resource Allocation',
          description: 'Manage classroom resources, equipment, and materials allocation across sections. Track availability and maintenance schedules.',
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dashboardSections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dashboardSections.length) % dashboardSections.length);
  };

  const currentSection = dashboardSections[currentSlide];

  return (
    <section id="features" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Green Gradient Effect Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-green-500/10 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Features of the Product
          </h2>
        </motion.div>

        {/* Dashboard Section Title with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 flex items-center justify-between"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white/90">
            {currentSection.title}
          </h3>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 bg-white/10 hover:bg-white/20 cursor-pointer"
              aria-label="Previous section"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12.5 15L7.5 10L12.5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
            <span className="text-white/60 text-sm min-w-[3rem] text-center">
              {currentSlide + 1} / {dashboardSections.length}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 bg-white/10 hover:bg-white/20 cursor-pointer"
              aria-label="Next section"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7.5 15L12.5 10L7.5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Two Column Layout with Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 items-start"
            >
              {/* Left Side - Feature Boxes (All 4) */}
              <div className="flex flex-col gap-4">
                {currentSection.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon in Square Container */}
                      <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white flex-shrink-0 bg-white/5">
                        <div className="w-5 h-5">
                          {feature.icon}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Side - Dashboard Image (Larger) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative w-full rounded-2xl overflow-visible shadow-2xl border border-white/10 lg:sticky lg:top-24"
              >
                <div className="relative w-full h-auto">
                  <Image
                    src={currentSection.imageUrl}
                    alt={currentSection.title}
                    width={2880}
                    height={1608}
                    className="w-full h-auto object-contain rounded-2xl"
                    priority={currentSlide === 0}
                    unoptimized
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
