import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { personal } from '../data/index.js'
import { ArrowDown, Mail } from 'lucide-react'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: '#00FFB2' },
      links: { color: '#00FFB2', distance: 130, enable: true, opacity: 0.08, width: 1 },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, speed: 0.6 },
      number: { density: { enable: true, area: 900 }, value: 60 },
      opacity: { value: 0.15 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 2.5 } },
    },
    detectRetina: true,
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }),
  }

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,178,0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00FFB2', background: 'rgba(0,255,178,0.06)', border: '1px solid rgba(0,255,178,0.2)', padding: '4px 12px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FFB2', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            open to opportunities
          </span>
        </motion.div>
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.2rem', color: '#E6EDF3' }}>
          Hi, I'm <span style={{ color: '#00FFB2', textShadow: '0 0 30px rgba(0,255,178,0.35)' }}>{personal.name}</span>
        </motion.h1>
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: '#7D8590', marginBottom: '1.8rem', minHeight: 40 }}>
          <span style={{ color: '#00FFB2', marginRight: 8 }}>&gt;</span>
          <TypeAnimation sequence={personal.taglines.flatMap(t => [t, 2200])} wrapper="span" speed={55} repeat={Infinity} style={{ color: '#E6EDF3' }} />
        </motion.div>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', color: '#7D8590', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem' }}>
          {personal.bio}
        </motion.p>
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
          <a href="#projects" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 15, background: '#00FFB2', color: '#080C10', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', transition: 'box-shadow 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.target.style.boxShadow = '0 0 24px rgba(0,255,178,0.4)'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'translateY(0)' }}>
            View my work
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 15, color: '#E6EDF3', border: '1px solid #21262D', padding: '12px 28px', borderRadius: 8, textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,255,178,0.4)'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.borderColor = '#21262D'; e.target.style.transform = 'translateY(0)' }}>
            GitHub profile
          </a>
        </motion.div>
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'flex', gap: '1rem' }}>
          {[
            { href: personal.github, icon: <GithubIcon />, label: 'GitHub' },
            { href: personal.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: <Mail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              style={{ color: '#3D444D', transition: 'color 0.2s, transform 0.2s', display: 'flex' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#00FFB2'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#3D444D'; e.currentTarget.style.transform = 'translateY(0)' }}>
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: '#3D444D', zIndex: 1 }}>
        <ArrowDown size={20} />
      </motion.div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </section>
  )
}
