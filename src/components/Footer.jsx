import { personal } from '../data/index.js'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #21262D', padding: '2rem', textAlign: 'center' }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#3D444D' }}>
        <span style={{ color: '#00FFB2' }}>{personal.name}</span> · built with React + Framer Motion · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
