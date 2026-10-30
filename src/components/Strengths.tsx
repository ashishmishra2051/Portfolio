import type { CSSProperties } from 'react'
import { strengths } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

export function Strengths() {
  return (
    <Section id="strengths" index="09" eyebrow="Professional Strengths" title="How I Work">
      <ul className="strengths">
        {strengths.map((s, i) => (
          <li key={s.title} className="strength" data-reveal style={{ '--d': `${(i % 3) * 60}ms` } as CSSProperties}>
            <span className="icon-badge">
              <Icon name={s.icon} size={18} />
            </span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
