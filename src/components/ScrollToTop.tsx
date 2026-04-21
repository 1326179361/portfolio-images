import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            zIndex: 900,
            width: '52px',
            height: '52px',
            borderRadius: '16px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
            color: 'var(--accent-primary)',
            boxShadow: '6px 6px 14px rgba(209, 217, 230, 0.5), -4px -4px 10px rgba(240, 244, 250, 0.7)',
            transition: 'box-shadow 0.25s ease',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.boxShadow = '8px 8px 18px rgba(209, 217, 230, 0.6), -6px -6px 14px rgba(240, 244, 250, 0.8)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.boxShadow = '6px 6px 14px rgba(209, 217, 230, 0.5), -4px -4px 10px rgba(240, 244, 250, 0.7)';
          }}
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
