import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle, Loader, MessageSquare, Copy, Check, Sparkles, Linkedin, Instagram } from 'lucide-react';
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
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const presets = [
    { label: '📱 Mobile App Inquiry', text: 'Mobile App Development Inquiry' },
    { label: '💼 Full-Time Opportunity', text: 'Full-Time Job Opportunity' },
    { label: '⚡ Web Development', text: 'Web Application Project' },
    { label: '👋 Say Hello', text: 'Quick Hello & Connection' },
  ];

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    toast.success(`${label} copied to clipboard!`, {
      description: text,
    });
    setTimeout(() => setCopiedKey(null), 2500);
  };

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

    try {
      // Live Email Integration (Web3Forms API)
      const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.WEB3FORMS_KEY || '';
      
      if (web3Key) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: 'Portfolio Visitor',
          }),
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
          toast.success('Message sent successfully! 🎉', {
            description: "I'll get back to you within 24 hours.",
          });
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 3000);
          return;
        }
      }

      // Fallback: Direct Mailto redirect so form works 100% of the time instantly!
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(`Hi Shubham,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:shubhammourya7470@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setIsSubmitted(true);
      toast.success('Opening your mail app to send email! 📧', {
        description: 'Your message has been formatted.',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (err) {
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(`Hi Shubham,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:shubhammourya7470@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      toast.success('Opening mail app! 📧');
    } finally {
      setIsSubmitting(false);
    }
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
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '+91 7470449162',
      copyValue: '+917470449162',
      href: 'tel:+917470449162',
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      glow: 'rgba(59,130,246,0.4)',
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'shubh7470@gmail.com',
      copyValue: 'shubh7470@gmail.com',
      href: 'mailto:shubh7470@gmail.com',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      glow: 'rgba(139,92,246,0.4)',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shubham-mourya',
      copyValue: 'https://www.linkedin.com/in/shubham-mourya-b990b2323?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      href: 'https://www.linkedin.com/in/shubham-mourya-b990b2323?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      gradient: 'linear-gradient(135deg, #0a66c2, #2563eb)',
      glow: 'rgba(10,102,194,0.4)',
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      value: '@itz_shubh_1106',
      copyValue: 'https://www.instagram.com/itz_shubh_1106?utm_source=qr&stkn=MWpxb3Q4eTJ4cGhjZA==',
      href: 'https://www.instagram.com/itz_shubh_1106?utm_source=qr&stkn=MWpxb3Q4eTJ4cGhjZA==',
      gradient: 'linear-gradient(135deg, #e4405f, #ec4899)',
      glow: 'rgba(228,64,95,0.4)',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shubh7470',
      copyValue: 'https://github.com/shubh7470',
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
        background: 'transparent',
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
              const isCopied = copiedKey === item.label;

              return (
                <motion.div
                  key={item.label}
                  initial={{ x: -40, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: isDark ? 'rgba(13,13,32,0.7)' : 'rgba(255,255,255,0.9)',
                    border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(59,130,246,0.1)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 flex-1"
                    style={{ textDecoration: 'none' }}
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
                  </a>

                  {/* 1-Click Copy Button */}
                  <button
                    onClick={e => handleCopy(item.copyValue, item.label, e)}
                    className="p-2.5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-gray-400 hover:text-purple-400 transition-colors"
                    title={`Copy ${item.label}`}
                  >
                    {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </motion.div>
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
                className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send Me a Message
              </h3>

              {/* Subject Presets Pills */}
              <div className="mb-6">
                <p className={`text-xs mb-2.5 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Quick subject presets:
                </p>
                <div className="flex flex-wrap gap-2">
                  {presets.map(preset => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, subject: preset.text }))}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                        formData.subject === preset.text
                          ? isDark
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-blue-600 text-white shadow-md'
                          : isDark
                          ? 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                          : 'bg-black/5 hover:bg-black/10 text-gray-700 border border-black/10'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

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
                    rows={4}
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
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-semibold transition-all duration-300 shadow-xl"
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
                      Sending Message...
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
