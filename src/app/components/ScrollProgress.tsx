import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const WhatsAppIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.115 1.026 6.978 2.89A9.82 9.82 0 0121.92 11.9c0 5.446-4.43 9.875-9.869 9.875m0-21.667C5.373 0 0 5.373 0 12c0 2.126.555 4.2 1.61 6.024L0 24l6.149-1.613A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
  </svg>
);

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  const whatsappUrl = `https://wa.me/917470449162?text=${encodeURIComponent(
    'Hi Shubham, I saw your portfolio and would like to connect!'
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Indicator Line */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[3px]" style={{ background: 'transparent' }}>
        <motion.div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
            boxShadow: '0 0 10px rgba(139,92,246,0.8)',
            transition: 'width 0.1s ease',
          }}
        />
      </div>

      {/* Floating WhatsApp Circular Icon Only (Bottom Right) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.12, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full text-white shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
        style={{
          background: '#25D366',
          boxShadow: '0 10px 30px rgba(37, 211, 102, 0.5)',
        }}
        title="Chat on WhatsApp (+91 7470449162)"
      >
        <WhatsAppIcon size={28} />
      </motion.a>
    </>
  );
}
