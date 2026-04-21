import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolio';

// SVG icon components for each social platform
const SocialIcons: Record<string, React.ReactNode> = {
  behance: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 9.5h2.5c1.38 0 2.5-1.12 2.5-2.5S9.88 4.5 8.5 4.5H4v9h4.5c1.93 0 3.5-1.57 3.5-3.5 0-1.58-1.06-2.92-2.5-3.35V9.5zm-.5-3.5h2.5c.55 0 1 .45 1 1s-.45 1-1 1H5.5V6zM8.5 11.5H5.5v-2h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM15.5 4.5c-2.49 0-4.5 2.01-4.5 4.5v5c0 .55.45 1 1 1s1-.45 1-1v-2.5h5V14c0 .55.45 1 1 1s1-.45 1-1V9c0-2.49-2.01-4.5-4.5-4.5zm2.5 4.5h-5V9c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v1z"/></svg>
  ),
  notion: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.5 4.5c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-11c-.83 0-1.5-.67-1.5-1.5V6c0-.83.67-1.5 1.5-1.5h11zM8 8v2h8V8H8zm0 4v2h8v-2H8z"/></svg>
  ),
  bilibili: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.223 3.086a1.25 1.25 0 00-1.41.308l-1.29 1.77A9.01 9.01 0 0012 4.5a8.98 8.98 0 00-3.51.704l-1.3-1.76a1.25 1.25 0 00-1.72-.31 1.25 1.25 0 00-.31 1.72l1.07 1.46A8.96 8.96 0 003 12.5v5.75A1.25 1.25 0 004.25 19.5h15.5a1.25 1.25 0 001.25-1.25V12.5a8.96 8.96 0 00-3.24-6.68l1.07-1.47a1.25 1.25 0 00-.307-1.744zM12 7a5.5 5.5 0 015.5 5.5h-11A5.5 5.5 0 0112 7zM7.5 13.5h1.25v2H7.5v-2zm4.25 0h1.25v2h-1.25v-2zm4.25 0H17.25v2H16v-2z"/></svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21.582 5.524a2.73 2.73 0 00-1.926-1.926C18.254 3.33 12 3.33 12 3.33s-6.254 0-7.656.268a2.73 2.73 0 00-1.926 1.926C2 6.94 2 10.17 2 10.17s0 3.228.418 4.646a2.73 2.73 0 001.926 1.926c1.402.268 7.656.268 7.656.268s6.254 0 7.656-.268a2.73 2.73 0 001.926-1.926C22 13.398 22 10.17 22 10.17s0-3.23-.418-4.646zM10 13.5v-6.6l5.5 3.3L10 13.5z"/></svg>
  ),
  xiaohongshu: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm5 4h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
  ),
  douyin: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.37a6.34 6.34 0 00-1-.08A6.34 6.34 0 003.15 15.6 6.34 6.34 0 109.49 9.37V6.61a8.27 8.27 0 004.77 1.53V5.09a4.86 4.86 0 01-1.67-.84l.67-1.56h3.33v3.99z"/></svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  trend: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  ),
  pixiv: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M5.791 2.783c-.46.048-.688.252-.688.544v1.068H17.25V3.327c0-.292-.228-.496-.688-.544H5.791zm-.688 2.612v6.036c0 .336.016.504.096.564.08.06.336.036.84-.012l.648-.06V7.883h9.042v3.96l.648.06c.504.048.76.072.84.012.08-.06.096-.228.096-.564V5.395H5.103z"/><path d="M8.07 12.97v5.436c0 .528.204.732.792.828l3.744.552c.84.12 1.5.18 2.004.18 1.236 0 1.836-.564 1.836-1.692v-2.4c0-.876-.312-1.44-.924-1.668-.432-.156-1.176-.252-2.088-.288l-1.02-.036V12.97H8.07z"/></svg>
  ),
};

export default function SocialLinks({ size = 'default' }: { size?: 'default' | 'small' }) {
  const iconSize = size === 'small' ? 36 : 44;

  return (
    <div className="social-links-row">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: size === 'small' ? '12px' : '16px',
          justifyContent: 'flex-start',
        }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + index * 0.04, duration: 0.3 }}
            whileHover={{ 
              y: -3, 
              scale: 1.12,
              boxShadow: '4px 4px 12px rgba(209, 217, 230, 0.5), -4px -4px 12px rgba(240, 244, 250, 0.7)',
            }}
            whileTap={{ scale: 0.92 }}
            title={social.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              borderRadius: '50%',
              background: 'var(--bg-primary)',
              boxShadow: 'var(--shadow-raised-sm)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
          >
            {SocialIcons[social.icon] || <span style={{ fontSize: '14px' }}>●</span>}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
