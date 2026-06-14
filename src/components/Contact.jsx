import FadeIn from './FadeIn.jsx'
import { motion } from 'framer-motion'
import { personal } from '../data/index.js'
import { Mail, ArrowUpRight } from 'lucide-react'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(123,110,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative' }}>
        <FadeIn>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#F471B5', marginBottom: 10 }}>// get in touch</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
            <span style={{ background: 'linear-gradient(135deg, #E6EDF3 0%, #00FFB2 50%, #7B6EF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Let's build something
            </span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #7B6EF6, #F471B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              together.
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#5A6370', lineHeight: 1.85, marginBottom: '3rem', maxWidth: 500, margin: '0 auto 3rem' }}>
            I am open to internship and full-time roles across AI/ML, full stack web and mobile development, and automation. Whether you have a role, a project or just want to talk about intelligent systems - my inbox is open.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <motion.a href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem',
                color: '#060608',
                padding: '15px 36px', borderRadius: 12, textDecoration: 'none',
                background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)',
                boxShadow: '0 0 40px rgba(0,255,178,0.15), 0 0 80px rgba(123,110,246,0.1)',
              }}>
              <Mail size={18} />
              Say hello
              <ArrowUpRight size={16} />
            </motion.a>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                { href: personal.github, icon: <GithubIcon />, label: 'GitHub', color: '#00FFB2' },
                { href: personal.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn', color: '#7B6EF6' },
              ].map(({ href, icon, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#5A6370', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = color}
                  onMouseLeave={e => e.currentTarget.style.color = '#5A6370'}>
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
