import { img } from '../lib/img';
import { useRef, useEffect, useMemo, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import PageHero from '../components/PageHero';
import { illustrations, type Illustration } from '../data/portfolio';

// Masonry Layout Component for Illustrations
function MasonryGrid({ items }: { items: Illustration[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Calculate masonry columns based on viewport
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) setColumns(1);
      else if (window.innerWidth < 1100) setColumns(2);
      else setColumns(3);
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribute items into columns using CSS masonry approach
  const columnItems = useMemo(() => {
    const cols: Illustration[][] = Array.from({ length: columns }, () => []);
    items.forEach((item, i) => cols[i % columns].push(item));
    return cols;
  }, [items, columns]);

  return (
    <div ref={ref} style={{
      display: 'flex',
      gap: '24px',
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '0 40px',
    }}>
      {columnItems.map((colItems, colIndex) => (
        <div key={colIndex} style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {colItems.map((item, itemIndex) => (
            <MasonryCard 
              key={item.id} 
              item={item} 
              index={colIndex * colItems.length + itemIndex}
              isInView={isInView} 
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// Single Masonry Card
function MasonryCard({ item, index, isInView }: { item: Illustration; index: number; isInView: boolean }) {
  const controls = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => controls.start({ scale: 1.03 })}
      onHoverEnd={() => controls.start({ scale: 1 })}
      style={{
        borderRadius: '18px',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        boxShadow: 'var(--shadow-raised)',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '10px 10px 22px rgba(209, 217, 230, 0.5), -8px -8px 18px rgba(240, 244, 250, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-raised)';
      }}
    >
      {/* Image with dynamic height ratio */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.img
          animate={controls}
          transition={{ duration: 0.3 }}
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: `${item.width}/${item.height}`,
            objectFit: 'cover',
            display: 'block',
          }}
        />
        
        {/* Hover overlay with info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(13, 19, 32, 0.75) 0%, transparent 55%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px',
            pointerEvents: 'none',
          }}
        >
          <h4 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.05rem',
            fontWeight: 600,
            color: '#E8EDF5',
            marginBottom: '8px',
          }}>{item.title}</h4>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{
                padding: '3px 10px',
                borderRadius: '50px',
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'rgba(232, 237, 245, 0.85)',
                fontSize: '0.72rem',
                fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Info below image (visible always) */}
      <div style={{ padding: '16px' }}>
        <h4 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.95rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '6px',
        }}>{item.title}</h4>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {item.tags.map(tag => (
            <span key={tag} className="neu-tag" style={{ fontSize: '0.72rem', padding: '3px 11px' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// Main Illustration Page
// ========================================
export default function IllustrationPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: '-50px' });

  return (
    <>
      <PageHero
        title="插画领域作品"
        subtitle="业余兴趣爱好"
        tags={["Digital Art", "Fantasy", "Sci-Fi", "Abstract"]}
        bgImage={img("/images/heroes/hero-illustration.png")}
      />

      <section ref={contentRef} style={{
        background: 'var(--bg-primary)',
        padding: '60px 0 80px',
        minHeight: '60vh',
      }}>
        {/* Section intro text */}
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 48px',
          padding: '0 20px',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}
          >
            A visual journey through my creative explorations in digital illustration.
            Each piece is a window into imagination.
          </motion.p>
        </div>

        <MasonryGrid items={illustrations} />
      </section>
    </>
  );
}
