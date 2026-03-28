import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'GS3 Solution Pvt. Ltd.',
      location: 'Kolkata, West Bengal',
      period: 'Apr 2025 – Present',
      type: 'Full-time',
      status: 'current',
      color: '#3b82f6',
      glow: 'rgba(59,130,246,0.5)',
      description: [
        'Led a development team to design and build scalable web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js).',
        'Collaborated with cross-functional teams to integrate AI-driven features improving system efficiency and user engagement by 40%.',
        'Managed full project lifecycle: UI/UX design → backend development → cloud deployment.',
        'Implemented CI/CD pipelines and optimized API performance reducing response times significantly.',
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Express.js', 'Docker', 'AI/ML APIs'],
    },
  ];

  const cardStyle = {
    background: isDark ? 'rgba(13,13,32,0.8)' : 'rgba(255,255,255,0.95)',
    border: isDark ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(59,130,246,0.2)',
    backdropFilter: 'blur(20px)',
    boxShadow: isDark
      ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.1)'
      : '0 20px 60px rgba(59,130,246,0.1)',
  };

  return (
    <section
      id="experience"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #080818 0%, #0a0a1a 100%)'
          : 'linear-gradient(180deg, #e8eeff 0%, #f5f0ff 100%)',
        padding: '6rem 0',
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
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
              background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
              border: isDark ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(59,130,246,0.25)',
              color: isDark ? '#60a5fa' : '#2563eb',
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <Briefcase size={14} />
            experience.json
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
            Work Experience
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
        </motion.div>

        {/* Experience Cards */}
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow effect */}
            {isDark && (
              <div
                className="absolute -inset-1 rounded-3xl opacity-30"
                style={{
                  background: `radial-gradient(ellipse at top left, ${exp.glow}, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
            )}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl p-8 md:p-10"
              style={cardStyle}
            >
              {/* Current badge */}
              {exp.status === 'current' && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.35)',
                    color: '#10b981',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Currently Working
                </motion.div>
              )}

              {/* Header */}
              <div className="flex items-start gap-5 mb-7">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}, #8b5cf6)`,
                    boxShadow: isDark ? `0 8px 24px ${exp.glow}` : `0 8px 24px ${exp.color}33`,
                  }}
                >
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="font-semibold text-base mb-2"
                    style={{
                      background: `linear-gradient(90deg, ${exp.color}, #8b5cf6)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span
                      className="flex items-center gap-1.5 text-sm"
                      style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                    >
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-sm"
                      style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                    >
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span
                      className="text-sm px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${exp.color}20`,
                        color: exp.color,
                        border: `1px solid ${exp.color}40`,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mb-6 h-px"
                style={{
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)'
                    : 'linear-gradient(90deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2), transparent)',
                }}
              />

              {/* Responsibilities */}
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} style={{ color: exp.color }} />
                  <h4
                    className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Key Responsibilities
                  </h4>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((desc, di) => (
                    <motion.li
                      key={di}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.5 + di * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: exp.color }}
                      />
                      <span
                        className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        {desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4
                  className={`font-semibold mb-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  // Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, ti) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.7 + ti * 0.05 }}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                      style={{
                        background: isDark
                          ? `linear-gradient(135deg, ${exp.color}18, rgba(139,92,246,0.15))`
                          : `linear-gradient(135deg, ${exp.color}12, rgba(139,92,246,0.1))`,
                        border: isDark
                          ? `1px solid ${exp.color}35`
                          : `1px solid ${exp.color}30`,
                        color: isDark ? '#c4b5fd' : '#5b21b6',
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-8 text-sm"
          style={{
            color: isDark ? 'rgba(139,92,246,0.6)' : 'rgba(59,130,246,0.6)',
            fontFamily: "'Fira Code', monospace",
          }}
        >
          // More experience being added as career grows...
        </motion.p>
      </motion.div>
    </section>
  );
}
