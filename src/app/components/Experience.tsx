import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight, CheckCircle2, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { isDark } = useTheme();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Aradhya Business Solution',
      location: 'India',
      period: 'Nov 2024 – Present',
      type: 'Full-time',
      status: 'current',
      color: '#10b981',
      glow: 'rgba(16,185,129,0.35)',
      description: [
        'Working as a Full Stack Developer, building and maintaining functional web applications.',
        'Collaborating on both frontend and backend tasks to deliver robust software solutions.',
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    },
    {
      role: 'Full Stack Developer',
      company: 'GS3 Solution Pvt. Ltd.',
      location: 'Kolkata, WB',
      period: 'Apr 2025 – Present',
      type: 'Full-time',
      status: 'current',
      color: '#3b82f6',
      glow: 'rgba(59,130,246,0.35)',
      description: [
        'Led a development team to design and build scalable web applications using MERN Stack.',
        'Integrated AI-driven features improving system efficiency and user engagement by 40%.',
        'Managed full project lifecycle: UI/UX design → backend development → cloud deployment.',
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Express.js', 'Docker', 'AI/ML'],
    },
    {
      role: 'Frontend Web Developer',
      company: 'Toscall Pvt. Ltd.',
      location: 'India',
      period: '2024 – 2025',
      type: 'Internship',
      status: 'completed',
      color: '#f59e0b',
      glow: 'rgba(245,158,11,0.35)',
      description: [
        'Contributed as a Frontend Web Developer focusing on responsive UI designs using standard web technologies.',
        'Developed a complete Blood Management System utilizing PHP & SQL alongside HTML, CSS, and JS.',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden"
      style={{
        background: isDark
          ? 'radial-gradient(circle at top right, #0d0d2b 0%, #050510 100%)'
          : 'linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%)',
        padding: '8rem 0',
      }}
    >
      {/* Decorative background shapes */}
      {isDark && (
        <>
          <div className="absolute top-40 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        </>
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-medium shadow-sm"
              style={{
                background: isDark ? 'rgba(59,130,246,0.1)' : 'white',
                border: isDark ? '1px solid rgba(59,130,246,0.3)' : '1px solid rgba(59,130,246,0.2)',
                color: isDark ? '#60a5fa' : '#2563eb',
              }}
            >
              <Trophy size={15} />
              Career Journey
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                background: isDark
                  ? 'linear-gradient(135deg, #fff, #9ca3af)'
                  : 'linear-gradient(135deg, #111827, #4b5563)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Work Experience
            </h2>
          </motion.div>
        </div>

        {/* Slider Container */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-6 pb-16 pt-4 cursor-grab active:cursor-grabbing">
              {experiences.map((exp, i) => (
                <div 
                  key={i} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_46%]"
                >
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="group relative h-full flex flex-col"
                  >
                    {/* Animated Glow Backdrop */}
                    <div
                      className="absolute -inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[30px]"
                      style={{ background: exp.glow, zIndex: -1 }}
                    />

                    {/* Main Card Content */}
                    <div
                      className="relative h-full rounded-[2.5rem] p-8 md:p-10 flex flex-col transition-all duration-500 group-hover:-translate-y-2 overflow-hidden"
                      style={{
                        background: isDark ? 'rgba(15,15,35,0.65)' : 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(24px) saturate(150%)',
                        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                        boxShadow: isDark 
                          ? 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)' 
                          : '0 25px 50px -12px rgba(0,0,0,0.05)',
                      }}
                    >
                      {/* Top colored accent line */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-1.5 opacity-80"
                        style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} 
                      />

                      {/* Header Section */}
                      <div className="flex justify-between items-start mb-8 gap-4">
                        <div className="flex items-center gap-5">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'white'}, transparent)`,
                              border: isDark ? `1px solid ${exp.color}40` : `1px solid ${exp.color}20`,
                              boxShadow: `0 8px 20px ${exp.glow}`
                            }}
                          >
                            <Briefcase size={28} style={{ color: exp.color }} />
                          </div>
                          <div>
                            <h3
                              className={`text-2xl font-bold mb-1 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {exp.role}
                            </h3>
                            <p
                              className="font-bold text-lg"
                              style={{ color: exp.color }}
                            >
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Current Badge */}
                        {exp.status === 'current' && (
                          <div 
                            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{
                              background: 'rgba(16,185,129,0.1)',
                              color: '#10b981',
                              border: '1px solid rgba(16,185,129,0.2)'
                            }}
                          >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Present
                          </div>
                        )}
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className={`flex items-center gap-1.5 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className={`flex items-center gap-1.5 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className="text-sm px-3 py-1 rounded-full font-medium"
                          style={{
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            color: isDark ? '#d1d5db' : '#374151',
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-8 flex-1">
                        <ul className="space-y-4">
                          {exp.description.map((desc, di) => (
                            <li key={di} className="flex items-start gap-4">
                              <div className="mt-1 p-1 rounded-full" style={{ background: `${exp.color}20` }}>
                                <CheckCircle2 size={14} style={{ color: exp.color }} />
                              </div>
                              <span className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-auto pt-6 border-t relative" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                        <div className="flex flex-wrap gap-2 relative z-10">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                              style={{
                                background: isDark ? 'rgba(255,255,255,0.03)' : 'white',
                                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                                color: isDark ? '#e5e7eb' : '#111827',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Bottom) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:scale-100 hover:scale-110 active:scale-95 shadow-lg group relative overflow-hidden"
              style={{
                background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ChevronLeft size={24} className={isDark ? "text-gray-300 group-hover:text-white relative z-10" : "text-gray-600 group-hover:text-blue-600 relative z-10"} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:scale-100 hover:scale-110 active:scale-95 shadow-lg group relative overflow-hidden"
              style={{
                background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ChevronRight size={24} className={isDark ? "text-gray-300 group-hover:text-white relative z-10" : "text-gray-600 group-hover:text-blue-600 relative z-10"} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
