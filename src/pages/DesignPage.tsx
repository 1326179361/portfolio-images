import { img } from '../lib/img';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import { designProjects } from '../data/portfolio';

const subTabs = [
  { key: 'business', label: '业务项目' },
  { key: 'mobile', label: '移动端项目' },
  { key: 'personal', label: '自驱项目' },
];

export default function DesignPage() {
  const [activeTab, setActiveTab] = useState('business');
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true });

  const filteredProjects = designProjects.filter(p => p.category === activeTab);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="设计领域作品"
        subtitle="工作中积累的实战项目"
        tags={["UI/UX Design", "Design System", "AI Integration", "Enterprise SaaS"]}
        bgImage={img("/images/heroes/hero-design.png")}
      />

      {/* Sub Navigation Tabs */}
      <div style={{
        position: 'sticky',
        top: '72px',
        zIndex: 100,
        background: 'rgba(232, 237, 245, 0.92)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 20px rgba(209, 217, 230, 0.2)',
        padding: '16px 0',
      }}>
        <div style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          padding: '0 20px',
        }}>
          {subTabs.map(tab => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: '10px 22px',
                borderRadius: '14px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                fontWeight: activeTab === tab.key ? 600 : 500,
                background: activeTab === tab.key 
                  ? 'rgba(62, 94, 255, 0.12)' 
                  : 'var(--bg-primary)',
                color: activeTab === tab.key ? 'var(--accent-primary)' : 'var(--text-secondary)',
                boxShadow: activeTab === tab.key
                  ? 'inset 2px 2px 6px rgba(209, 217, 230, 0.5), inset -2px -2px 6px rgba(240, 244, 250, 0.5)'
                  : '4px 4px 10px rgba(209, 217, 230, 0.25), -4px -4px 10px rgba(240, 244, 250, 0.25)',
                transition: 'all 0.25s ease',
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Area - Images only */}
      <section ref={contentRef} style={{
        background: 'var(--bg-primary)',
        padding: '60px 0 80px',
        minHeight: '60vh',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 40px',
            }}
          >
            {filteredProjects.map((project) =>
              project.images.map((imgSrc, imgIndex) => {
                const globalIndex = project.images.length > 1
                  ? filteredProjects.slice(0, filteredProjects.indexOf(project)).reduce((sum, p) => sum + p.images.length, 0) + imgIndex
                  : imgIndex;
                return (
                  <motion.div
                    key={`${project.id}-${imgIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: globalIndex * 0.08, duration: 0.45 }}
                    style={{
                      width: '100%',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: imgIndex < project.images.length - 1 ? '32px' : '0',
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} - ${imgIndex + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: 'var(--text-muted)',
          }}>
            <p>该分类下暂无作品</p>
          </motion.div>
        )}
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="min-height"] > div {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
          }
        }
      `}</style>
    </>
  );
}
