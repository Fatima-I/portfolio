import { motion } from 'framer-motion'
import { Brain, Code2, Globe, Wrench } from 'lucide-react'
import FadeIn from './FadeIn.jsx'
import { skills } from '../data/index.js'

const iconMap = { brain: Brain, code: Code2, globe: Globe, wrench: Wrench }

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 0', borderTop: '1px solid #21262D' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00FFB2', marginBottom: 8 }}>
              // tech stack
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#E6EDF3' }}>
              Skills
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {skills.map((group, gi) => {
            const Icon = iconMap[group.icon] || Code2
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                style={{
                  background: '#0D1117', border: '1px solid #21262D',
                  borderRadius: 12, padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(0,255,178,0.06)', border: '1px solid rgba(0,255,178,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} style={{ color: '#00FFB2' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: '#E6EDF3' }}>
                    {group.category}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + ii * 0.05 }}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                        color: '#7D8590', background: '#161B22',
                        border: '1px solid #21262D',
                        padding: '4px 10px', borderRadius: 4,
                        transition: 'color 0.2s, border-color 0.2s',
                        cursor: 'default',
                      }}
                      whileHover={{ color: '#00FFB2', borderColor: 'rgba(0,255,178,0.25)' }}
                    >{item}</motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
