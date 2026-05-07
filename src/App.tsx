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
          <a href="#approach">Approach</a>
          <a href="#signals">Signals</a>
          <a href="#start">Start</a>
        </nav>
        <a className="btn btn-ghost" href={REPO} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Design · Motion · Architecture</p>
          <h1 className="hero-title">
            Light up the path from idea to shipped product.
          </h1>
          <p className="hero-lede">
            Luma DMA is a focused studio surface for brand, interface, and launch
            workflows—built so your team can move quickly without losing craft.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#start">
              Plan a build
            </a>
            <a className="btn btn-outline" href={REPO} target="_blank" rel="noreferrer">
              View repository
            </a>
          </div>
        </section>

        <section id="approach" className="section">
          <h2 className="section-title">Approach</h2>
          <p className="section-intro">
            Three rails keep momentum high while quality stays intentional.
          </p>
          <ul className="cards">
            <li className="card">
              <h3>Illuminate</h3>
              <p>
                Clarify positioning, narrative, and visual language before pixels
                multiply—so downstream decisions stay coherent.
              </p>
            </li>
            <li className="card">
              <h3>Shape</h3>
              <p>
                Design systems and interaction patterns that scale with your product,
                not against it.
              </p>
            </li>
            <li className="card">
              <h3>Accelerate</h3>
              <p>
                Ship in tight loops with instrumentation and feedback channels baked in
                from day one.
              </p>
            </li>
          </ul>
        </section>

        <section id="signals" className="section section-muted">
          <h2 className="section-title">What good looks like</h2>
          <ul className="signals">
            <li>
              <span className="signal-dot" aria-hidden />
              Audience‑level messaging that matches the product promise.
            </li>
            <li>
              <span className="signal-dot" aria-hidden />
              Interfaces that feel calm under load—readable hierarchy and motion with
              purpose.
            </li>
            <li>
              <span className="signal-dot" aria-hidden />
              Launch artifacts your team can reuse: tokens, components, and narrative
              snippets.
            </li>
          </ul>
        </section>

        <section id="start" className="section cta">
          <h2 className="section-title">Open the repo and make it yours</h2>
          <p className="cta-copy">
            This site ships as a Vite + React starter wired for fast iteration. Fork it,
            swap the copy, and deploy wherever you host static apps.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={REPO} target="_blank" rel="noreferrer">
              Open GitHub
            </a>
            <a className="btn btn-outline" href="mailto:hello@example.com">
              Email hello@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Luma DMA ·{' '}
          <a href={REPO} target="_blank" rel="noreferrer">
            Source
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
