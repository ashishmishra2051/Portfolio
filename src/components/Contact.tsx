import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/resume'
import { LinkedInIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-inner" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-index">11</span>Contact
          </p>
          <h2 id="contact-title">Let’s Connect</h2>
          <p className="section-intro">
            Open to conversations about SAP BASIS, SAP BTP, S/4HANA and cloud roles in Canada.
          </p>

          <ul className="contact-list">
            <li>
              <a className="contact-item card" href={`mailto:${profile.email}`}>
                <span className="icon-badge">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="label">Email</span>
                  <span className="contact-value">{profile.email}</span>
                </span>
                <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a className="contact-item card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="icon-badge">
                  <LinkedInIcon size={17} />
                </span>
                <span>
                  <span className="label">LinkedIn</span>
                  <span className="contact-value">{profile.linkedinLabel}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
                <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
              </a>
            </li>
            {profile.phone && (
              <li>
                <a className="contact-item card" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                  <span className="icon-badge">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="label">Phone</span>
                    <span className="contact-value">{profile.phone}</span>
                  </span>
                  <ArrowUpRight className="contact-arrow" size={18} aria-hidden="true" />
                </a>
              </li>
            )}
            <li>
              <div className="contact-item card contact-item--static">
                <span className="icon-badge">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="label">Location</span>
                  <span className="contact-value">{profile.location}</span>
                </span>
              </div>
            </li>
          </ul>

          <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" /> Let’s Connect
          </a>
        </div>
      </div>
    </section>
  )
}
