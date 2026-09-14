import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code, Layers, X, Sparkles, CheckCircle2, Smartphone, Monitor, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const PlayStoreIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const AppStoreIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.099,22C7.789,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
);

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  category: 'mobile' | 'web';
  badge: string;
  description: string;
  longDescription: string;
  tech: string[];
  link: string | null;
  playStore: string | null;
  appStore: string | null;
  github: string | null;
  gradient: string;
  glowColor: string;
  accentColor: string;
  mockType: 'mobile' | 'browser';
  features: string[];
  highlights: string[];
  statsPill: string;
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { isDark } = useTheme();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'mobile' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'architecture' | 'stack'>('overview');

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Karmanisht',
      subtitle: 'Multi Local Service Provider App',
      category: 'mobile',
      badge: 'Live Production App',
      description: 'Multi-category hyper-local services marketplace app connecting customers with local service providers. Features real-time provider listings, dynamic booking slots, and push notifications.',
      longDescription: 'Karmanisht is a full-featured hyper-local service marketplace platform engineered with React Native and Node.js. It features real-time provider discovery, booking scheduling, push notifications, customer reviews, and administrative dashboards.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase'],
      link: 'https://karmanisht.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.karmanisht',
      appStore: 'https://apps.apple.com/in/app/karmanisht/id6781247473',
      github: null,
      gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
      glowColor: 'rgba(37,99,235,0.4)',
      accentColor: '#3b82f6',
      mockType: 'mobile',
      features: ['Local Service Discovery', 'Provider Management', 'Real-time Booking APIs', 'Live Dual Store Release'],
      highlights: [
        'Designed high-performance REST APIs managing service catalog, provider schedules, and customer bookings.',
        'Engineered cross-platform mobile app client using React Native Expo with native device integration.',
        'Integrated Firebase Cloud Messaging for real-time status alerts and push notifications.',
        'Successfully published and maintained on both Google Play Store and Apple App Store.',
      ],
      statsPill: '⭐ Live on App & Play Store',
    },
    {
      id: 2,
      title: 'Hindustaan Mart',
      subtitle: 'Full E-Commerce Platform',
      category: 'mobile',
      badge: 'Live E-Commerce App',
      description: 'E-commerce mobile platform spanning multiple product categories. Built full shopping experience including product catalog, search filters, cart checkout pipeline, and order tracking.',
      longDescription: 'Hindustaan Mart is a comprehensive mobile shopping application. It features fast product catalog searching, dynamic address management, coupon application, cart checkout, and backend order processing powered by Node.js & PostgreSQL.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase'],
      link: 'https://hindustaanmart.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.hindustaanmart&hl=en_IN',
      appStore: 'https://apps.apple.com/in/app/hindustaan-mart/id6781711735',
      github: null,
      gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
      glowColor: 'rgba(124,58,237,0.4)',
      accentColor: '#8b5cf6',
      mockType: 'mobile',
      features: ['Multi-Category Catalog', 'Cart & Order Pipeline', 'PostgreSQL Inventory', 'Live Dual Store Release'],
      highlights: [
        'Optimized database queries in PostgreSQL for instant multi-category inventory lookups.',
        'Built full mobile checkout flow with address validation, order verification, and cart persistence.',
        'Published live across both Google Play Store and Apple App Store.',
      ],
      statsPill: '🛒 Full E-Commerce Stack',
    },
    {
      id: 3,
      title: 'Edusathi LMS',
      subtitle: 'Enterprise SAAS LMS Platform',
      category: 'web',
      badge: 'Multi-Tenant SAAS',
      description: 'Multi-tenant Educational LMS for institutes, schools, and colleges. Automates complete academic lifecycle: course batches, exams, student promotions, marks publishing, and report cards.',
      longDescription: 'Edusathi LMS is an enterprise multi-tenant SAAS learning management system. Built with Next.js and MERN stack, it automates academic institutional management including batch creation, exam schedules, automated student promotion, and gradebook publishing.',
      tech: ['MERN', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://edusathi.net',
      playStore: null,
      appStore: null,
      github: null,
      gradient: 'linear-gradient(135deg, #059669, #0d9488)',
      glowColor: 'rgba(5,150,105,0.4)',
      accentColor: '#10b981',
      mockType: 'browser',
      features: ['Multi-Tenant SAAS Architecture', 'Academic Student Promotions', 'Exam & Marks Publishing', 'Enterprise Gradebook'],
      highlights: [
        'Architected tenant isolation logic enabling educational institutes to run with isolated subdomains.',
        'Built student lifecycle automation covering enrollment, grade entry, and automated class promotion.',
        'Delivered high-speed Next.js frontend with Tailwind CSS.',
      ],
      statsPill: '🎓 Multi-Tenant SAAS',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      style={{
        background: 'transparent',
        padding: '6rem 0',
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-xs font-medium"
            style={{
              background: isDark ? 'rgba(245,158,11,0.1)' : 'rgba(245,158,11,0.08)',
              border: isDark ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(245,158,11,0.3)',
              color: isDark ? '#fbbf24' : '#d97706',
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <Code size={14} />
            featured_projects.ts
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              background: isDark
                ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)'
                : 'linear-gradient(135deg, #2563eb, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.75rem',
            }}
          >
            Featured Applications & Products
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full mb-4"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
          <p className={`max-w-xl mx-auto text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Production mobile and web platforms built with modern technology stacks, deployed and actively serving users.
          </p>

          {/* Category Filter Pills */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {[
              { id: 'all', label: 'All Stack', icon: Layers },
              { id: 'mobile', label: 'Mobile Apps (iOS & Android)', icon: Smartphone },
              { id: 'web', label: 'Web Platforms & SAAS', icon: Monitor },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeCategory === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                      : isDark
                      ? 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                      : 'bg-black/5 text-gray-600 hover:text-gray-900 border border-black/10'
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative flex flex-col"
              >
                {/* Glow Backdrop */}
                {isDark && hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -inset-1 rounded-3xl"
                    style={{
                      background: `radial-gradient(ellipse at center, ${project.glowColor}, transparent 70%)`,
                      filter: 'blur(20px)',
                      zIndex: -1,
                    }}
                  />
                )}

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.85), rgba(15, 23, 42, 0.9))'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.9))',
                    border: hoveredId === project.id
                      ? `1px solid ${project.accentColor}`
                      : isDark
                      ? '1px solid rgba(255, 255, 255, 0.08)'
                      : '1px solid rgba(226, 232, 240, 0.8)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: hoveredId === project.id
                      ? isDark
                        ? `0 20px 50px rgba(0,0,0,0.5), 0 0 25px ${project.glowColor}`
                        : `0 20px 40px ${project.accentColor}20`
                      : isDark
                      ? '0 12px 35px rgba(0,0,0,0.3)'
                      : '0 12px 30px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Top Product Header Window Mockup Frame */}
                  <div
                    className="relative h-48 p-4 flex flex-col justify-between overflow-hidden"
                    style={{ background: project.gradient }}
                  >
                    {/* Device Bar Header Mockup */}
                    <div className="flex items-center justify-between z-10">
                      {project.mockType === 'browser' ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-[11px] font-mono">
                          <Smartphone size={12} /> iOS & Android
                        </div>
                      )}

                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    {/* Middle Card Title Banner */}
                    <div className="z-10 mt-auto">
                      <span className="text-xs font-mono uppercase tracking-wider text-white/80 block mb-1">
                        {project.subtitle}
                      </span>
                      <h3
                        className="text-2xl font-extrabold text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Subtle Overlay Lines */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 15px,
                          rgba(255,255,255,0.15) 15px,
                          rgba(255,255,255,0.15) 30px
                        )`,
                      }}
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.features.map(f => (
                          <span
                            key={f}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                            style={{
                              background: isDark ? `${project.accentColor}18` : `${project.accentColor}12`,
                              color: project.accentColor,
                              border: `1px solid ${project.accentColor}30`,
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-700/30 mb-5">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded-md font-mono"
                            style={{
                              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                              color: isDark ? '#9ca3af' : '#6b7280',
                              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white transition-all shadow-md"
                            style={{ background: project.gradient }}
                          >
                            <Globe size={14} /> Website
                          </motion.a>
                        )}

                        {project.playStore && (
                          <motion.a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="p-2.5 rounded-xl flex items-center justify-center text-blue-400 bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20"
                            title="Play Store"
                          >
                            <PlayStoreIcon size={16} />
                          </motion.a>
                        )}

                        {project.appStore && (
                          <motion.a
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="p-2.5 rounded-xl flex items-center justify-center text-purple-400 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20"
                            title="App Store"
                          >
                            <AppStoreIcon size={16} />
                          </motion.a>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1 text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-colors"
                        >
                          Details <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/shubh7470"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg"
            style={{
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.12)',
              color: isDark ? '#e2e8f0' : '#374151',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Github size={18} />
            Explore More Repositories on GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl my-8"
              style={{
                background: isDark ? '#0d111e' : '#ffffff',
                border: `1.5px solid ${selectedProject.accentColor}60`,
                color: isDark ? '#e2e8f0' : '#1e293b',
              }}
            >
              {/* Header Banner */}
              <div
                className="relative h-44 flex flex-col justify-between p-6 text-white"
                style={{ background: selectedProject.gradient }}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-black/30 backdrop-blur-md">
                    {selectedProject.badge}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="z-10">
                  <h3 className="text-3xl font-extrabold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-white/90 font-medium">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Modal Tabs Bar */}
              <div className="flex border-b border-gray-700/30 px-6 pt-4 gap-4 bg-black/10">
                {[
                  { id: 'overview', label: 'Overview & Features' },
                  { id: 'architecture', label: 'Architecture & Impact' },
                  { id: 'stack', label: 'Tech Stack' },
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setModalTab(t.id as any)}
                    className={`pb-3 text-xs font-semibold border-b-2 transition-colors ${
                      modalTab === t.id
                        ? 'border-purple-500 text-purple-400'
                        : 'border-transparent text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {modalTab === 'overview' && (
                  <div className="space-y-4">
                    <p className="leading-relaxed text-sm sm:text-base opacity-90">
                      {selectedProject.longDescription}
                    </p>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
                        Core Capabilities
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {selectedProject.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-xs p-2 rounded-lg bg-black/10 dark:bg-white/5">
                            <ShieldCheck size={14} style={{ color: selectedProject.accentColor }} />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {modalTab === 'architecture' && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
                      Key Technical Accomplishments
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {modalTab === 'stack' && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
                      Engineering Stack & Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg font-mono font-semibold"
                          style={{
                            background: isDark ? 'rgba(139,92,246,0.15)' : 'rgba(59,130,246,0.1)',
                            color: isDark ? '#c084fc' : '#2563eb',
                            border: isDark ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(59,130,246,0.25)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-gray-700/40 flex flex-wrap gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
                      style={{ background: selectedProject.gradient }}
                    >
                      <Globe size={16} /> Visit Production Site
                    </a>
                  )}

                  {selectedProject.playStore && (
                    <a
                      href={selectedProject.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-transform hover:scale-105"
                    >
                      <PlayStoreIcon size={16} /> Google Play
                    </a>
                  )}

                  {selectedProject.appStore && (
                    <a
                      href={selectedProject.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-transform hover:scale-105"
                    >
                      <AppStoreIcon size={16} /> App Store
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
