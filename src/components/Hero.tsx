import type { CSSProperties } from 'react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { heroFlow, profile } from '../data/resume'
import { resumeUrl } from '../utils'
import { Icon, LinkedInIcon } from './icons'

const nowWorkingWith = ['SAP BTP', 'SAP Cloud Connector', 'SAP Cloud ALM', 'BTP ABAP', 'SAP Build', 'SAP ETD']

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <HeroBackdrop />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-location">
            <MapPin size={15} aria-hidden="true" /> {profile.location}
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-headline">
            {profile.headline.map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="sr-only"> | </span>}
                {part}
              </span>
            ))}
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn btn--primary" href="#experience">
              View Experience <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--secondary" href={resumeUrl} download={profile.resumeDownloadName}>
              <Download size={17} aria-hidden="true" /> Download Resume
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon size={16} /> LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="hero-now">
            <span className="hero-now-label">Now Working With</span>
            <ul aria-label="Technologies currently in use">
              {nowWorkingWith.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="flow-card glass">
          <figcaption className="flow-head">
            <span className="flow-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="mono">SAP Technology Landscape</span>
            <span className="flow-status">
              <span className="pulse-dot" aria-hidden="true" /> Hybrid
            </span>
          </figcaption>
          <ol className="flow-list">
            {heroFlow.map((step, i) => (
              <li key={step.label} className="flow-step" style={{ '--i': i } as CSSProperties}>
                <span className="flow-icon">
                  <Icon name={step.icon} size={18} />
                </span>
                <span className="flow-text">
                  <strong>{step.label}</strong>
                  <span>{step.detail}</span>
                  {step.items && (
                    <ul className="flow-items" aria-label={`${step.label} components`}>
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </span>
                <span className="flow-idx mono" aria-hidden="true">
                  0{i + 1}
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}

const nodes = [
  [120, 140], [300, 80], [460, 210], [640, 110], [820, 240], [1000, 120], [1180, 220], [1320, 90],
  [200, 360], [520, 420], [760, 380], [980, 470], [1240, 400], [80, 520], [400, 600], [1100, 620],
]
const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [0, 8], [8, 9], [2, 9], [9, 10], [4, 10],
  [10, 11], [11, 12], [6, 12], [8, 13], [13, 14], [9, 14], [11, 15], [12, 15],
]

/** Decorative network pattern behind the hero. */
function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid-bg" />
      <svg className="hero-network" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            className={i % 4 === 0 ? 'net-edge net-edge--live' : 'net-edge'}
            style={{ animationDelay: `${(i % 5) * 1.3}s` }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 3 : 2}
            className="net-node"
            style={{ animationDelay: `${(i % 6) * 0.9}s` }}
          />
        ))}
      </svg>
      <div className="hero-glow" />
    </div>
  )
}
