import { personal } from '../data/index.js'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '2rem', textAlign: 'center' }}>
      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#2D333B' }}>
        designed & built by{' '}
        <span style={{ background: 'linear-gradient(135deg, #00FFB2, #7B6EF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          {personal.name}
        </span>
        {' '}· {new Date().getFullYear()}
      </p>
    </footer>
  )
}
