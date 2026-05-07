import './App.css'

const REPO = 'https://github.com/ssaghirboi/Luma-DMA'

function App() {
  return (
    <div className="site">
      <div className="glow" aria-hidden />

      <header className="header">
        <a className="logo" href="#top">
          Luma<span className="logo-accent">DMA</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-ghost" href={REPO} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Digital Marketing Agency</p>
          <h1 className="hero-title">
            Campaigns, creative, and performance—in one luminous strategy.
          </h1>
          <p className="hero-lede">
            Luma DMA helps brands grow with clear positioning, standout creative, and
            accountable media. From awareness to conversion, we light up the full funnel
            so spend turns into measurable momentum.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Start a project
            </a>
            <a className="btn btn-outline" href="#services">
              See services
            </a>
          </div>
        </section>

        <section id="services" className="section">
          <h2 className="section-title">What we run</h2>
          <p className="section-intro">
            Channel‑agnostic execution with a performance backbone—not disconnected tactics.
          </p>
          <ul className="cards">
            <li className="card">
              <h3>Strategy &amp; brand</h3>
              <p>
                Messaging, visual identity guidance, and go‑to‑market plans tuned to your
                audiences—so every touchpoint tells one cohesive story.
              </p>
            </li>
            <li className="card">
              <h3>Paid media</h3>
              <p>
                Search, social, and programmatic campaigns structured around targets,
                creative testing, and efficient scaling—not vanity metrics.
              </p>
            </li>
            <li className="card">
              <h3>Content &amp; SEO</h3>
              <p>
                Site architecture, on‑page optimization, and editorial calendars built to
                earn qualified traffic and support conversion paths.
              </p>
            </li>
          </ul>
        </section>

        <section id="approach" className="section section-muted">
          <h2 className="section-title">How we work</h2>
          <p className="section-intro">
            A simple operating rhythm keeps teams aligned and budgets accountable.
          </p>
          <ul className="cards">
            <li className="card">
              <h3>Discover</h3>
              <p>
                Audiences, competitors, and funnel gaps—mapped with data and interviews so
                priorities are obvious before spend turns on.
              </p>
            </li>
            <li className="card">
              <h3>Design</h3>
              <p>
                Creative systems and landing experiences engineered for testing—variants,
                hooks, and CTAs that iterate toward winners.
              </p>
            </li>
            <li className="card">
              <h3>Optimize</h3>
              <p>
                Weekly tightening: bidding, audiences, creative fatigue checks, and
                reporting you can actually act on.
              </p>
            </li>
          </ul>
        </section>

        <section id="results" className="section">
          <h2 className="section-title">What clients should expect</h2>
          <ul className="signals">
            <li>
              <span className="signal-dot" aria-hidden />
              Attribution and dashboards aligned to business outcomes—not platform‑default
              fluff.
            </li>
            <li>
              <span className="signal-dot" aria-hidden />
              Creative that respects your brand while staying bold enough to win auctions
              and attention.
            </li>
            <li>
              <span className="signal-dot" aria-hidden />
              Clear ownership: who ships creative, who manages media, and how decisions get
              documented.
            </li>
          </ul>
        </section>

        <section id="contact" className="section cta">
          <h2 className="section-title">Let’s talk growth</h2>
          <p className="cta-copy">
            Tell us your goals, timeline, and markets—we’ll reply with a sensible scope.
            This site is also an open starter you can fork from GitHub if you’re building
            your own agency presence.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@lumadma.com">
              Email hello@lumadma.com
            </a>
            <a className="btn btn-outline" href={REPO} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Luma DMA · Digital Marketing Agency ·{' '}
          <a href={REPO} target="_blank" rel="noreferrer">
            Source
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
