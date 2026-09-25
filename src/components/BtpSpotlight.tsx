import type { CSSProperties } from 'react'
import { btpSpotlight } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

export function BtpSpotlight() {
  const { feature, items } = btpSpotlight

  return (
    <Section
      id="btp"
      index="02"
      eyebrow="Current Focus · SAP BTP"
      title="Latest SAP BTP Technologies"
      intro={btpSpotlight.intro}
      className="section--btp"
    >
      <div className="btp-grid">
        <article className="btp-feature glass" data-reveal>
          <span className="btp-badge">
            <span className="pulse-dot" aria-hidden="true" /> Currently in Use
          </span>
          <span className="icon-badge icon-badge--lg">
            <Icon name={feature.icon} size={26} />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          {feature.points && (
            <ul className="btp-points">
              {feature.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </article>

        {items.map((item, i) => (
          <article
            key={item.title}
            className={`card btp-card${item.points ? ' btp-card--detail' : ''}`}
            data-reveal
            style={{ '--d': `${(i % 3) * 60}ms` } as CSSProperties}
          >
            <div className="btp-card-head">
              <span className="icon-badge">
                <Icon name={item.icon} size={18} />
              </span>
              <span className="btp-org mono">{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.points && (
              <ul className="btp-points">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
