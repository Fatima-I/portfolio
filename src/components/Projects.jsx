import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn.jsx'
import { projects } from '../data/index.js'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const tagColors = [
  { bg: 'rgba(0,255,178,0.06)', border: 'rgba(0,255,178,0.15)', color: '#00C89A' },
  { bg: 'rgba(123,110,246,0.06)', border: 'rgba(123,110,246,0.15)', color: '#9B8FF8' },
  { bg: 'rgba(244,113,181,0.06)', border: 'rgba(244,113,181,0.15)', color: '#F471B5' },
  { bg: 'rgba(0,200,255,0.06)', border: 'rgba(0,200,255,0.15)', color: '#00C8FF' },
]

const INITIAL_COUNT = 8

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const accentColors = ['#00FFB2', '#7B6EF6', '#F471B5', '#00C8FF', '#FFB347', '#00FFB2']
  const accent = accentColors[index % accentColors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'rgba(12, 18, 28, 0.9)',
        backdropFilter: 'blur(24px)',
        border: `1px solid ${hovered ? `${accent}50` : 'rgba(255,255,255,0.12)'}`,
        borderRadius: 16, padding: '1.6rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        boxShadow: hovered ? `0 0 40px ${accent}10, 0 20px 40px rgba(0,0,0,0.4)` : '0 4px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        overflow: 'hidden',
      }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: hovered ? `linear-gradient(90deg, transparent, ${accent}, transparent)` : 'transparent',
        transition: 'background 0.3s',
      }} />
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 120, height: 120,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${accent}08 0%, transparent 70%)`,
        transition: 'opacity 0.3s',
        opacity: hovered ? 1 : 0,
      }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
        <span style={{ fontSize: 32, filter: hovered ? 'none' : 'grayscale(20%)' }}>{project.emoji}</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ color: '#3D444D', transition: 'color 0.2s, transform 0.2s', display: 'flex', padding: 6, borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = `${accent}40` }}
              onMouseLeave={e => { e.currentTarget.style.color = '#3D444D'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}>
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{ color: '#3D444D', transition: 'color 0.2s', display: 'flex', padding: 6, borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = `${accent}40` }}
              onMouseLeave={e => { e.currentTarget.style.color = '#3D444D'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 600, color: '#D0D8E0' }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#5A6370', lineHeight: 1.75, flex: 1 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {project.tags.map((tag, ti) => {
          const c = tagColors[ti % tagColors.length]
          return (
            <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: c.color, background: c.bg, border: `1px solid ${c.border}`, padding: '3px 8px', borderRadius: 4 }}>
              {tag}
            </span>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <FadeIn>
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#7B6EF6', marginBottom: 10, letterSpacing: '0.05em' }}>
              // what i've built
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700 }}>
              <span style={{ background: 'linear-gradient(135deg, #E6EDF3, #8892A0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Selected Projects
              </span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.25rem' }}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {!showAll && projects.length > INITIAL_COUNT && (
          <FadeIn delay={0.2}>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button onClick={() => setShowAll(true)} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 13,
                background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#8892A0', padding: '11px 30px', borderRadius: 10, cursor: 'pointer',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.borderColor = 'rgba(123,110,246,0.4)'; e.target.style.color = '#A89AF6'; e.target.style.background = 'rgba(123,110,246,0.06)' }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = '#8892A0'; e.target.style.background = 'rgba(255,255,255,0.03)' }}>
                show {projects.length - INITIAL_COUNT} more ↓
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
