import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  tags: string[];
  gradient?: string;
  bgImage?: string; // Hero background image URL
}

export default function PageHero({ title, subtitle, tags, gradient, bgImage }: PageHeroProps) {
  // Default gradient for each section type
  const bgGradient = gradient || 'linear-gradient(135deg, #1a2235 0%, #2D3A52 50%, #0d1320 100%)';

  return (
    <section style={{
      width: '100%',
      minHeight: bgImage ? '440px' : '420px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 40px 80px',
    }}>
      {/* Background Image Layer */}
      {bgImage && (
        <>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }} />
          {/* Dark overlay for text readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(13, 19, 32, 0.55) 0%, rgba(13, 19, 32, 0.72) 50%, rgba(13, 19, 32, 0.88) 100%)',
          }} />
        </>
      )}

      {/* Fallback gradient (when no image or as base) */}
      {!bgImage && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: bgGradient,
        }} />
      )}

      {/* Decorative elements - always on top */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(62, 94, 255, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 69, 122, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(62, 94, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(62, 94, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '720px',
        }}
      >
        {/* Title */}
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
          fontWeight: 700,
          color: '#E8EDF5',
          marginBottom: '16px',
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          color: 'rgba(232, 237, 245, 0.65)',
          marginBottom: '28px',
          lineHeight: 1.6,
        }}>
          {subtitle}
        </p>

        {/* Tags */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 20px',
                borderRadius: '50px',
                background: 'rgba(232, 237, 245, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(232, 237, 245, 0.12)',
                color: 'rgba(232, 237, 245, 0.75)',
                fontSize: '0.85rem',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
