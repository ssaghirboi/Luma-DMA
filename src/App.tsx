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

      <header className="header header-airy">
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
          <ScrollReveal variant="up">
            <p className="hero-kicker">Pages studio</p>
          </ScrollReveal>
          <ScrollReveal variant="up" delayMs={70}>
            <h1 className="hero-title">
              Clean sites.
              <br />
              Strong results.
            </h1>
          </ScrollReveal>
        </section>

        <section id="work" className="section">
          <ScrollReveal variant="up">
            <div className="section-head">
              <h2>Our Work</h2>
            </div>
          </ScrollReveal>

          <div className="work-grid">
            {[
              'Landing Pages',
              'Sales Pages',
              'Product Pages',
              'Campaign Microsites',
            ].map((item, i) => (
              <ScrollReveal key={item} variant="scale" delayMs={i * 70}>
                <article className="work-card">{item}</article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <ScrollReveal variant="up">
            <div className="section-head">
              <h2>Contact</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="up" delayMs={80}>
            <a className="contact-link" href="mailto:hello@lumadma.com">
              hello@lumadma.com
            </a>
          </ScrollReveal>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-line">© {new Date().getFullYear()} Luma DMA</p>
      </footer>
    </div>
  )
}

export default App
