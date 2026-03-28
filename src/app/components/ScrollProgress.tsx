import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

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
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px]" style={{ background: 'transparent' }}>
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
          boxShadow: '0 0 8px rgba(139,92,246,0.7)',
          transition: 'width 0.1s ease',
        }}
      />
    </div>
  );
}
