import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code, Layers } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const PlayStoreIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const AppStoreIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.099,22C7.789,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
);

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { isDark } = useTheme();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Karmanisht',
      subtitle: 'Multi Local Service Provider App',
      description: 'Built a multi-category local services marketplace app connecting users with various local service providers. Developed backend APIs with Node.js and PostgreSQL for bookings, service listings, and provider management.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase'],
      link: 'https://karmanisht.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.karmanisht',
      appStore: 'https://apps.apple.com/in/app/karmanisht/id6781247473',
      github: null,
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      glowColor: 'rgba(59,130,246,0.5)',
      accentColor: '#3b82f6',
      bgPattern: '📱',
      features: ['Multi Local Marketplace', 'Provider Management', 'Bookings & Listings API', 'Live on Play & App Store'],
    },
    {
      id: 2,
      title: 'Hindustan Mart',
      subtitle: 'E-Commerce Platform',
      description: 'Built a full-fledged e-commerce mobile app covering all product categories, from browsing to checkout. Implemented backend order, product, and catalog management using Node.js and PostgreSQL.',
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'PostgreSQL', 'Firebase'],
      link: 'https://hindustanmart.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.hindustaanmart&hl=en_IN',
      appStore: 'https://apps.apple.com/in/app/hindustaan-mart/id6781711735',
      github: null,
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glowColor: 'rgba(139,92,246,0.5)',
      accentColor: '#8b5cf6',
      bgPattern: '🛒',
      features: ['Mobile E-Commerce App', 'Catalog & Orders', 'PostgreSQL Backend', 'Live on Play & App Store'],
    },
    {
      id: 3,
      title: 'Edusathi LMS',
      subtitle: 'Learning Management System',
      description: 'Built a multi-tenant SAAS LMS for schools, colleges, and institutes with course, batch, student, exam, result, and promotion management. Implemented complete academic lifecycle including enrollment, marks entry, result publishing, and live-wise student promotion.',
      tech: ['MERN', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://edusathi.net',
      playStore: null,
      appStore: null,
      github: null,
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      glowColor: 'rgba(16,185,129,0.5)',
      accentColor: '#10b981',
      bgPattern: '🎓',
      features: ['Multi-tenant SAAS LMS', 'Academic Lifecycle', 'Exam & Results', 'Student Promotion'],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0a0a1a 0%, #050510 100%)'
          : 'linear-gradient(180deg, #f5f0ff 0%, #f0f4ff 100%)',
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
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium"
            style={{
              background: isDark ? 'rgba(245,158,11,0.1)' : 'rgba(245,158,11,0.08)',
              border: isDark ? '1px solid rgba(245,158,11,0.3)' : '1px solid rgba(245,158,11,0.3)',
              color: isDark ? '#fbbf24' : '#d97706',
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <Code size={14} />
            projects.config.ts
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: isDark
                ? 'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)'
                : 'linear-gradient(135deg, #2563eb, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
            }}
          >
            Featured Projects
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
          <p
            className={`mt-4 max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Real-world projects built with modern tech stacks, deployed and actively used.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Glow effect on hover */}
              {isDark && hoveredId === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -inset-1 rounded-3xl"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.glowColor}, transparent 70%)`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                />
              )}

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full rounded-3xl overflow-hidden flex flex-col"
                style={{
                  background: isDark ? 'rgba(13,13,32,0.85)' : 'rgba(255,255,255,0.95)',
                  border: hoveredId === project.id
                    ? isDark
                      ? `1px solid ${project.accentColor}60`
                      : `1px solid ${project.accentColor}40`
                    : isDark
                      ? '1px solid rgba(255,255,255,0.06)'
                      : '1px solid rgba(59,130,246,0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: hoveredId === project.id
                    ? isDark
                      ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${project.glowColor}`
                      : `0 20px 60px ${project.accentColor}20`
                    : isDark
                      ? '0 8px 32px rgba(0,0,0,0.4)'
                      : '0 8px 32px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Project Header / Banner */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 20px,
                        rgba(255,255,255,0.1) 20px,
                        rgba(255,255,255,0.1) 40px
                      )`,
                    }}
                  />
                  <div className="relative text-center">
                    <div className="text-5xl mb-2">{project.bgPattern}</div>
                    <span
                      className="text-white/80 text-xs font-medium uppercase tracking-widest"
                      style={{ fontFamily: "'Fira Code', monospace" }}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Tech badge */}
                  <div className="absolute top-4 right-4">
                    <Layers size={18} className="text-white/60" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-4 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.features.map(feature => (
                      <span
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-lg font-medium"
                        style={{
                          background: isDark
                            ? `${project.accentColor}18`
                            : `${project.accentColor}12`,
                          color: project.accentColor,
                          border: `1px solid ${project.accentColor}30`,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-5">
                    <p
                      className={`text-xs mb-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                      style={{ fontFamily: "'Fira Code', monospace" }}
                    >
                      // stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-lg"
                          style={{
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            color: isDark ? '#9ca3af' : '#6b7280',
                            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                            fontFamily: "'Fira Code', monospace",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2.5">
                    {/* Primary Web Link */}
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                        style={{
                          background: project.gradient,
                          boxShadow: isDark ? `0 4px 15px ${project.glowColor}` : `0 4px 15px ${project.accentColor}30`,
                        }}
                      >
                        <ExternalLink size={15} />
                        Website ({new URL(project.link).hostname})
                      </motion.a>
                    ) : (
                      <div
                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          color: isDark ? '#6b7280' : '#9ca3af',
                          border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                        }}
                      >
                        <span>🔒 Private Project</span>
                      </div>
                    )}

                    {/* App Store & Play Store Links if available */}
                    {(project.playStore || project.appStore) && (
                      <div className="flex gap-2">
                        {project.playStore && (
                          <motion.a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300"
                            style={{
                              background: isDark ? 'rgba(59,130,246,0.12)' : 'rgba(59,130,246,0.08)',
                              border: isDark ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(59,130,246,0.25)',
                              color: isDark ? '#60a5fa' : '#2563eb',
                            }}
                          >
                            <PlayStoreIcon size={14} />
                            Play Store
                          </motion.a>
                        )}
                        {project.appStore && (
                          <motion.a
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300"
                            style={{
                              background: isDark ? 'rgba(168,85,247,0.12)' : 'rgba(168,85,247,0.08)',
                              border: isDark ? '1px solid rgba(168,85,247,0.3)' : '1px solid rgba(168,85,247,0.25)',
                              color: isDark ? '#c084fc' : '#9333ea',
                            }}
                          >
                            <AppStoreIcon size={14} />
                            App Store
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/shubh7470"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            style={{
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.12)',
              color: isDark ? '#e2e8f0' : '#374151',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
