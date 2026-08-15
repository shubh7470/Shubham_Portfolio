import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, User, Server, Database, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill}</span>
        <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)' }}
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
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { isDark } = useTheme();

  const skillGroups = [
    {
      title: 'Frontend & Mobile',
      icon: Code2,
      color: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
      glow: 'rgba(59,130,246,0.4)',
      skills: [
        { name: 'React.js / Next.js', level: 92 },
        { name: 'React Native / Expo', level: 90 },
        { name: 'TypeScript / JavaScript', level: 88 },
        { name: 'Tailwind CSS / HTML / CSS', level: 95 },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: Server,
      color: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
      glow: 'rgba(139,92,246,0.4)',
      skills: [
        { name: 'Node.js / Express.js', level: 90 },
        { name: 'PostgreSQL / Prisma / MySQL', level: 88 },
        { name: 'MongoDB / Mongoose / Redis', level: 85 },
        { name: 'REST APIs / Socket.io', level: 92 },
      ],
    },
    {
      title: 'Cloud & Tools',
      icon: Database,
      color: 'linear-gradient(90deg, #06b6d4, #67e8f9)',
      glow: 'rgba(6,182,212,0.4)',
      skills: [
        { name: 'Firebase / GCP / AWS', level: 85 },
        { name: 'Vercel / Render Deployment', level: 90 },
        { name: 'Git / GitHub / Docker', level: 88 },
        { name: 'Postman / AI Tools', level: 90 },
      ],
    },
  ];

  const cardStyle = {
    background: isDark ? 'rgba(13,13,32,0.7)' : 'rgba(255,255,255,0.9)',
    border: isDark ? '1px solid rgba(139,92,246,0.2)' : '1px solid rgba(59,130,246,0.15)',
    backdropFilter: 'blur(20px)',
    boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(59,130,246,0.08)',
  };

  return (
    <section
      id="about"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #050510 0%, #080818 100%)'
          : 'linear-gradient(180deg, #f0f4ff 0%, #e8eeff 100%)',
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
            About Me
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
        </motion.div>

        {/* Profile + Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Profile */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8"
            style={cardStyle}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                <User size={20} className="text-white" />
              </div>
              <h3
                className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Profile
              </h3>
            </div>
            <p className={`leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate <span className={isDark ? 'text-blue-400 font-medium' : 'text-blue-600 font-medium'}>Full Stack Developer</span> with 2+ years of experience building 
              and deploying web and mobile apps using JavaScript, React.js, React Native, Next.js, Node.js, and PostgreSQL/MongoDB.
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Interested in working on real-world projects using <span className={isDark ? 'text-purple-400 font-medium' : 'text-purple-600 font-medium'}>AI and modern web technologies</span>.
            </p>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'Experience', value: '2+ Years' },
                { label: 'Location', value: 'Bhilai, C.G' },
                { label: 'Availability', value: 'Open to Work' },
                { label: 'Focus', value: 'Full Stack & Mobile' },
              ].map(fact => (
                <div
                  key={fact.label}
                  className="rounded-xl p-3"
                  style={{
                    background: isDark ? 'rgba(139,92,246,0.07)' : 'rgba(59,130,246,0.06)',
                    border: isDark ? '1px solid rgba(139,92,246,0.15)' : '1px solid rgba(59,130,246,0.15)',
                  }}
                >
                  <p className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{fact.label}</p>
                  <p className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-2xl p-8"
            style={cardStyle}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}
              >
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3
                className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-6">
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
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + i * 0.2,
                    ease: "easeOut" 
                  }}
                  whileHover={{ x: 5 }}
                  className="relative pl-5 group cursor-default"
                  style={{ borderLeft: `3px solid ${edu.color}` }}
                >
                  <div
                    className="absolute -left-[7px] top-1 w-3 h-3 rounded-full"
                    style={{
                      background: edu.color,
                      boxShadow: `0 0 10px ${edu.color}88`,
                    }}
                  />
                  <h4
                    className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {edu.degree}
                  </h4>
                  <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.college}</p>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${edu.color}20`,
                        color: edu.color,
                        border: `1px solid ${edu.color}40`,
                      }}
                    >
                      {edu.year}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold"
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
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3
            className={`text-2xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ y: 40, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + gi * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{
                    ...cardStyle,
                    boxShadow: isDark
                      ? `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.1)`
                      : '0 8px 32px rgba(59,130,246,0.08)',
                  }}
                >
                  {/* Group header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: group.color }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4
                      className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {group.title}
                    </h4>
                  </div>

                  {/* Skill bars */}
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      color={group.color}
                      isDark={isDark}
                      delay={0.7 + gi * 0.15 + si * 0.1}
                    />
                  ))}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
