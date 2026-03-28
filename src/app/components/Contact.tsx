import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle, Loader, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from '../contexts/ThemeContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { isDark } = useTheme();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast.success('Message sent successfully! 🎉', {
      description: "I'll get back to you within 24 hours.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7470449162',
      href: 'tel:+917470449162',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      glow: 'rgba(59,130,246,0.4)',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'shubh7470@gmail.com',
      href: 'mailto:shubh7470@gmail.com',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glow: 'rgba(139,92,246,0.4)',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhilai, C.G - 490011',
      href: '#',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      glow: 'rgba(245,158,11,0.4)',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shubh7470',
      href: 'https://github.com/shubh7470',
      gradient: 'linear-gradient(135deg, #6b7280, #111827)',
      glow: 'rgba(107,114,128,0.4)',
    },
  ];

  const inputStyle = {
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(59,130,246,0.2)',
    color: isDark ? '#e2e8f0' : '#1e293b',
    borderRadius: '0.75rem',
    padding: '0.85rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle = {
    color: isDark ? '#9ca3af' : '#6b7280',
    fontSize: '0.875rem',
    fontWeight: 500,
    marginBottom: '0.5rem',
    display: 'block',
    fontFamily: "'Space Grotesk', sans-serif",
  };

  return (
    <section
      id="contact"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #050510 0%, #080818 100%)'
          : 'linear-gradient(180deg, #f0f4ff 0%, #e8f5ff 100%)',
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
              background: isDark ? 'rgba(6,182,212,0.1)' : 'rgba(6,182,212,0.08)',
              border: isDark ? '1px solid rgba(6,182,212,0.3)' : '1px solid rgba(6,182,212,0.3)',
              color: isDark ? '#67e8f9' : '#0891b2',
              fontFamily: "'Fira Code', monospace",
            }}
          >
            <MessageSquare size={14} />
            contact.me()
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
            Get In Touch
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
          />
          <p className={`mt-4 max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Let's build something amazing together. I'm always open to exciting opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left column - Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ x: -40, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: isDark ? 'rgba(13,13,32,0.7)' : 'rgba(255,255,255,0.9)',
                    border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(59,130,246,0.1)',
                    backdropFilter: 'blur(20px)',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.gradient,
                      boxShadow: isDark ? `0 6px 20px ${item.glow}` : `0 4px 15px ${item.glow}`,
                    }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.label}
                    </p>
                    <p
                      className={`text-sm font-semibold break-all ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Availability Card */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl mt-4"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))'
                  : 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))',
                border: isDark
                  ? '1px solid rgba(139,92,246,0.25)'
                  : '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span
                  className="font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Available for new projects
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Looking for freelance work or full-time roles. Let's collaborate and build something great!
              </p>
            </motion.div>
          </div>

          {/* Right column - Contact Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: isDark ? 'rgba(13,13,32,0.8)' : 'rgba(255,255,255,0.95)',
                border: isDark ? '1px solid rgba(139,92,246,0.2)' : '1px solid rgba(59,130,246,0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: isDark
                  ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.08)'
                  : '0 20px 60px rgba(59,130,246,0.08)',
              }}
            >
              <h3
                className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={{
                        ...inputStyle,
                        borderColor: errors.name
                          ? '#ef4444'
                          : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = '#8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                        e.target.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(59,130,246,0.04)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = errors.name ? '#ef4444' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                      }}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      style={{
                        ...inputStyle,
                        borderColor: errors.email
                          ? '#ef4444'
                          : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = '#8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                        e.target.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(59,130,246,0.04)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = errors.email ? '#ef4444' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                      }}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={labelStyle}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity"
                    style={{
                      ...inputStyle,
                      borderColor: errors.subject
                        ? '#ef4444'
                        : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#8b5cf6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                      e.target.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(59,130,246,0.04)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = errors.subject ? '#ef4444' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)';
                      e.target.style.boxShadow = 'none';
                      e.target.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                    }}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      borderColor: errors.message
                        ? '#ef4444'
                        : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#8b5cf6';
                      e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                      e.target.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(59,130,246,0.04)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = errors.message ? '#ef4444' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)';
                      e.target.style.boxShadow = 'none';
                      e.target.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                  <p className={`text-xs mt-1 text-right ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    {formData.message.length} chars
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-semibold transition-all duration-300"
                  style={{
                    background: isSubmitted
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    boxShadow: isSubmitted
                      ? '0 8px 30px rgba(16,185,129,0.4)'
                      : isDark
                        ? '0 8px 30px rgba(139,92,246,0.45)'
                        : '0 8px 30px rgba(59,130,246,0.3)',
                    opacity: isSubmitting ? 0.8 : 1,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
