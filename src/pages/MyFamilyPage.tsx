import { img } from '../lib/img';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, PawPrint, Calendar, Star } from 'lucide-react';
import PageHero from '../components/PageHero';
import { familyMembers } from '../data/portfolio';

// ========================================
// Info Row Component
// ========================================
function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
      <span style={{ color: 'var(--accent-secondary)' }}>{icon}</span>
      {label}
    </div>
  );
}

// ========================================
// Family Member Card with Hover Gallery
// ========================================
function CatCard({ cat, index, isInView, isReversed }: { 
  cat: typeof familyMembers[0]; 
  index: number; 
  isInView: boolean;
  isReversed: boolean;
}) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Determine which image to display
  const displayImage = hoveredImage !== null ? cat.images[hoveredImage] : cat.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.55 }}
      className="neu-raised"
      style={{
        display: 'grid',
        gridTemplateColumns: isReversed ? '1fr auto' : 'auto 1fr',
        gap: '0',
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        boxShadow: 'var(--shadow-raised-lg)',
        transition: 'box-shadow 0.35s ease',
        minHeight: '420px',
        alignItems: 'stretch',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setHoveredImage(null);
      }}
    >
      {/* Photo Area (4:3 ratio) */}
      <div style={{
        width: isReversed ? '100%' : '420px',
        minWidth: isReversed ? undefined : '320px',
        position: 'relative',
        overflow: 'hidden',
        order: isReversed ? 2 : 1,
      }}>
        {/* Main image */}
        <div style={{
          width: '100%',
          height: '100%',
          minHeight: '400px',
          backgroundImage: `url(${displayImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.4s ease',
        }}>
          {/* Hover thumbnail strip */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovering ? 1 : 0, x: isHovering ? 0 : 10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              gap: '8px',
              zIndex: 3,
            }}
          >
            {cat.images.map((img, imgIdx) => (
              <button
                key={imgIdx}
                onClick={(e) => { e.stopPropagation(); setHoveredImage(imgIdx); }}
                onMouseEnter={() => setHoveredImage(imgIdx)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  flex: 1,
                  height: '52px',
                  borderRadius: '10px',
                  border: (hoveredImage === imgIdx || (!hoveredImage && imgIdx === 0))
                    ? '2px solid var(--accent-primary)'
                    : '2px solid transparent',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                  outline: 'none',
                  opacity: (hoveredImage === imgIdx || (!hoveredImage && imgIdx === 0)) ? 1 : 0.65,
                  transition: 'opacity 0.2s, border-color 0.2s',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                }}
              />
            ))}
          </motion.div>

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13, 19, 32, 0.25) 0%, transparent 30%)',
            pointerEvents: 'none',
          }} />
          
          {/* Cat name overlay on photo */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            padding: '8px 18px',
            borderRadius: '50px',
            background: 'rgba(232, 237, 245, 0.92)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-raised-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <PawPrint size={14} color="var(--accent-warm)" fill="var(--accent-warm)" />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
              {cat.name}
            </span>
          </div>
        </div>
      </div>

      {/* Info Area */}
      <div style={{
        padding: '36px 32px',
        order: isReversed ? 1 : 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '280px',
      }}>
        {/* Personality badge - different colors for each cat */}
        {(() => {
          const badgeColors = [
            { bg: '#F0E8FF', border: 'rgba(139, 108, 181, 0.15)', text: '#7B5CB5' },
            { bg: '#FFE8EC', border: 'rgba(255, 69, 122, 0.15)', text: '#FF457A' },
            { bg: '#E8FFF0', border: 'rgba(123, 184, 154, 0.15)', text: '#5A987A' },
            { bg: '#FFF4E8', border: 'rgba(204, 153, 102, 0.15)', text: '#B88A50' },
          ];
          const colors = badgeColors[index % 4];
          return (
            <motion.span
              animate={isHovering ? { scale: 1.03 } : { scale: 1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '50px',
                background: colors.bg,
                boxShadow: `inset 2px 2px 4px ${colors.border}, inset -2px -2px 4px rgba(255,255,255,0.6)`,
                color: colors.text,
                fontSize: '0.82rem',
                fontWeight: 600,
                alignSelf: 'flex-start',
                marginBottom: '16px',
              }}
            >
              <Star size={13} /> {cat.personality}
            </motion.span>
          );
        })()}

        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          {cat.name}
        </h3>

        {/* Meta info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
          <InfoRow icon={<Calendar size={14} />} label={`Age: ${cat.age}`} />
          <InfoRow icon={<Heart size={14} />} label={`Favorite: ${cat.favorite}`} />
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          marginTop: '4px',
        }}>
          {cat.description}
        </p>

        {/* Heart decoration */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
          style={{
            marginTop: '20px',
            textAlign: 'center',
            color: 'var(--accent-warm)',
            opacity: 0.35,
          }}
        >
          <Heart size={20} fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ========================================
// Main MyFamily Page
// ========================================
export default function MyFamilyPage() {
  return (
    <>
      <PageHero
        title="家庭介绍"
        subtitle="家庭成员简介"
        tags={['Four Cats', 'Warm & Furry', 'The Real Bosses']}
        bgImage={img("/images/heroes/hero-family.png")}
      />

      <section style={{
        background: 'var(--bg-primary)',
        padding: '60px 0 80px',
        minHeight: '60vh',
      }}>
        {/* Section intro */}
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 52px',
          padding: '0 20px',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}
          >
            Meet my four furry family members — the real bosses of this household.
            Each one brings their own chaos and joy.
          </motion.p>
        </div>

        {/* Alternating Layout */}
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}>
          {familyMembers.map((cat, i) => (
            <CatMemberWrapper key={cat.id} cat={cat} index={i} isReversed={i % 2 === 1} />
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            section > div:last-of-type {
              padding: 0 20px !important;
            }
            section .neu-raised[style*="grid"] {
              grid-template-columns: 1fr !important;
            }
            section .neu-raised[style*="grid"] > div:first-child {
              width: 100% !important;
              min-width: unset !important;
              order: 1 !important;
            }
            section .neu-raised[style*="grid"] > div:nth-child(2) {
              order: 2 !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}

// Wrapper component for proper hook usage within the loop
function CatMemberWrapper({ cat, index, isReversed }: { cat: typeof familyMembers[0]; index: number; isReversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  
  return (
    <div ref={ref}>
      <CatCard cat={cat} index={index} isInView={isInView} isReversed={isReversed} />
    </div>
  );
}
