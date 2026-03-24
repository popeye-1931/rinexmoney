import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { imageReferences, navigation, siteMeta } from '../siteContent'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="top-note">
        <span className="note-chip">Story Concept</span>
        Visual references are credited and used as inspiration, not as personal family
        photographs.
      </div>

      <header className="site-header">
        <NavLink className="brand-mark" to="/" onClick={closeMenu}>
          <span className="brand-mark__crest">SJ</span>
          <span>
            <strong>{siteMeta.title}</strong>
            <small>{siteMeta.tagline}</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' is-active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="button button-primary nav-cta" to="/family" onClick={closeMenu}>
            Enter the home
          </NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <section className="footer-card">
          <div>
            <p className="eyebrow">About the project</p>
            <h2>A warm family website built like a storybook.</h2>
            <p className="muted">{siteMeta.footerNote}</p>
          </div>
          <div className="footer-links">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </section>

        <section className="footer-grid">
          <article className="footer-panel">
            <p className="eyebrow">Household line</p>
            <h3>{siteMeta.title}</h3>
            <p className="muted">{siteMeta.householdLine}</p>
          </article>

          <article className="footer-panel">
            <p className="eyebrow">Story notes</p>
            <ul className="detail-list">
              <li>Prayer woven gently into the day</li>
              <li>Shared meals and shared responsibility</li>
              <li>Sibling humor balancing serious duties</li>
            </ul>
          </article>

          <article className="footer-panel">
            <p className="eyebrow">Image credits</p>
            <div className="source-links">
              {imageReferences.slice(0, 3).map((reference) => (
                <a key={reference.href} href={reference.href} target="_blank" rel="noreferrer">
                  {reference.title}
                </a>
              ))}
            </div>
          </article>

          <article className="footer-panel">
            <p className="eyebrow">Visual tone</p>
            <p className="muted">
              Earthy colors, neighborhood textures, tea-time stillness, and soft arch
              shapes keep the whole experience rooted in warmth and home.
            </p>
          </article>
        </section>

        <p className="footer-meta">Last updated: {siteMeta.lastUpdated}</p>
      </footer>
    </div>
  )
}

export default Layout
