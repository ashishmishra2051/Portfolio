import type { CSSProperties } from 'react'
import { metrics } from '../data/resume'

export function Snapshot() {
  return (
    <section id="snapshot" className="snapshot" aria-label="Professional snapshot">
      <div className="container">
        <ul className="metrics">
          {metrics.map((m, i) => (
            <li key={m.label} className="metric glass" data-reveal style={{ '--d': `${i * 80}ms` } as CSSProperties}>
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
              <span className="metric-note">{m.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
