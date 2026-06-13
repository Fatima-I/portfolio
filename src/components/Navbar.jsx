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
        backdropFilter: atTop ? 'none' : 'blur(16px)',
        backgroundColor: atTop ? 'transparent' : 'rgba(8, 12, 16, 0.85)',
        borderBottom: atTop ? 'none' : '1px solid #21262D',
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'rgba(0,255,178,0.1)',
            border: '1px solid rgba(0,255,178,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 500, color: '#00FFB2',
          }}>FI</div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 15, color: '#E6EDF3' }}>
            {personal.name}
          </span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'Inter', sans-serif", fontSize: 14,
                color: '#7D8590', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#00FFB2'}
              onMouseLeave={e => e.target.style.color = '#7D8590'}
            >{link}</a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
              color: '#00FFB2', textDecoration: 'none',
              border: '1px solid rgba(0,255,178,0.4)',
              padding: '6px 14px', borderRadius: 6,
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(0,255,178,0.08)'; e.target.style.boxShadow = '0 0 16px rgba(0,255,178,0.15)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.boxShadow = 'none' }}
          >resume.pdf</a>
        </div>
      </div>
    </motion.nav>
  )
}
