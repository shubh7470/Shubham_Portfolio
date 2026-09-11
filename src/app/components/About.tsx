import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { GraduationCap, User, Server, Database, Code2, Terminal, Copy, Check, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { toast } from 'sonner';

interface SkillBarProps {
  skill: string;
  level: number;
  color: string;
  isDark: boolean;
  delay: number;
}

function SkillBar({ skill, level, color, isDark, delay }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{skill}</span>
        <span
          className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
          style={{
            background: isDark ? 'rgba(139,92,246,0.15)' : 'rgba(59,130,246,0.1)',
            color: isDark ? '#a78bfa' : '#2563eb',
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </div>
    </div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'cloud'>('all');

  const configSnippet = `// shubham.config.ts
export const developer = {
  name: "Shubham Mourya",
  title: "Full Stack & Mobile App Engineer",
  experience: "2+ Years",
  coreStack: ["React Native", "Next.js", "Node.js", "PostgreSQL"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  status: "Available for full-time & high-impact projects 🚀",
};`;

  const copyConfig = () => {
    navigator.clipboard.writeText(configSnippet);
    setCopied(true);
    toast.success('Config snippet copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend & Mobile',
      icon: Code2,
      color: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
      glow: 'rgba(59,130,246,0.4)',
      skills: [
        { name: 'React.js / Next.js', level: 92 },
        { name: 'React Native / Expo', level: 90 },
        { name: 'TypeScript / JavaScript', level: 88 },
        { name: 'Tailwind CSS / CSS3', level: 95 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      icon: Server,
      color: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
      glow: 'rgba(139,92,246,0.4)',
      skills: [
        { name: 'Node.js / Express.js', level: 90 },
        { name: 'PostgreSQL / Prisma', level: 88 },
        { name: 'MongoDB / Mongoose / Redis', level: 85 },
        { name: 'REST APIs & Socket.io', level: 92 },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Database,
      color: 'linear-gradient(90deg, #06b6d4, #67e8f9)',
      glow: 'rgba(6,182,212,0.4)',
      skills: [
        { name: 'Firebase / GCP / AWS', level: 85 },
        { name: 'Vercel & Render Deployments', level: 90 },
        { name: 'Git / GitHub / Docker', level: 88 },
        { name: 'Postman / API Testing', level: 90 },
      ],
    },
  ];

  const cardStyle = {
    background: isDark
      ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.75), rgba(15, 23, 42, 0.85))'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.9))',
    border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(226, 232, 240, 0.8)',
    backdropFilter: 'blur(20px)',
    boxShadow: isDark ? '0 12px 40px rgba(0,0,0,0.4)' : '0 12px 32px rgba(0,0,0,0.04)',
  };

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: isDark ? 'transparent' : 'transparent',
        padding: '6rem 0',
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
              background: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(59,130,246,0.08)',
              border: isDark ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(59,130,246,0.25)',
              color: isDark ? '#a78bfa' : '#2563eb',
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <User size={14} />
            about_me.tsx
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
            About Me & Tech Stack
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Card 1: Profile & Bio (Span 7) */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
            style={cardStyle}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                  >
                    <User size={22} className="text-white" />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Shubham Mourya
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-purple-300' : 'text-blue-600'}`}>
                      Full Stack & Mobile App Developer
                    </p>
                  </div>
                </div>

                <div
                  className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: isDark ? 'rgba(34,197,94,0.15)' : 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.4)',
                    color: isDark ? '#4ade80' : '#16a34a',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to Opportunities
                </div>
              </div>

              <p className={`leading-relaxed mb-4 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a dedicated <span className={isDark ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'}>Full Stack & Mobile App Developer</span> with 2+ years of experience crafting production-ready web and mobile solutions.
              </p>
              <p className={`leading-relaxed text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Specialized in building scalable cross-platform mobile apps with <span className={isDark ? 'text-purple-400 font-semibold' : 'text-purple-600 font-semibold'}>React Native & Expo</span> and full-stack web platforms using <span className={isDark ? 'text-cyan-400 font-semibold' : 'text-cyan-600 font-semibold'}>Next.js, Node.js, Express & PostgreSQL</span>.
              </p>
            </div>

            {/* Quick Facts Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Briefcase, label: 'Exp', value: '2+ Years' },
                { icon: MapPin, label: 'Based In', value: 'Bhilai, CG' },
                { icon: Code2, label: 'Apps', value: '5+ Live' },
                { icon: Sparkles, label: 'Passion', value: 'Clean Code' },
              ].map(fact => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="rounded-2xl p-3.5 transition-all duration-300"
                    style={{
                      background: isDark ? 'rgba(139,92,246,0.08)' : 'rgba(59,130,246,0.06)',
                      border: isDark ? '1px solid rgba(139,92,246,0.2)' : '1px solid rgba(59,130,246,0.18)',
                    }}
                  >
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                      <Icon size={12} className={isDark ? 'text-purple-400' : 'text-blue-500'} />
                      <span>{fact.label}</span>
                    </div>
                    <p className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      {fact.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 2: Interactive Developer Terminal (Span 5) */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300"
            style={{
              background: isDark ? '#0b0c1b' : '#1e1e2e',
              border: isDark ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(59,130,246,0.3)',
              color: '#cdd6f4',
            }}
          >
            {/* Terminal Top Bar */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono ml-2 text-gray-400 flex items-center gap-1">
                    <Terminal size={12} /> shubham.config.ts
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyConfig}
                  className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                >
                  {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </motion.button>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-blue-300 p-2">
                <code>
                  <span className="text-purple-400">export const</span> <span className="text-yellow-300">developer</span> = &#123;{'\n'}
                  {'  '}<span className="text-blue-400">name</span>: <span className="text-green-300">"Shubham Mourya"</span>,{'\n'}
                  {'  '}<span className="text-blue-400">title</span>: <span className="text-green-300">"Full Stack & Mobile Engineer"</span>,{'\n'}
                  {'  '}<span className="text-blue-400">experience</span>: <span className="text-orange-300">"2+ Years"</span>,{'\n'}
                  {'  '}<span className="text-blue-400">coreStack</span>: [<span className="text-green-300">"React Native"</span>, <span className="text-green-300">"Next.js"</span>, <span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"PostgreSQL"</span>],{'\n'}
                  {'  '}<span className="text-blue-400">location</span>: <span className="text-green-300">"Bhilai, Chhattisgarh"</span>,{'\n'}
                  {'  '}<span className="text-blue-400">status</span>: <span className="text-green-300">"Ready to deploy 🚀"</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                Live Config Active
              </span>
              <span>TypeScript 5.0</span>
            </div>
          </motion.div>
        </div>

        {/* Education Row (Span 12) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-3xl p-6 sm:p-8 mb-12"
          style={cardStyle}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}
            >
              <GraduationCap size={20} className="text-white" />
            </div>
            <h3
              className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Education & Academic Background
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: 'Master of Computer Applications (MCA)',
                college: 'Rungta College of Engineering & Technology, Bhilai',
                year: '2022 – 2024',
                score: '70%',
                color: '#3b82f6',
              },
              {
                degree: 'Bachelor of Science (B.Sc) in Mathematics',
                college: 'Govt. V.Y.T. PG Autonomous College, Durg',
                year: '2019 – 2022',
                score: '80%',
                color: '#8b5cf6',
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="relative pl-5 py-2 group rounded-xl transition-all"
                style={{ borderLeft: `3px solid ${edu.color}` }}
              >
                <div
                  className="absolute -left-[7px] top-4 w-3 h-3 rounded-full"
                  style={{
                    background: edu.color,
                    boxShadow: `0 0 12px ${edu.color}`,
                  }}
                />
                <h4
                  className={`font-bold text-lg mb-1 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {edu.degree}
                </h4>
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.college}</p>
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-mono font-medium"
                    style={{
                      background: `${edu.color}20`,
                      color: edu.color,
                      border: `1px solid ${edu.color}40`,
                    }}
                  >
                    {edu.year}
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-mono font-bold"
                    style={{
                      background: 'rgba(16,185,129,0.15)',
                      color: '#10b981',
                      border: '1px solid rgba(16,185,129,0.3)',
                    }}
                  >
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Skills Matrix Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-3xl p-6 sm:p-8"
          style={cardStyle}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3
                className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Technical Skills & Proficiency
              </h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Technologies and frameworks used in production applications.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-black/10 dark:bg-white/5 border border-purple-500/20">
              {[
                { id: 'all', label: 'All Stack' },
                { id: 'frontend', label: 'Frontend & Mobile' },
                { id: 'backend', label: 'Backend & DB' },
                { id: 'cloud', label: 'Cloud & Tools' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? isDark
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : isDark
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Cards Matrix Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredCategories.map((group, gi) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: gi * 0.1 }}
                    className="rounded-2xl p-6 transition-all duration-300"
                    style={{
                      background: isDark ? 'rgba(13,13,32,0.8)' : 'rgba(255,255,255,0.8)',
                      border: isDark ? '1px solid rgba(139,92,246,0.2)' : '1px solid rgba(59,130,246,0.2)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                        style={{ background: group.color }}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <h4
                        className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {group.title}
                      </h4>
                    </div>

                    {group.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill.name}
                        level={skill.level}
                        color={group.color}
                        isDark={isDark}
                        delay={0.2 + si * 0.08}
                      />
                    ))}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
