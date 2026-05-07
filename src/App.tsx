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
          <div className="star-sweep" />
          <div className="starfield" />
          <div className="hero-grid" />
        </div>

        <section className="panel panel-hero" id="top">
          <div className="panel-inner hero-inner">
            <ScrollReveal variant="up" className="hero-copy">
              <h1 className="mega-headline">
                <span className="mega-line">Growth,</span>
                <span className="mega-line mega-line-soft">elevated.</span>
              </h1>
              <p className="micro-tag">Luma DMA</p>
            </ScrollReveal>

            <ScrollReveal variant="scale" delayMs={110} className="hero-visual-wrap">
              <div className="hero-visual" aria-hidden>
                <div className="hero-visual-glare" />
                <div className="hero-visual-aurora" />
                <div className="hero-visual-core" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" delayMs={200} className="hero-links">
              <a className="text-link-arrow" href="#work">
                Explore <span aria-hidden className="text-link-chev" />
              </a>
              <a className="text-link-subtle" href={REPO} target="_blank" rel="noreferrer">
                Open source
              </a>
            </ScrollReveal>
          </div>
        </section>

        <section className="panel panel-words" id="work">
          <div className="panel-inner words-inner">
            <ScrollReveal variant="up">
              <p className="word-huge">Strategy</p>
            </ScrollReveal>
            <ScrollReveal variant="up" delayMs={100}>
              <p className="word-huge word-huge-mid">Paid</p>
            </ScrollReveal>
            <ScrollReveal variant="up" delayMs={200}>
              <p className="word-huge word-huge-end">SEO</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="panel panel-contact" id="contact">
          <div className="panel-inner contact-inner">
            <ScrollReveal variant="scale">
              <a className="contact-mail" href="mailto:hello@lumadma.com">
                hello@lumadma.com
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="footer footer-min">
        <p className="footer-line">© {new Date().getFullYear()} Luma DMA</p>
        <a className="footer-legal" href={REPO} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>

      <a
        className="float-pill"
        href="mailto:hello@lumadma.com"
        aria-label="Email Luma DMA"
      >
        Contact
      </a>
    </div>
  )
}

export default App
