import { Download, FileText } from 'lucide-react'
import { profile } from '../data/resume'
import { resumeUrl } from '../utils'
import { LinkedInIcon } from './icons'

export function Resume() {
  return (
    <section id="resume" className="section section--tight" aria-labelledby="resume-title">
      <div className="container">
        <div className="resume-card glass" data-reveal>
          <span className="icon-badge icon-badge--lg">
            <FileText size={24} aria-hidden="true" />
          </span>
          <div className="resume-copy">
            <p className="eyebrow">Resume</p>
            <h2 id="resume-title">Get the Full Resume</h2>
            <p>A one-file PDF summary of my SAP BASIS, SAP BTP and cloud experience.</p>
          </div>
          <div className="resume-actions">
            <a className="btn btn--primary" href={resumeUrl} download={profile.resumeDownloadName}>
              <Download size={17} aria-hidden="true" /> Download Resume
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={16} /> View on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
