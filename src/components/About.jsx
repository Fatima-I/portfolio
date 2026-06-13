import FadeIn from './FadeIn.jsx'
import { personal, education } from '../data/index.js'
import { MapPin, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0', borderTop: '1px solid #21262D' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* Left — Avatar + info */}
        <FadeIn direction="left">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
            {/* Avatar */}
            <div style={{
              width: 100, height: 100, borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(0,255,178,0.15), rgba(0,255,178,0.03))',
              border: '1px solid rgba(0,255,178,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: '#00FFB2',
              boxShadow: '0 0 30px rgba(0,255,178,0.08)',
            }}>
              {personal.initials}
            </div>

            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 600, color: '#E6EDF3', marginBottom: 6 }}>
                {personal.name}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#7D8590', fontSize: 14, marginBottom: 4 }}>
                <MapPin size={14} />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>{personal.location}</span>
              </div>
            </div>

            {/* Education */}
            {education.map((edu, i) => (
              <div key={i} style={{
                background: '#0D1117', border: '1px solid #21262D',
                borderRadius: 10, padding: '1rem 1.25rem',
                display: 'flex', gap: 12, alignItems: 'flex-start', width: '100%',
              }}>
                <GraduationCap size={18} style={{ color: '#00FFB2', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 500, color: '#E6EDF3', marginBottom: 2 }}>{edu.degree}</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00C87A' }}>{edu.school} · {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right — Text */}
        <FadeIn direction="right" delay={0.1}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00FFB2', marginBottom: 8 }}>
              // about me
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#E6EDF3', marginBottom: '1.5rem' }}>
              Who I am
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#7D8590', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              {personal.bio}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#7D8590', lineHeight: 1.85 }}>
              I'm currently in my final year, actively looking for internships and graduate roles in AI/ML engineering. When I'm not training models, I'm building the tools to deploy them.
            </p>

            {/* Quick stats */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              {[
                { num: '8+', label: 'Projects built' },
                { num: '85%', label: 'Best model accuracy' },
                { num: '3', label: 'Live deployments' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#00FFB2' }}>{num}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#7D8590' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
