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

// const LinkedinIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//   </svg>
// )

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: ['#00FFB2', '#7B6EF6', '#F471B5'] },
      links: { color: '#7B6EF6', distance: 130, enable: true, opacity: 0.06, width: 1 },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, speed: 0.5 },
      number: { density: { enable: true, area: 900 }, value: 70 },
      opacity: { value: { min: 0.05, max: 0.2 } },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
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

      {/* Multi-color ambient blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,178,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '30%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,110,246,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,113,181,0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 2rem', width: '100%' }}>

        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
            padding: '6px 14px', borderRadius: 20,
            background: 'rgba(123,110,246,0.08)',
            border: '1px solid rgba(123,110,246,0.25)',
            color: '#A89AF6',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FFB2', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            open to opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.05, marginBottom: '1.2rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 400, color: '#7D8590', marginBottom: '0.5rem', fontFamily: "'JetBrains Mono', monospace" }}>
              &gt; Hello, world. I'm
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              background: 'linear-gradient(135deg, #E6EDF3 0%, #E6EDF3 40%, #00FFB2 70%, #7B6EF6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {personal.name}
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', marginBottom: '1.8rem', minHeight: 44, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            fontWeight: 500,
          }}>_</span>
          <TypeAnimation
            sequence={personal.taglines.flatMap(t => [t, 2400])}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            style={{ fontFamily: "'Space Grotesk', monospace", color: '#C0CAD4', fontWeight: 500 }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '1.05rem', color: '#6B7785', maxWidth: 500, lineHeight: 1.8, marginBottom: '2.5rem', fontFamily: "'Inter', sans-serif" }}>
          {personal.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#projects"
            style={{
              position: 'relative', overflow: 'hidden',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15,
              color: '#060608', textDecoration: 'none',
              padding: '13px 30px', borderRadius: 10,
              background: 'linear-gradient(135deg, #00FFB2, #00C8FF)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,255,178,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
            View my work →
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&to=${personal.email}`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 15,
              color: '#C0CAD4', textDecoration: 'none',
              padding: '13px 30px', borderRadius: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.2s, border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(123,110,246,0.4)'; e.currentTarget.style.background = 'rgba(123,110,246,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}>
            Get in touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B7785' }}>find me on</span>
          {[
            { href: personal.github, icon: <GithubIcon />, label: 'GitHub', color: '#00FFB2' },
            //{ href: personal.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn', color: '#7B6EF6' },
            { href: `https://mail.google.com/mail/?view=cm&to=${personal.email}`, icon: <Mail size={20} />, label: 'Email', color: '#F471B5' },
          ].map(({ href, icon, label, color }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              style={{ color: '#6B7785', transition: 'color 0.2s, transform 0.2s', display: 'flex' }}
              onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6B7785'; e.currentTarget.style.transform = 'translateY(0)' }}>
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#2D333B', letterSpacing: '0.1em' }}>SCROLL</span>
        <ArrowDown size={16} style={{ color: '#2D333B' }} />
      </motion.div>
    </section>
  )
}
