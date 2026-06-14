export default function AnimatedBG() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: '#030712' }}>

      {/* Blob 1 — teal top left */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '55vw', height: '55vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,178,0.18) 0%, rgba(0,255,178,0.06) 40%, transparent 70%)',
        animation: 'blob1 14s ease-in-out infinite',
        filter: 'blur(40px)',
      }} />

      {/* Blob 2 — violet right */}
      <div style={{
        position: 'absolute', top: '15%', right: '-10%',
        width: '50vw', height: '50vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,110,246,0.22) 0%, rgba(123,110,246,0.07) 40%, transparent 70%)',
        animation: 'blob2 17s ease-in-out infinite',
        filter: 'blur(50px)',
      }} />

      {/* Blob 3 — pink bottom */}
      <div style={{
        position: 'absolute', bottom: '0%', left: '25%',
        width: '45vw', height: '45vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,113,181,0.15) 0%, rgba(244,113,181,0.05) 40%, transparent 70%)',
        animation: 'blob3 20s ease-in-out infinite',
        filter: 'blur(45px)',
      }} />

      {/* Blob 4 — cyan center */}
      <div style={{
        position: 'absolute', top: '40%', left: '35%',
        width: '35vw', height: '35vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,200,255,0.1) 0%, transparent 65%)',
        animation: 'blob4 22s ease-in-out infinite',
        filter: 'blur(60px)',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />

      {/* Vignette to keep edges dark */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(3,7,18,0.75) 100%)',
      }} />

      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(6vw,10vh) scale(1.1); }
          66% { transform: translate(-4vw,6vh) scale(0.93); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-7vw,-6vh) scale(1.12); }
          66% { transform: translate(5vw,9vh) scale(0.9); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(9vw,-7vh) scale(1.06); }
          66% { transform: translate(-6vw,-4vh) scale(1.1); }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-10vw,8vh) scale(1.15); }
        }
      `}</style>
    </div>
  )
}
