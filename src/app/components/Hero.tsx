import { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Github, Mail, MapPin, Phone, Download, ArrowDown, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ComputersCanvas from './canvas/Computers';

function useTypewriter(words: string[], speed = 80) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => setIsPaused(false), 1800);
      return () => clearTimeout(t);
    }
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setIsPaused(true), setIsDeleting(true);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, isPaused]);

  return displayText;
}

export function Hero() {
  const { isDark } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'AI Integrations Builder', 'TypeScript Developer'];
  const typedRole = useTypewriter(roles, 80);

  const particles = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: ((i * 47.3 + 13) % 100),
      y: ((i * 31.7 + 7) % 100),
      size: ((i % 3) * 0.8) + 0.5,
      speed: ((i * 7) % 15) + 8,
      opacity: ((i % 5) * 0.08) + 0.15,
    })),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 120 }, (_, i) => ({
      x: ((i * 37.1 + 5) % 100) * window.innerWidth / 100,
      y: ((i * 53.3 + 11) % 100) * window.innerHeight / 100,
      r: ((i % 3) * 0.5) + 0.3,
      opacity: ((i % 7) * 0.1) + 0.1,
      twinkleSpeed: ((i * 0.3) % 2) + 1,
    }));

    let t = 0;
    const draw = () => {
      t += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isDark) {
        stars.forEach(star => {
          const tw = Math.abs(Math.sin(t * star.twinkleSpeed));
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,210,255,${star.opacity * (0.5 + tw * 0.5)})`;
          ctx.fill();
        });

        // Nebula orbs
        const orbs = [
          { cx: 0.2, cy: 0.3, r: 0.25, c: '59,130,246' },
          { cx: 0.8, cy: 0.6, r: 0.3, c: '139,92,246' },
          { cx: 0.5, cy: 0.1, r: 0.2, c: '6,182,212' },
        ];
        orbs.forEach(orb => {
          const grad = ctx.createRadialGradient(
            orb.cx * canvas.width, orb.cy * canvas.height, 0,
            orb.cx * canvas.width, orb.cy * canvas.height, orb.r * canvas.width
          );
          grad.addColorStop(0, `rgba(${orb.c},0.12)`);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        });
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isDark]);

  const downloadResume = () => {
    const resumeData = `SHUBHAM MOURYA - Full Stack Developer
Contact: +91 7470449162 | shubh7470@gmail.com | github.com/shubh7470
Location: Bhilai, C.G - 490011

EXPERIENCE
Full Stack Developer | GS3 Solution Pvt. Ltd. (Apr 2025 - Present)
• Lead team building scalable MERN Stack web applications
• Integrated AI-driven features improving system efficiency
• Managed full project lifecycle: design → development → deployment

PROJECTS
• Edusathi LMS - Multi-tenant SAAS LMS (edusathi.net)
• ShubhMart - E-Commerce with Razorpay integration (shubhmart.vercel.app)
• BookurEvents.com - Full-stack event planning platform

SKILLS
Frontend: HTML/CSS, JavaScript, TypeScript, React.js, Tailwind CSS
Backend: Node.js, Express.js, MongoDB, PHP, MySQL
Cloud: Vercel, Render, AWS, Docker, GitHub

EDUCATION
MCA - Rungta College of Engineering and Technology (2022-2024) | 70%
B.Sc Mathematics - Govt. V.Y.T. PG College, Durg (2019-2022) | 86%`;

    const blob = new Blob([resumeData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shubham_Mourya_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const stats = [
    { value: '1+', label: 'Years Exp' },
    { value: '3+', label: 'Projects' },
    { value: '10+', label: 'Technologies' },
    { value: '∞', label: 'Passion' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: isDark ? '#050510' : 'linear-gradient(135deg, #f0f4ff 0%, #e8eeff 50%, #f5f0ff 100%)' }}
    >
      {/* 3D Computer Canvas */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
        <ComputersCanvas />
      </div>

      {/* Animated Canvas Background (Stars and Nebula) */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Grid overlay */}
      {isDark && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.slice(0, 20).map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size * 4,
              height: p.size * 4,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: isDark
                ? `radial-gradient(circle, rgba(139,92,246,${p.opacity}), transparent)`
                : `radial-gradient(circle, rgba(59,130,246,${p.opacity}), transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: p.speed,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (p.id * 0.3) % 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: isDark ? 'rgba(139,92,246,0.15)' : 'rgba(59,130,246,0.1)',
            border: isDark ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(59,130,246,0.3)',
          }}
        >
          <Sparkles size={14} className={isDark ? 'text-purple-400' : 'text-blue-500'} />
          <span
            className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-blue-600'}`}
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            Available for Work
          </span>
          <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-green-400' : 'bg-green-500'}`} />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1
            className="mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              background: isDark
                ? 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #67e8f9 100%)'
                : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #0891b2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: isDark ? 'drop-shadow(0 0 30px rgba(139,92,246,0.5))' : 'none',
            }}
          >
            SHUBHAM MOURYA
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 h-12 flex items-center justify-center"
        >
          <span
            className={`text-xl sm:text-2xl md:text-3xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            <span
              style={{
                background: isDark
                  ? 'linear-gradient(90deg, #60a5fa, #a78bfa)'
                  : 'linear-gradient(90deg, #2563eb, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {typedRole}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className={isDark ? 'text-purple-400' : 'text-blue-500'}
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Passionate about building <span className={isDark ? 'text-blue-400 font-medium' : 'text-blue-600 font-medium'}>scalable web apps</span> with MERN Stack & AI integrations. 
          Turning complex ideas into elegant, performant digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full text-white font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: isDark ? '0 8px 32px rgba(139,92,246,0.5)' : '0 8px 24px rgba(59,130,246,0.35)',
            }}
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            style={{
              background: 'transparent',
              border: isDark ? '2px solid rgba(139,92,246,0.6)' : '2px solid rgba(59,130,246,0.5)',
              color: isDark ? '#a78bfa' : '#2563eb',
              backdropFilter: 'blur(10px)',
              backgroundColor: isDark ? 'rgba(139,92,246,0.1)' : 'rgba(59,130,246,0.08)',
            }}
          >
            <Download size={18} />
            Download Resume
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:shubh7470@gmail.com"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            style={{
              background: 'transparent',
              border: isDark ? '2px solid rgba(6,182,212,0.5)' : '2px solid rgba(6,182,212,0.6)',
              color: isDark ? '#67e8f9' : '#0891b2',
              backdropFilter: 'blur(10px)',
              backgroundColor: isDark ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.06)',
            }}
          >
            <Mail size={18} />
            Hire Me
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="text-center px-6 py-3 rounded-2xl"
              style={{
                background: isDark ? 'rgba(139,92,246,0.08)' : 'rgba(59,130,246,0.06)',
                border: isDark ? '1px solid rgba(139,92,246,0.2)' : '1px solid rgba(59,130,246,0.2)',
              }}
            >
              <div
                className="text-2xl font-bold"
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #60a5fa, #a78bfa)'
                    : 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social/Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-5"
        >
          {[
            { icon: Phone, label: '+91 7470449162', href: 'tel:+917470449162', color: '#3b82f6' },
            { icon: MapPin, label: 'Bhilai, C.G', href: '#', color: '#8b5cf6' },
            { icon: Github, label: 'github.com/shubh7470', href: 'https://github.com/shubh7470', color: '#06b6d4' },
          ].map(({ icon: Icon, label, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-sm transition-all duration-200"
              style={{ color: isDark ? 'rgba(156,163,175,1)' : 'rgba(107,114,128,1)' }}
            >
              <Icon size={16} style={{ color }} />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ color: isDark ? 'rgba(139,92,246,0.7)' : 'rgba(59,130,246,0.7)' }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Fira Code', monospace" }}>scroll</span>
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
