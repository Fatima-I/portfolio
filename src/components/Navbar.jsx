import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { personal } from '../data/index.js'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 80)
    setAtTop(latest < 20)
  })

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: atTop ? 'none' : 'blur(20px)',
        backgroundColor: atTop ? 'transparent' : 'rgba(6,6,8,0.8)',
        borderBottom: atTop ? 'none' : '1px solid rgba(255,255,255,0.06)',
        transition: 'background-color 0.3s',
      }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(0,255,178,0.15), rgba(123,110,246,0.15))',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 600,
            background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>FI</div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: '#E6EDF3' }}>
            {personal.name}
          </span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map((link, i) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#8892A0', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#E6EDF3'}
              onMouseLeave={e => e.target.style.color = '#8892A0'}>
              {link}
            </a>
          ))}
          <a href={personal.resume} target="_blank" rel="noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              textDecoration: 'none',
              border: '1px solid rgba(123,110,246,0.3)',
              padding: '6px 14px', borderRadius: 6,
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,255,178,0.5)'; e.target.style.background = 'rgba(0,255,178,0.05)'; e.target.style.webkitTextFillColor = 'unset' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(123,110,246,0.3)'; e.target.style.background = 'transparent' }}>
            CV.pdf
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
