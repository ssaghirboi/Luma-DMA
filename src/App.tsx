import { useEffect, useId, useState } from 'react'
import './App.css'

const REPO = 'https://github.com/ssaghirboi/Luma-DMA'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'How we work' },
  { href: '#results', label: 'Why us' },
  { href: '#contact', label: 'Say hi' },
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header">
        <a className="logo" href="#top" onClick={closeMenu}>
          Luma<span className="logo-accent">DMA</span>
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="menu-icon" aria-hidden>
            <span className={menuOpen ? 'menu-bar open-a' : 'menu-bar'} />
            <span className={menuOpen ? 'menu-bar open-b' : 'menu-bar'} />
            <span className={menuOpen ? 'menu-bar open-c' : 'menu-bar'} />
          </span>
        </button>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-gh" href={REPO} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </header>

      <div
        id={menuId}
        className={menuOpen ? 'drawer drawer-open' : 'drawer'}
        hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <nav className="drawer-nav" aria-label="Mobile primary">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="drawer-link"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            href={REPO}
            className="drawer-link drawer-link-muted"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </nav>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="drawer-scrim"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={closeMenu}
        />
      ) : null}

      <main id="main">
        <div className="hero-glow" aria-hidden />

        <section className="hero" id="top">
          <p className="eyebrow">Digital marketing agency · friendly by default</p>
          <h1 className="hero-title">
            Growth marketing that feels human—built for phones first.
          </h1>
          <p className="hero-lede">
            We plan, creative-test, and optimize paid + organic so your next customer
            finds you without the agency noise. Big clarity, small ego, numbers you can
            share with finance.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get a free game plan
            </a>
            <a className="btn btn-secondary" href="#services">
              Peek at services
            </a>
          </div>
          <p className="hero-micro">
            Typical reply same day. No pitch deck required—just your goals and messy
            spreadsheets.
          </p>
        </section>

        <section id="services" className="section">
          <h2 className="section-label">Services</h2>
          <h3 className="section-title">
            Fewer spreadsheets. More “oh, that&apos;s actually working.”
          </h3>
          <p className="section-intro">
            We keep the funnel simple on paper so execution stays sharp in-market.
          </p>
          <ul className="cards">
            <li className="card">
              <h4 className="card-title">Strategy &amp; brand story</h4>
              <p>
                Positioning, messaging, and visual guardrails—so campaigns sound like{' '}
                <em>you</em>, not a generic template with your logo pasted on it.
              </p>
            </li>
            <li className="card">
              <h4 className="card-title">Paid media</h4>
              <p>
                Search + social buys with hypotheses, disciplined tests, and budget math
                you can defend in a hallway conversation.
              </p>
            </li>
            <li className="card">
              <h4 className="card-title">Content &amp; SEO</h4>
              <p>
                Pages people land on intentionally: structure, snippets, editorial
                cadence—all aimed at qualified visits, not empty traffic trophies.
              </p>
            </li>
          </ul>
        </section>

        <section id="approach" className="section section-muted">
          <h2 className="section-label">How we work</h2>
          <h3 className="section-title">A rhythm you can predict (and thumbs can scan).</h3>
          <p className="section-intro">
            Short loops. Plain-language updates. No mystery retainers hiding behind jargon.
          </p>
          <ol className="steps">
            <li>
              <span className="step-num">1</span>
              <div>
                <strong className="step-title">Discover</strong>
                <p>
                  Audiences, offers, rivals, leaky steps—prioritized before we spend a
                  dime.
                </p>
              </div>
            </li>
            <li>
              <span className="step-num">2</span>
              <div>
                <strong className="step-title">Design &amp; launch</strong>
                <p>
                  Creative batches + landing tweaks built to iterate fast, not posture in
                  a deck.
                </p>
              </div>
            </li>
            <li>
              <span className="step-num">3</span>
              <div>
                <strong className="step-title">Optimize weekly</strong>
                <p>
                  Bids, audiences, fatigue, pacing—adjusted on a rhythm, with receipts.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="results" className="section">
          <h2 className="section-label">Why teams stick with us</h2>
          <h3 className="section-title">Accountability minus the stern vibes.</h3>
          <ul className="pill-list">
            <li className="pill">Dashboards mapped to outcomes you actually bonus on</li>
            <li className="pill">Creative bold enough for feeds, disciplined enough for brand</li>
            <li className="pill">Clear owners: creative, media, reporting—named humans</li>
          </ul>
        </section>

        <section id="contact" className="section cta-block">
          <h2 className="section-label">Contact</h2>
          <h3 className="section-title">Tell us where you&apos;re stuck. We&apos;ll map the boring-to-brilliant fixes.</h3>
          <p className="cta-copy">
            Drop goals, timelines, budgets (rough is fine). We reply with scope options—no
            “gotcha” intro call theatrics—plus starter ideas you can steal even if we never
            work together.
          </p>
          <div className="hero-actions cta-buttons">
            <a className="btn btn-primary" href="mailto:hello@lumadma.com">
              Email hello@lumadma.com
            </a>
            <a className="btn btn-secondary" href={REPO} target="_blank" rel="noreferrer">
              Peek the site repo
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-line">
          © {new Date().getFullYear()} Luma DMA ·{' '}
          <span className="footer-subtle">digital marketing agency</span>
        </p>
        <a className="footer-link" href={REPO} target="_blank" rel="noreferrer">
          GitHub source
        </a>
      </footer>

      <aside className="thumb-dock" aria-label="Quick actions">
        <a className="dock-btn dock-mail" href="mailto:hello@lumadma.com">
          Email
        </a>
        <a className="dock-btn dock-primary" href="#contact">
          Plan intro
        </a>
      </aside>
    </div>
  )
}

export default App
