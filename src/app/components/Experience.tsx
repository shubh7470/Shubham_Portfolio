import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Trophy, Sparkles, Building2, ExternalLink, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  status: 'current' | 'completed';
  color: string;
  glow: string;
  badgeText: string;
  summary: string;
  description: string[];
  tech: string[];
  metrics: string[];
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { isDark } = useTheme();
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Hindustan Innovation Pvt. Ltd.',
      location: 'Raipur, C.G',
      period: 'Apr 2026 – Present',
      type: 'Full-time',
      status: 'current',
      color: '#10b981',
      glow: 'rgba(16,185,129,0.35)',
      badgeText: 'Active / Present',
      summary: 'Building & deploying production React Native & Node.js/PostgreSQL apps live on Play & App Store.',
      description: [
        'Developed and deployed 2 full-stack mobile applications (React Native + Expo) live on Play Store and App Store.',
        'Built and maintained backend microservices using Node.js, PostgreSQL, and Redis caching for multiple production apps.',
        'Worked across full product lifecycle — API design, DB schema, mobile client UI, and app store releases.',
        'Collaborated with team to architect multi-category local service marketplace and e-commerce platforms.',
      ],
      tech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Redis'],
      metrics: ['2 Apps Live on Stores', 'Full Stack Owner'],
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'GS3 Solution Pvt. Ltd.',
      location: 'Kolkata, W.B',
      period: 'Apr 2025 – Mar 2026',
      type: 'Full-time',
      status: 'completed',
      color: '#3b82f6',
      glow: 'rgba(59,130,246,0.35)',
      badgeText: '1 Year Exp',
      summary: 'Led MERN stack engineering team building scalable web apps with AI-driven features.',
      description: [
        'Led development team to architect and engineer scalable web applications leveraging MERN Stack.',
        'Collaborated with cross-functional teams to integrate AI-driven features improving overall operational efficiency.',
        'Managed end-to-end development cycle from wireframe prototyping to cloud deployment.',
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AI Features'],
      metrics: ['Team Lead', 'MERN Architecture'],
    },
    {
      id: 3,
      role: 'Full Stack Intern',
      company: 'Toscall Private Limited',
      location: 'Bhilai, C.G',
      period: 'Sep 2024 – Mar 2025',
      type: 'Internship',
      status: 'completed',
      color: '#8b5cf6',
      glow: 'rgba(139,92,246,0.35)',
      badgeText: '7 Months Intern',
      summary: 'Hands-on MERN API development, front-end integration, and agile sprint workflows.',
      description: [
        'Hands-on engineering with MERN Stack (MongoDB, Express.js, React.js, Node.js) on live client applications.',
        'Engineered and stress-tested REST APIs and responsive UI components under senior engineering mentorship.',
        'Mastered Git version control workflows, automated testing, and collaborative agile sprints.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      metrics: ['API Engineering', 'Agile Sprints'],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden"
      style={{
        background: 'transparent',
        padding: '5rem 0',
      }}
    >

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 text-xs font-medium"
            style={{
              background: isDark ? 'rgba(59,130,246,0.12)' : 'white',
              border: isDark ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(59,130,246,0.2)',
              color: isDark ? '#60a5fa' : '#2563eb',
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <Trophy size={14} />
            career_history.ts
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
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
            Work Experience
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
        </motion.div>

        {/* Compact 3-Column Equal Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedExp(exp)}
              className="group relative rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(15,15,35,0.85), rgba(10,10,25,0.9))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,244,255,0.9))',
                border: isDark ? `1px solid ${exp.color}35` : `1px solid ${exp.color}25`,
                backdropFilter: 'blur(20px)',
                boxShadow: isDark
                  ? `0 12px 35px rgba(0,0,0,0.4), 0 0 20px ${exp.glow}`
                  : '0 12px 30px rgba(59,130,246,0.06)',
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                style={{ background: exp.color }}
              />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-mono font-semibold"
                    style={{
                      background: `${exp.color}18`,
                      color: exp.color,
                      border: `1px solid ${exp.color}35`,
                    }}
                  >
                    {exp.period}
                  </span>

                  {exp.status === 'current' ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/15 text-green-400 border border-green-500/30">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <h3
                  className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {exp.role}
                </h3>

                <div className="flex items-center gap-1.5 text-sm font-semibold mb-3" style={{ color: exp.color }}>
                  <Building2 size={15} />
                  <span>{exp.company}</span>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.summary}
                </p>

                {/* Metrics Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.metrics.map(m => (
                    <span
                      key={m}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg flex items-center gap-1"
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                        color: isDark ? '#d1d5db' : '#374151',
                      }}
                    >
                      <Sparkles size={10} style={{ color: exp.color }} />
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-700/30 mb-4">
                  {exp.tech.slice(0, 4).map(tech => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-md font-mono"
                      style={{
                        background: isDark ? 'rgba(139,92,246,0.12)' : 'rgba(59,130,246,0.08)',
                        color: isDark ? '#c084fc' : '#2563eb',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.tech.length > 4 && (
                    <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      +{exp.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action CTA */}
                <div
                  className="flex items-center justify-between text-xs font-semibold pt-1"
                  style={{ color: exp.color }}
                >
                  <span>View Role Breakdown</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Lightbox on Click */}
        <AnimatePresence>
          {selectedExp && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedExp(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
                style={{
                  background: isDark ? '#0d0d20' : '#ffffff',
                  border: `1.5px solid ${selectedExp.color}60`,
                  color: isDark ? '#e2e8f0' : '#1e293b',
                }}
              >
                {/* Modal Top Bar Accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: selectedExp.color }}
                />

                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="mb-6 pt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-mono font-semibold"
                      style={{
                        background: `${selectedExp.color}20`,
                        color: selectedExp.color,
                      }}
                    >
                      {selectedExp.period}
                    </span>
                    <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      • {selectedExp.location} ({selectedExp.type})
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {selectedExp.role}
                  </h3>
                  <p className="text-lg font-bold" style={{ color: selectedExp.color }}>
                    {selectedExp.company}
                  </p>
                </div>

                {/* Key Bullet Points */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
                    Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedExp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: selectedExp.color }} />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
                    Tech Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-lg font-mono font-semibold"
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
