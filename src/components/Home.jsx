import symbol from '../../resources/symbol.svg'
import './Home.css'

export default function Home() {
  return (
    <div className="screen">
      {/* Minimal nav — barely there */}
      <nav className="topbar">
        <span className="topbar__logo">
          <img className="topbar__logo-symbol" src={symbol} alt="AURA symbol" />
          <span className="topbar__logo-text">AURA</span>
        </span>
        <button className="topbar__profile">A</button>
      </nav>

      {/* Hero — portal-first guidance experience */}
      <main className="hero">
        <section className="narrative">
          <p className="hero__context">Hello, Ducky.</p>
          <p className="hero__context-line">You're 72% board ready.</p>
          <p className="hero__context-line">12 days remain.</p>
          <p className="hero__context-line">Your next step is waiting.</p>
          <p className="hero__context-line">Carbon Compounds.</p>
          <p className="hero__context-line">One focused session today moves you closer.</p>
        </section>

        <section className="portal-zone" aria-label="Aura Portal">
          <span className="portal-zone__signal portal-zone__signal--ready">72% Board Ready</span>
          <span className="portal-zone__signal portal-zone__signal--days">12 days to boards</span>
          <span className="portal-zone__signal portal-zone__signal--streak">5 day streak</span>
          <span className="portal-zone__signal portal-zone__signal--impact">+4% readiness gain</span>

          <div className="portal" role="button" tabIndex={0} aria-label="Begin today's mission">
            <span className="portal__mist portal__mist--left" aria-hidden="true" />
            <span className="portal__mist portal__mist--right" aria-hidden="true" />

            <div className="mission-env" aria-hidden="true">
              <span className="mission-env__panel mission-env__panel--back" />
              <span className="mission-env__panel mission-env__panel--mid" />
              <span className="mission-env__panel mission-env__panel--front" />
              <span className="mission-env__motif mission-env__motif--formula">H2O • CO2 • C6H12O6</span>
              <span className="mission-env__motif mission-env__motif--grid" />
              <span className="mission-env__particle mission-env__particle--1" />
              <span className="mission-env__particle mission-env__particle--2" />
              <span className="mission-env__particle mission-env__particle--3" />
            </div>

            <div className="portal__scene">
              <span className="portal__label">Today's Mission</span>
              <span className="portal__topic">Carbon Compounds</span>
              <span className="portal__meta">Chemistry • Chapter 4</span>
              <span className="portal__duration">45 min session</span>
              <button className="portal__cta">
                <span>Enter Session</span>
                <span className="portal__cta-icon">▶</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
