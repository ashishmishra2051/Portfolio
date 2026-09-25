import { ArrowUp } from 'lucide-react'
import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.headline[0]} · {profile.location}
        </p>
        <a href="#home" className="footer-top">
          Back to top <ArrowUp size={15} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
