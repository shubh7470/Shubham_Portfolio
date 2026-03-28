import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code, Layers } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { isDark } = useTheme();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Edusathi LMS',
      subtitle: 'Learning Management System',
      description: 'A multi-tenant SAAS LMS for schools, colleges, and institutes. Features complete academic lifecycle including enrollment, exams, marks, result publishing, and level-wise student promotion.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      link: 'https://edusathi.net',
      github: null,
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      glowColor: 'rgba(59,130,246,0.5)',
      accentColor: '#3b82f6',
      bgPattern: '🎓',
      features: ['Multi-tenant SAAS', 'Batch Management', 'Exam & Results', 'Student Promotion'],
    },
    {
      id: 2,
      title: 'ShubhMart',
      subtitle: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with admin panel for product management, Razorpay payment integration, and enhanced UX with dynamic carts and wishlists.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Bootstrap', 'Razorpay API'],
      link: 'https://shubhmart.vercel.app',
      github: 'https://github.com/shubh7470',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glowColor: 'rgba(139,92,246,0.5)',
      accentColor: '#8b5cf6',
      bgPattern: '🛒',
      features: ['Admin Dashboard', 'Razorpay Payments', 'Dynamic Cart', 'Wishlist'],
    },
    {
      id: 3,
      title: 'BookurEvents',
      subtitle: 'Event Planning Platform',
      description: 'Full-stack event planning platform connecting users with vendors and venues. Features vendor authentication, slot management, live search, and seamless booking experience.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      link: null,
      github: null,
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      glowColor: 'rgba(245,158,11,0.5)',
      accentColor: '#f59e0b',
      bgPattern: '🎪',
      features: ['Vendor Auth', 'Slot Management', 'Live Search', 'Event Booking'],
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
                  <div className="flex gap-3">
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                        style={{
                          background: project.gradient,
                          boxShadow: isDark ? `0 4px 15px ${project.glowColor}` : `0 4px 15px ${project.accentColor}30`,
                        }}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.a>
                    ) : (
                      <div
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          color: isDark ? '#6b7280' : '#9ca3af',
                          border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                        }}
                      >
                        <span>🔒 Private Project</span>
                      </div>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="p-2.5 rounded-xl transition-all duration-300"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                          border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                          color: isDark ? '#9ca3af' : '#6b7280',
                        }}
                      >
                        <Github size={18} />
                      </motion.a>
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
