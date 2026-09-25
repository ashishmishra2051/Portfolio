import type { CSSProperties } from 'react'
import { projects } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      index="05"
      eyebrow="Featured Work"
      title="Selected Projects"
      intro="Key initiatives from my SAP BASIS and SAP technology work, as documented in my resume."
    >
      <div className="projects">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`card project${i < 2 ? ' project--featured' : ''}`}
            data-reveal
            style={{ '--d': `${(i % 2) * 70}ms` } as CSSProperties}
          >
            <div className="project-head">
              <span className="icon-badge">
                <Icon name={p.icon} size={20} />
              </span>
              <div className="project-meta mono">
                <span>{p.context}</span>
                {p.role && <span>Role: {p.role}</span>}
              </div>
            </div>
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <ul className="project-points">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ul className="chips chips--sm project-tech" aria-label={`${p.title} technologies`}>
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
