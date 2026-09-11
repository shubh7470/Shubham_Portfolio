import { Toaster } from 'sonner';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

function PortfolioContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={isDark ? 'dark' : ''}
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: isDark
          ? '#0b0f19'
          : '#f8fafc',
        color: isDark ? '#e2e8f0' : '#0f172a',
        minHeight: '100vh',
        transition: 'background 0.4s ease',
      }}
    >
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDark ? '#111827' : '#ffffff',
            border: isDark ? '1px solid rgba(139,92,246,0.3)' : '1px solid #e2e8f0',
            color: isDark ? '#e2e8f0' : '#0f172a',
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
