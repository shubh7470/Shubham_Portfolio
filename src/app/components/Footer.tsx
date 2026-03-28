import { motion } from 'motion/react';
import { Github, Mail, Phone, MapPin, Heart, ArrowUp, Code2 } from 'lucide-react';


export function Footer() {
  // Theme is locked to dark mode via ThemeContext
  // const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects = [
    { name: 'Edusathi LMS', href: 'https://edusathi.net' },
    { name: 'ShubhMart', href: 'https://shubhmart.vercel.app' },
    { name: 'BookurEvents', href: '#' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const bgStyle = {
    background: 'linear-gradient(180deg, #080818 0%, #030308 100%)',
  };

  return (
    <footer style={bgStyle}>
      {/* Top glow line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(59,130,246,0.6), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div
              className="text-3xl mb-4 cursor-pointer"
              onClick={scrollToTop}
              style={{
                fontFamily: "'Fira Code', monospace",
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.5))',
              }}
            >
              &lt;SM /&gt;
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Full Stack Developer passionate about building scalable web applications with MERN Stack & AI integrations.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Mail, text: 'shubh7470@gmail.com', href: 'mailto:shubh7470@gmail.com' },
                { icon: Phone, text: '+91 7470449162', href: 'tel:+917470449162' },
                { icon: MapPin, text: 'Bhilai, C.G - 490011', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  <Icon size={14} className="text-purple-400 flex-shrink-0" />
                  {text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-white font-semibold mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-4 h-px transition-all duration-200 group-hover:w-6"
                      style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
                    />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-white font-semibold mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Projects
            </h4>
            <ul className="space-y-2.5">
              {projects.map(project => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-4 h-px transition-all duration-200 group-hover:w-6"
                      style={{ background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }}
                    />
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-white font-semibold mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Code2 size={16} className="text-blue-400" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'Tailwind', 'Docker', 'AWS'].map(tech => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-lg text-gray-400 transition-all duration-200 hover:text-blue-400 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub CTA */}
            <div className="mt-6">
              <a
                href="https://github.com/shubh7470"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <Github size={16} />
                github.com/shubh7470
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="mb-6 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(59,130,246,0.3), transparent)',
          }}
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Shubham Mourya. Made with{' '}
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            {' '}& lots of ☕
          </p>

          <div className="flex items-center gap-4">
            <span
              className="text-xs text-gray-600"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Built with React + TypeScript + Motion
            </span>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-2 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 4px 15px rgba(139,92,246,0.4)',
              }}
              title="Back to top"
            >
              <ArrowUp size={16} className="text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
