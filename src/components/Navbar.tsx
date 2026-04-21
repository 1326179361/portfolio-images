import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', short: 'Home' },
  { path: '/design', label: 'UX Design', short: 'UX' },
  { path: '/illustration', label: 'Illustration', short: 'Illus' },
  { path: '/performance', label: 'Performance', short: 'Perf' },
  { path: '/animation', label: 'Animation', short: 'Anim' },
  { path: '/musicvideo', label: 'MusicVideo', short: 'MV' },
  { path: '/myfamily', label: 'MyFamily', short: 'Family' },
];

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
];

// Design-oriented SVG Logo
function LogoIcon({ color: _color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="26" height="26" rx="7" fill="url(#logoGrad)" />
      <path d="M8 20L14 8L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="8" r="2" fill="white" opacity="0.6"/>
      <circle cx="22" cy="6" r="1.5" fill="#FF457A" opacity="0.8"/>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E5EFF"/>
          <stop offset="1" stopColor="#2A3FCC"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Language Switcher Dropdown
function LanguageSwitcher({ textColor }: { textColor: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          background: 'rgba(62, 94, 255, 0.08)',
          color: textColor,
          fontSize: '0.82rem',
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          boxShadow: 'inset 2px 2px 4px rgba(209, 217, 230, 0.4), inset -2px -2px 4px rgba(240, 244, 250, 0.4)',
        }}
      >
        <Globe size={14} />
        <span>{currentLang.label}</span>
        <ChevronDown size={12} style={{ 
          transition: 'transform 0.25s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              minWidth: '120px',
              borderRadius: '14px',
              background: 'rgba(232, 237, 245, 0.98)',
              backdropFilter: 'blur(16px)',
              boxShadow: '6px 6px 20px rgba(209, 217, 230, 0.4), -4px -4px 14px rgba(240, 244, 250, 0.5)',
              padding: '6px',
              zIndex: 1001,
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentLang(lang);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '10px 14px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: currentLang.code === lang.code 
                    ? 'rgba(62, 94, 255, 0.1)' 
                    : 'transparent',
                  color: currentLang.code === lang.code ? '#3E5EFF' : '#4A5568',
                  fontSize: '0.85rem',
                  fontWeight: currentLang.code === lang.code ? 600 : 400,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Globe size={14} />
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isSolid = isScrolled || !isHome;
  const textColor = isSolid ? '#4A5568' : '#E8EDF5';
  const activeColor = isSolid ? '#3E5EFF' : '#E8EDF5';

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isHome && !isScrolled ? 'navbar--transparent' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 40px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isSolid 
            ? 'rgba(232, 237, 245, 0.92)' 
            : 'transparent',
          backdropFilter: isSolid ? 'blur(20px)' : 'none',
          boxShadow: isSolid
            ? '0 4px 20px rgba(209, 217, 230, 0.3), 0 -2px 10px rgba(240, 244, 250, 0.2)'
            : 'none',
          borderRadius: isSolid ? '0 0 20px 20px' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Left: Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogoIcon color={isSolid ? '#3E5EFF' : '#3E5EFF'} />
          </motion.div>
        </NavLink>

        {/* Center: Desktop Navigation */}
        <div className="nav-links-desktop" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '0.88rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive 
                  ? activeColor
                  : textColor,
                opacity: isActive ? 1 : (isActive ? 1 : 0.8),
                background: isActive && isSolid
                  ? 'rgba(62, 94, 255, 0.08)'
                  : 'transparent',
                boxShadow: isActive && isSolid
                  ? 'inset 2px 2px 4px rgba(209, 217, 230, 0.5), inset -2px -2px 4px rgba(240, 244, 250, 0.5)'
                  : 'none',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              })}
            >
              <span className="hide-on-tablet">{item.label}</span>
              <span className="show-on-tablet">{item.short}</span>
            </NavLink>
          ))}
        </div>

        {/* Right: Language Switcher */}
        <LanguageSwitcher textColor={textColor} />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: textColor,
          }}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              background: 'rgba(232, 237, 245, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: '0 0 24px 24px',
              boxShadow: '8px 8px 24px rgba(209, 217, 230, 0.4), -4px -4px 12px rgba(240, 244, 250, 0.3)',
              padding: '24px 20px',
              zIndex: 999,
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#3E5EFF' : '#4A5568',
                    background: isActive ? 'rgba(62, 94, 255, 0.08)' : 'transparent',
                    boxShadow: isActive
                      ? 'inset 2px 2px 4px rgba(209, 217, 230, 0.5), inset -2px -2px 4px rgba(240, 244, 250, 0.5)'
                      : '4px 4px 8px rgba(209, 217, 230, 0.3), -4px -4px 8px rgba(240, 244, 250, 0.3)',
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Language switch in mobile menu */}
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(209, 217, 230, 0.4)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', paddingLeft: '4px' }}>语言 / Language</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '12px 20px',
                      border: 'none',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: '#4A5568',
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Globe size={15} />
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .show-on-tablet { display: none; }
        @media (max-width: 1024px) {
          .hide-on-tablet { display: none !important; }
          .show-on-tablet { display: inline !important; }
          .nav-links-desktop { gap: 2px; }
          .nav-links-desktop a { padding: 8px 10px !important; font-size: 0.82rem !important; }
        }
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hide-on-mobile { display: none; }
        }
      `}</style>
    </>
  );
}
