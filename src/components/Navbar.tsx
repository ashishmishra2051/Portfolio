import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import { resumeUrl } from '../utils'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'btp', label: 'SAP BTP' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

// Every section, so that sections without a nav link clear the highlight.
const observed = [
  'home', 'snapshot', 'about', 'btp', 'expertise', 'experience', 'projects', 'architecture',
  'technologies', 'strengths', 'certifications', 'resume', 'contact',
]

export function Navbar() {
  const active = useActiveSection(observed)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 1100) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.classList.add('menu-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#home" onClick={close}>
          <span className="nav-logo" aria-hidden="true">AM</span>
          <span className="nav-brand-text">
            {profile.name}
            <small>SAP BASIS / BTP · Cloud</small>
          </span>
        </a>

        <nav aria-label="Primary" className="nav-links" id="primary-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : undefined}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary nav-mobile-cta" href={resumeUrl} download={profile.resumeDownloadName} onClick={close}>
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
        </nav>

        <a className="btn btn--ghost btn--sm nav-cta" href={resumeUrl} download={profile.resumeDownloadName}>
          <Download size={15} aria-hidden="true" /> Resume
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
