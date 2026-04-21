import { img } from '../lib/img';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import PageHero from '../components/PageHero';
import { animationVideos } from '../data/portfolio';

function AnimationCard({ item, index, isInView }: { 
  item: typeof animationVideos[0]; 
  index: number; 
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -8 }}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        boxShadow: 'var(--shadow-raised)',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '12px 12px 24px rgba(209, 217, 230, 0.5), -10px -10px 20px rgba(240, 244, 250, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-raised)';
      }}
    >
      {/* Cover Image */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img src={item.cover} alt={item.title} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }} />
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(13, 19, 32, 0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.3s ease',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(13, 19, 32, 0.45)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(13, 19, 32, 0)')}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(232, 237, 245, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '4px 4px 12px rgba(209, 217, 230, 0.5), -4px -4px 12px rgba(240, 244, 250, 0.7)',
            }}
          >
            <Play size={22} color="#FF457A" fill="#FF457A" strokeWidth={1.5} style={{ marginLeft: '3px' }} />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '6px',
          letterSpacing: '-0.01em',
        }}>
          {item.title}
        </h3>

        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-muted)',
          lineHeight: 1.55,
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {item.description}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {item.tags.map(tag => (
            <span key={tag} className="neu-tag" style={{ fontSize: '0.76rem', padding: '5px 13px' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// Main Animation Page
// ========================================
export default function AnimationPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <PageHero
        title="动画视频"
        subtitle="业余兴趣爱好"
        tags={["Motion Graphics", "Generative Art", "GLSL", "Creative Coding"]}
        bgImage={img("/images/heroes/hero-animation.png")}
      />

      <section ref={ref} style={{
        background: 'var(--bg-primary)',
        padding: '60px 0 80px',
        minHeight: '60vh',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
        }}>
          {animationVideos.map((video, i) => (
            <AnimationCard key={video.id} item={video} index={i} isInView={isInView} />
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            section[style*="min-height"] > div[style*="grid"] {
              grid-template-columns: 1fr !important;
              padding: 0 20px !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
