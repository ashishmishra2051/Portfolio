import type { CSSProperties } from 'react'
import { about } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Enterprise SAP, From the BASIS Layer to the Cloud">
      <div className="about-intro" data-reveal>
        <p className="about-lead">{about.lead}</p>
        <p className="about-body">{about.body}</p>
      </div>
      <div className="pillars">
        {about.pillars.map((p, i) => (
          <article key={p.title} className="card pillar" data-reveal style={{ '--d': `${i * 70}ms` } as CSSProperties}>
            <span className="icon-badge">
              <Icon name={p.icon} size={20} />
            </span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="chips chips--sm" aria-label={`${p.title} technologies`}>
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
