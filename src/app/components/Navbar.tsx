import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const resumeData = `SHUBHAM MOURYA
Full Stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 +91 7470449162  |  📧 shubh7470@gmail.com
📍 Bhilai, C.G - 490011  |  🔗 github.com/shubh7470

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passionate Full Stack Developer with 1+ year of experience building and deploying
scalable web applications using AI and modern web technologies. Familiar with cloud
platforms and interested in working on real-world projects using AI, TypeScript,
React.js, Node.js, Express.js, and MongoDB.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORK EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Stack Developer | GS3 Solution Pvt. Ltd., Kolkata, West Bengal
Apr 2025 - Present

• Lead a development team to design and build scalable web applications using MERN Stack.
• Collaborated with cross-functional teams to integrate AI-driven features improving
  system efficiency and user engagement.
• Managed full project lifecycle: design → development → deployment.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Edusathi LMS (Learning Management System)
   Tech: MERN, Tailwind CSS, Node.js, Express.js, MongoDB
   • Built a multi-tenant SAAS LMS for schools, colleges, and institutes.
   • Implemented complete academic lifecycle with enrollment, exams, marks, results.
   🔗 https://edusathi.net

2. ShubhMart (E-Commerce Management System)
   Tech: React.js, Node.js, Express.js, MongoDB, Bootstrap
   • Developed admin panel with Razorpay payment integration.
   • Enhanced UX with dynamic carts and wishlists.
   🔗 https://shubhmart.vercel.app

3. BookurEvents.com (Event Planning Platform)
   Tech: MERN, Tailwind CSS, Node.js, Express.js, MongoDB
   • Built full-stack event planning platform to connect users with vendors/venues.
   • Implemented vendor authentication, slot management & live search.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend: HTML/CSS, JavaScript, TypeScript, React.js, Tailwind CSS, Bootstrap
Backend:  Node.js, Express.js, MongoDB, PHP, MySQL
Cloud:    Vercel, Render, AWS, Docker, Postman, GitHub

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MCA - Rungta College of Engineering and Technology, Bhilai  (2022-2024) | 70%
B.Sc Mathematics - Govt. V.Y.T. PG Autonomous College, Durg  (2019-2022) | 86%
`;
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

  const navBg = isScrolled
    ? isDark
      ? 'bg-[#050510]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_30px_rgba(139,92,246,0.1)]'
      : 'bg-white/90 backdrop-blur-xl border-b border-blue-100 shadow-lg'
    : 'bg-transparent';

  const textColor = isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600';

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <span
              className="text-2xl"
              style={{
                fontFamily: "'Fira Code', monospace",
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                filter: isDark ? 'drop-shadow(0 0 8px rgba(139,92,246,0.6))' : 'none',
              }}
            >
              &lt;SM /&gt;
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 group ${textColor}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-3">


            {/* Resume Download Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                boxShadow: isDark ? '0 4px 15px rgba(139,92,246,0.4)' : '0 4px 15px rgba(59,130,246,0.3)',
              }}
            >
              <Download size={16} />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">

            <button
              className={isDark ? 'text-gray-300' : 'text-gray-700'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t ${
              isDark
                ? 'bg-[#050510]/95 backdrop-blur-xl border-purple-500/20'
                : 'bg-white/95 backdrop-blur-xl border-gray-200'
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                    isDark
                      ? 'text-gray-300 hover:bg-purple-500/10 hover:text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-white"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
