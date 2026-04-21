import { img } from '../lib/img';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Music2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { performanceVideos } from '../data/portfolio';

// Reusable Video Card Component (used by Perf/Anim/MV pages)
function VideoCard({ item, index, isInView }: { 
  item: typeof performanceVideos[0]; 
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
        
        {/* Play button overlay */}
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
            <Play size={22} color="#3E5EFF" fill="#3E5EFF" strokeWidth={1.5} style={{ marginLeft: '3px' }} />
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
        
        {/* Band Name for Performance */}
        {item.bandName && (
          <p style={{
            fontSize: '0.88rem',
            color: 'var(--accent-primary)',
            fontWeight: 500,
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <Music2 size={14} />
            {item.bandName}
          </p>
        )}

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
// Main Performance Page
// ========================================
export default function PerformancePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <PageHero
        title="乐器演奏视频"
        subtitle="业余兴趣爱好"
        tags={["Electric Guitar", "Blues Rock", "Jazz", "Live Session"]}
        bgImage={img("/images/heroes/hero-performance.png")}
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
          {performanceVideos.map((video, i) => (
            <VideoCard key={video.id} item={video} index={i} isInView={isInView} />
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
          @media (min-width: 901px) and (max-width: 1200px) {
            section[style*="min-height"] > div[style*="grid"] {
              padding: 0 30px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
