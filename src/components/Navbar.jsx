import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { personal } from '../data/index.js'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 80)
    setAtTop(latest < 20)
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
        animate={hidden && !menuOpen ? 'hidden' : 'visible'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: atTop && !menuOpen ? 'none' : 'blur(20px)',
          backgroundColor: atTop && !menuOpen ? 'transparent' : 'rgba(3,7,18,0.92)',
          borderBottom: atTop && !menuOpen ? 'none' : '1px solid rgba(255,255,255,0.06)',
          transition: 'background-color 0.3s',
        }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#home" onClick={closeMenu} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
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

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#8892A0', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#E6EDF3'}
                onMouseLeave={e => e.target.style.color = '#8892A0'}>
                {link}
              </a>
            ))}
            <a href={personal.resume} target="_blank" rel="noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 600,
                background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                textDecoration: 'none',
                border: '1px solid rgba(123,110,246,0.3)',
                padding: '6px 14px', borderRadius: 6,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,255,178,0.5)'; e.target.style.webkitTextFillColor = 'unset'; e.target.style.color = '#00FFB2' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(123,110,246,0.3)'; e.target.style.webkitTextFillColor = 'transparent' }}>
              CV.pdf
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8892A0', padding: 4, display: 'none' }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{
            padding: '1rem 1.5rem 1.5rem',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }} className="mobile-menu">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, color: '#C0CAD4', textDecoration: 'none' }}>
                {link}
              </a>
            ))}
            <a href={personal.resume} target="_blank" rel="noreferrer" onClick={closeMenu}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 600,
                color: '#00FFB2', textDecoration: 'none',
                border: '1px solid rgba(0,255,178,0.3)',
                padding: '10px 16px', borderRadius: 8, textAlign: 'center',
              }}>
              CV.pdf
            </a>
          </div>
        )}
      </motion.nav>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
