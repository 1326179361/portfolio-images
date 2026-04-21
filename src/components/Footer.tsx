import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      padding: '60px 40px 40px',
      position: 'relative',
    }}>
      {/* Decorative top line */}
      <div style={{
        maxWidth: '200px',
        height: '3px',
        margin: '0 auto 48px',
        borderRadius: '2px',
        background: 'linear-gradient(90deg, #3E5EFF, #FF457A)',
        boxShadow: '0 2px 8px rgba(62, 94, 255, 0.2)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Name - CHENYI */}
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '28px',
          letterSpacing: '0.15em',
        }}>
          CHENYI
        </h3>

        {/* Contact Info - Plain text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '32px',
          alignItems: 'center',
        }}>
          <span style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            letterSpacing: '0.02em',
          }}>
            chen252213@163.com
          </span>
          <span style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            letterSpacing: '0.02em',
          }}>
            137-1846-0105
          </span>
        </div>

        {/* Copyright */}
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.82rem',
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(209, 217, 230, 0.4)',
        }}>
          © 2026 All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
