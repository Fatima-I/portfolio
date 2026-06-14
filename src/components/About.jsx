import FadeIn from './FadeIn.jsx'
import { motion } from 'framer-motion'
import { personal, education } from '../data/index.js'
import { MapPin, GraduationCap } from 'lucide-react'

export default function About() {
  // const stats = [
  //   { num: '8+', label: 'Projects built', color: '#00FFB2' },
  //   { num: '85%', label: 'Best model acc.', color: '#7B6EF6' },
  //   { num: '3', label: 'Live deployments', color: '#F471B5' },
  // ]

  return (
    <section id="about" style={{ padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        <FadeIn direction="left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', width: 'fit-content' }}>
              <div style={{
                width: 90, height: 90, borderRadius: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700,
                background: 'linear-gradient(135deg, rgba(0,255,178,0.1), rgba(123,110,246,0.1))',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#E6EDF3',
                animation: 'glow 4s ease infinite',
              }}>
                <span style={{ background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FI</span>
              </div>
              <div style={{ position: 'absolute', bottom: -4, right: -4, width: 18, height: 18, borderRadius: '50%', background: '#00FFB2', border: '2px solid #060608', animation: 'pulse 2s infinite' }} />
            </div>

            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 600, color: '#D0D8E0', marginBottom: 6 }}>{personal.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#8892A0' }}>
                <MapPin size={13} style={{ color: '#7B6EF6' }} />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>{personal.location}</span>
              </div>
            </div>

            {/* Stats
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {stats.map(({ num, label, color }) => (
                <div key={label} style={{
                  background: 'rgba(12, 18, 28, 0.9)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12, padding: '0.9rem 0.7rem', textAlign: 'center',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${color}30`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color, marginBottom: 2 }}>{num}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: '#8892A0', lineHeight: 1.3 }}>{label}</p>
                </div>
              ))}
            </div> */}

            {/* Education */}
            {education.map((edu, i) => (
              <div key={i} style={{
                background: 'rgba(123,110,246,0.04)', border: '1px solid rgba(123,110,246,0.12)',
                borderRadius: 12, padding: '1rem 1.2rem',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <GraduationCap size={16} style={{ color: '#7B6EF6', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 500, color: '#C0CAD4', marginBottom: 3 }}>{edu.degree}</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#7B6EF6' }}>{edu.school} · {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#F471B5', marginBottom: 10 }}>// about me</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
              <span style={{ background: 'linear-gradient(135deg, #E6EDF3 0%, #8892A0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Who I am
              </span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#8892A0', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              {personal.bio}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#8892A0', lineHeight: 1.9, marginBottom: '2rem' }}>
              I am open to internship and full-time roles across AI/ML, full stack web and mobile development, and automation.
            </p>

            {/* Interest tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Machine Learning', 'NLP', 'MLOps', 'Flask APIs', 'React', 'Data Science'].map((tag, i) => {
                const colors = ['#00FFB2', '#7B6EF6', '#F471B5', '#00C8FF', '#FFB347', '#00FFB2']
                const c = colors[i % colors.length]
                return (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: c,
                    background: `${c}08`, border: `1px solid ${c}20`,
                    padding: '5px 12px', borderRadius: 20,
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = `${c}15`}
                    onMouseLeave={e => e.currentTarget.style.background = `${c}08`}>
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
