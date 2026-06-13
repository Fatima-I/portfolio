import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn.jsx'
import { projects } from '../data/index.js'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0D1117',
        border: `1px solid ${hovered ? 'rgba(0,255,178,0.25)' : '#21262D'}`,
        borderRadius: 12, padding: '1.5rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        boxShadow: hovered ? '0 0 30px rgba(0,255,178,0.06), 0 8px 32px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: 28 }}>{project.emoji}</span>
        <div style={{ display: 'flex', gap: 10 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              style={{ color: '#3D444D', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00FFB2'}
              onMouseLeave={e => e.currentTarget.style.color = '#3D444D'}>
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo"
              style={{ color: '#3D444D', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00FFB2'}
              onMouseLeave={e => e.currentTarget.style.color = '#3D444D'}>
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, color: '#E6EDF3' }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#7D8590', lineHeight: 1.7, flex: 1 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#00C87A', background: 'rgba(0,255,178,0.06)', border: '1px solid rgba(0,255,178,0.12)', padding: '3px 9px', borderRadius: 4 }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)
  const visible = showAll ? projects : featured

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00FFB2', marginBottom: 8 }}>// what i've built</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#E6EDF3' }}>Projects</h2>
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        {!showAll && rest.length > 0 && (
          <FadeIn delay={0.2}>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button onClick={() => setShowAll(true)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#00FFB2', background: 'transparent', border: '1px solid rgba(0,255,178,0.3)', padding: '10px 28px', borderRadius: 8, cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.target.style.background = 'rgba(0,255,178,0.06)'}
                onMouseLeave={e => e.target.style.background = 'transparent'}>
                show {rest.length} more projects
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
