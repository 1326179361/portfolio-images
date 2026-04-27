import { img } from '../lib/img';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, User, Phone, Mail, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';
import SocialLinks from '../components/SocialLinks';
import { personalInfo, workExperiences, keyProjects, professionalAchievements, educationBackground } from '../data/portfolio';

// ========================================
// Hero Section with Three.js Background
// ========================================
function HeroSection() {
  return (
    <section className="hero-section" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Three.js Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#080c14',
        zIndex: 0,
      }}>
        <HeroCanvas height="100%" />


      </div>

      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '580px',
          padding: '0 60px',
          marginLeft: '5%',
          marginTop: '-8vh',
        }}
      >
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            height: '3px',
            marginBottom: '28px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #3E5EFF, #FF457A)',
            boxShadow: '0 0 12px rgba(139, 170, 204, 0.4)',
          }}
        />

        <h1 style={{
          fontFamily: "'Comfortaa', sans-serif",
          fontSize: 'clamp(3.2rem, 7vw, 5.2rem)',
          fontWeight: 700,
          color: '#E8EDF5',
          lineHeight: 1.5,
          marginBottom: '32px',
          letterSpacing: '-0.02em',
          textShadow: '0 2px 30px rgba(62, 94, 255, 0.3)',
        }}>
          <div style={{ marginBottom: '8px' }}>Technology makes possibilities.</div>
          <div style={{ marginBottom: '8px' }}>Design makes solutions.</div>
          <div>Art makes questions.</div>
        </h1>

        <p style={{
          fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
          color: 'rgba(232, 237, 245, 0.65)',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '32px',
        }}>
          {personalInfo.slogan}
        </p>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span style={{
            fontSize: '0.8rem',
            color: 'rgba(232, 237, 245, 0.45)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            UX Designer ＆ Digital Creator
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '6px',
            color: 'rgba(232, 237, 245, 0.35)',
            fontSize: '0.75rem',
          }}
        >
          <span>Scroll</span>
          <div style={{ width: '1px', height: '24px', background: 'rgba(232, 237, 245, 0.25)' }} />
        </motion.div>
      </motion.div>

      {/* Right side: 3D visuals are in the canvas background */}
    </section>
  );
}

// ========================================
// About / Profile Section
// ========================================
function AboutSection() {
  return (
    <motion.section
      className="about-section section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'var(--bg-primary)',
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '80px',
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '60px',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {/* Left: Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative',
          }}
        >
          {/* Photo container */}
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '12px 12px 30px rgba(209, 217, 230, 0.4), -8px -8px 24px rgba(240, 244, 250, 0.6)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${img('/images/Profile.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(to top, var(--bg-primary) 0%, rgba(232, 237, 245, 0.6) 40%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: '40px',
              height: '40px',
              borderTop: '2px solid rgba(62, 94, 255, 0.3)',
              borderLeft: '2px solid rgba(62, 94, 255, 0.3)',
              borderRadius: '8px 0 0 0',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '40px',
              height: '40px',
              borderBottom: '2px solid rgba(255, 69, 122, 0.3)',
              borderRight: '2px solid rgba(255, 69, 122, 0.3)',
              borderRadius: '0 0 8px 0',
              pointerEvents: 'none',
            }} />
          </div>
        </motion.div>

        {/* Right: Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Name */}
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}>
            {personalInfo.name}
          </h2>

          {/* Basic Info Grid - No card style, larger text */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '32px',
          }}>
            <InfoItemLarge icon={<User size={20} />} label="性别" value={personalInfo.gender} />
            <InfoItemLarge icon={<Calendar size={20} />} label="出生日期" value={`${personalInfo.birthdate} (${personalInfo.age}岁)`} />
            <InfoItemLarge icon={<Phone size={20} />} label="电话" value={personalInfo.phone} />
            <InfoItemLarge icon={<Mail size={20} />} label="邮箱" value={personalInfo.email} />
            <InfoItemLarge icon={<GraduationCap size={20} />} label="学历" value={personalInfo.education} />
            <InfoItemLarge icon={<MapPin size={20} />} label="城市" value={personalInfo.city} />
            <InfoItemLarge icon={<Briefcase size={20} />} label="经验" value={personalInfo.experience} />
            <InfoItemLarge icon={<Award size={20} />} label="求职意向" value={personalInfo.jobIntention} highlight />
          </div>

          {/* Social Links */}
          <SocialLinks />

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-section .container {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-section .container > div:first-child {
            max-width: 360px;
            margin: 0 auto;
          }
        }
      `}</style>
    </motion.section>
  );
}

// Info Item Component - Large version
function InfoItemLarge({ icon, label, value, highlight = false }: { icon: React.ReactNode; label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
    }}>
      <span style={{ 
        color: highlight ? '#FF457A' : '#3E5EFF', 
        flexShrink: 0,
        marginTop: '2px',
      }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <span style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)', 
          display: 'block',
          marginBottom: '2px',
        }}>{label}</span>
        <span style={{ 
          fontSize: '1.05rem', 
          color: highlight ? '#FF457A' : '#4A5568',
          fontWeight: highlight ? 600 : 400,
          lineHeight: 1.4,
        }}>{value}</span>
      </div>
    </div>
  );
}

// ========================================
// Work Experience Section
// ========================================
function ExperienceSection() {
  return (
    <motion.section
      className="experience-section"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '40px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            职业履历
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          paddingLeft: '40px',
        }}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '13px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'rgba(223, 53, 138, 0.8)',
              transformOrigin: 'top',
              borderRadius: '1px',
            }}
          />

          {workExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceCard({ experience, index }: { experience: typeof workExperiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
      style={{
        position: 'relative',
        marginBottom: index < workExperiences.length - 1 ? '48px' : '0',
        paddingBottom: '36px',
      }}
    >
      {/* Dot */}
      <div style={{
        position: 'absolute',
        left: '-33px',
        top: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: 'var(--bg-primary)',
        border: '3px solid var(--accent-primary)',
        boxShadow: '0 0 0 4px var(--bg-primary), var(--shadow-raised-sm)',
        zIndex: 2,
      }} />

      {/* Card */}
      <div style={{
        padding: '28px 32px',
        borderRadius: '20px',
        background: 'var(--bg-primary)',
        boxShadow: 'var(--shadow-raised)',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '10px 10px 22px rgba(209, 217, 230, 0.5), -8px -8px 18px rgba(240, 244, 250, 0.7)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-raised)';
      }}
      >
        {/* Period & Duration */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: '50px',
            background: 'rgba(62, 94, 255, 0.1)',
            color: 'var(--accent-primary)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
          }}>
            {experience.period}
          </span>
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}>
            {experience.duration}
          </span>
        </div>

        {/* Company */}
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.35rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '4px',
          letterSpacing: '-0.01em',
        }}>
          {experience.company}
        </h3>

        {/* Position & Level */}
        <p style={{
          fontSize: '1rem',
          color: 'var(--accent-secondary)',
          fontWeight: 500,
          marginBottom: '12px',
        }}>
          {experience.position} {experience.level && `| ${experience.level}`}
        </p>

        {/* Description */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '16px',
        }}>
          {experience.description}
        </p>

        {/* Achievements */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {experience.achievements.map((achievement, i) => (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              fontSize: '0.85rem',
              color: '#7B8794',
              marginBottom: i < experience.achievements.length - 1 ? '6px' : '0',
              lineHeight: 1.5,
            }}>
              <span style={{
                color: '#FF457A',
                flexShrink: 0,
                marginTop: '2px',
              }}>✦</span>
              <HighlightNumbers text={achievement} />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ========================================
// Helper: Highlight Numbers in Text
// ========================================
function HighlightNumbers({ text }: { text: string }) {
  // Split text by numbers and highlight them
  const parts = text.split(/(\d+[\d\+\.]*(?:%|分|次|个|款|条|项|人|月)?)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        // Check if part is a number with optional suffix
        if (/^\d+[\d\+\.]*(?:%|分|次|个|款|条|项|人|月)?$/.test(part)) {
          return (
            <span key={i} style={{
              color: '#FF457A',
              fontWeight: 600,
            }}>
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// ========================================
// Key Projects Section
// ========================================
function KeyProjectsSection() {
  return (
    <motion.section
      className="key-projects-section"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '40px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            核心项目成果
          </h2>
        </motion.div>

        {/* Projects */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {keyProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project, index }: { project: typeof keyProjects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
      style={{
        padding: '32px',
        borderRadius: '24px',
        background: 'var(--bg-primary)',
        boxShadow: 'var(--shadow-raised)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#3E5EFF',
          flexShrink: 0,
        }} />
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.3rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>
        <span style={{
          padding: '4px 12px',
          borderRadius: '50px',
          background: 'rgba(62, 94, 255, 0.1)',
          color: '#3E5EFF',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}>
          {project.tag}
        </span>
      </div>

      {/* Background */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#4A5568',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4A5568' }} />
          项目背景
        </h4>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          paddingLeft: '10px',
        }}>
          {project.background}
        </p>
      </div>

      {/* Process */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#4A5568',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4A5568' }} />
          执行过程
        </h4>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          paddingLeft: '10px',
        }}>
          <HighlightNumbers text={project.process} />
        </p>
      </div>

      {/* Data Validation - Highlighted */}
      <div style={{
        padding: '20px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(62, 94, 255, 0.08) 0%, rgba(255, 69, 122, 0.05) 100%)',
        border: '1px solid rgba(62, 94, 255, 0.15)',
      }}>
        <h4 style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#4A5568',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <Award size={16} />
          数据验证
        </h4>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '16px',
        }}>
          <HighlightNumbers text={project.dataValidation} />
        </p>
        
        {/* Data Highlights */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          {project.dataHighlights.map((highlight, i) => (
            <span key={i} style={{
              padding: '8px 16px',
              borderRadius: '50px',
              background: 'var(--bg-primary)',
              boxShadow: 'var(--shadow-raised-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#4A5568',
            }}>
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// Professional Achievements Section
// ========================================
function ProfessionalSection() {
  return (
    <motion.section
      className="professional-section"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '40px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            方法论与成果
          </h2>
        </motion.div>

        {/* Achievements */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {professionalAchievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              style={{
                padding: '28px 32px',
                borderRadius: '20px',
                background: 'var(--bg-primary)',
                boxShadow: 'var(--shadow-raised)',
                marginBottom: '20px',
              }}
            >
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <BookOpen size={18} style={{ color: '#3E5EFF' }} />
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>
                {item.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}>
                {item.dataHighlights.map((highlight, i) => (
                  <span key={i} style={{
                    padding: '6px 14px',
                    borderRadius: '50px',
                    background: 'rgba(255, 69, 122, 0.1)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#FF457A',
                  }}>
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ========================================
// Education Section
// ========================================
function EducationSection() {
  return (
    <motion.section
      className="education-section"
      style={{
        background: 'var(--bg-primary)',
        paddingTop: '40px',
        paddingBottom: '80px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            学历与语言
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {educationBackground.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              style={{
                padding: '24px',
                borderRadius: '20px',
                background: 'var(--bg-primary)',
                boxShadow: 'var(--shadow-raised)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '50px',
                  background: 'rgba(62, 94, 255, 0.1)',
                  color: '#3E5EFF',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}>
                  {edu.type}
                </span>
                <span style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}>
                  {edu.period}
                </span>
              </div>
              
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}>
                {edu.school}
              </h3>
              
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}>
                {edu.major}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '4px',
              }}>
                <Award size={14} style={{ color: '#FF457A' }} />
                <span style={{
                  fontSize: '0.85rem',
                  color: '#FF457A',
                  fontWeight: 500,
                }}>
                  {edu.certification}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ========================================
// Main Home Page
// ========================================
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <KeyProjectsSection />
      <ProfessionalSection />
      <EducationSection />
    </>
  );
}

