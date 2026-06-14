import { motion } from 'framer-motion'
import { Brain, Code2, Globe, Wrench } from 'lucide-react'
import FadeIn from './FadeIn.jsx'
import { skills } from '../data/index.js'

const iconMap = { brain: Brain, code: Code2, globe: Globe, wrench: Wrench }
const categoryColors = ['#00FFB2', '#7B6EF6', '#F471B5', '#00C8FF']

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '7rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <FadeIn>
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#00C8FF', marginBottom: 10 }}>// tech stack</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700 }}>
              <span style={{ background: 'linear-gradient(135deg, #E6EDF3, #8892A0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Skills & Stack
              </span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {skills.map((group, gi) => {
            const Icon = iconMap[group.icon] || Code2
            const color = categoryColors[gi % categoryColors.length]
            return (
              <motion.div key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                style={{
                  background: 'rgba(12, 18, 28, 0.9)', backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: '1.5rem',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                whileHover={{ y: -4, borderColor: `${color}25` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}10`, border: `1px solid ${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: '#C0CAD4' }}>{group.category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {group.items.map((item, ii) => (
                    <motion.span key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + ii * 0.04 }}
                      whileHover={{ color, borderColor: `${color}30`, background: `${color}08` }}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                        color: '#4A5568', background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '4px 10px', borderRadius: 6, cursor: 'default',
                        transition: 'all 0.2s',
                      }}>
                      {item}
                    </motion.span>
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
