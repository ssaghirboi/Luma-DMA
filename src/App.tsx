import { useEffect, useId, useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import './App.css'

const REPO = 'https://github.com/ssaghirboi/Luma-DMA'

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
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
        <div className="hero-bg" aria-hidden>
          <div className="hero-blob hero-blob-a" />
          <div className="hero-blob hero-blob-b" />
          <div className="hero-grid" />
        </div>

        <section className="hero" id="top">
          <ScrollReveal variant="up" className="hero-reveal-stack">
            <p className="eyebrow">Digital marketing agency</p>
          </ScrollReveal>
          <ScrollReveal variant="up" delayMs={75} className="hero-reveal-stack">
            <h1 className="hero-title">Bright growth. Quiet noise.</h1>
          </ScrollReveal>
          <ScrollReveal variant="up" delayMs={140} className="hero-actions hero-reveal-stack">
            <a className="btn btn-primary" href="#contact">
              Let&apos;s talk
            </a>
            <a className="btn btn-secondary" href={REPO} target="_blank" rel="noreferrer">
              Code
            </a>
          </ScrollReveal>
        </section>

        <section id="work" className="section section-work">
          <ScrollReveal variant="up-left">
            <h2 className="section-kicker">What we ship</h2>
          </ScrollReveal>
          <ul className="work-grid">
            {[
              { t: 'Strategy', s: 'Positioning · story' },
              { t: 'Paid', s: 'Search · social · scale', delay: 90 },
              { t: 'SEO', s: 'Content · crawl · lift', delay: 180 },
            ].map(({ t, s, delay = 0 }) => (
              <li key={t}>
                <ScrollReveal variant="scale" delayMs={delay}>
                  <article className="work-tile">
                    <h3 className="work-title">{t}</h3>
                    <p className="work-sub">{s}</p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section-cta">
          <ScrollReveal variant="up-right">
            <h2 className="cta-head">hello@lumadma.com</h2>
          </ScrollReveal>
          <ScrollReveal variant="up" delayMs={70} className="cta-actions">
            <a className="btn btn-primary" href="mailto:hello@lumadma.com">
              Email us
            </a>
          </ScrollReveal>
        </section>
      </main>

      <ScrollReveal variant="up" className="footer-wrap">
        <footer className="footer">
          <p className="footer-line">
            © {new Date().getFullYear()} Luma DMA
          </p>
          <a className="footer-link" href={REPO} target="_blank" rel="noreferrer">
            Repo
          </a>
        </footer>
      </ScrollReveal>

      <aside className="thumb-dock" aria-label="Quick actions">
        <a className="dock-btn dock-mail" href="mailto:hello@lumadma.com">
          Mail
        </a>
        <a className="dock-btn dock-primary" href="#contact">
          Chat
        </a>
      </aside>
    </div>
  )
}

export default App
