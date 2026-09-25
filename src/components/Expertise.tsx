import { useRef, useState, type KeyboardEvent } from 'react'
import { CircleCheck } from 'lucide-react'
import { expertise } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

export function Expertise() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const current = expertise[active]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = expertise.length - 1
    let next = active
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    else return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <Section
      id="expertise"
      index="03"
      eyebrow="Core Expertise"
      title="Four Areas, One Enterprise Landscape"
      intro="Pick an area to see the technologies and the experience behind them."
    >
      <div className="expertise" data-reveal>
        <div className="expertise-tabs" role="tablist" aria-label="Expertise areas" aria-orientation="vertical" onKeyDown={onKeyDown}>
          {expertise.map((area, i) => (
            <button
              key={area.id}
              ref={(el) => {
                tabs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`tab-${area.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${area.id}`}
              tabIndex={i === active ? 0 : -1}
              className="expertise-tab"
              onClick={() => setActive(i)}
            >
              <span className="icon-badge">
                <Icon name={area.icon} size={18} />
              </span>
              <span className="expertise-tab-text">
                <strong>{area.title}</strong>
                <span>{area.items.length} technologies</span>
              </span>
            </button>
          ))}
        </div>

        <div
          className="expertise-panel glass"
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          key={current.id}
        >
          <h3>{current.title}</h3>
          <p className="expertise-summary">{current.summary}</p>
          <ul className="chips" aria-label={`${current.title} technologies`}>
            {current.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="expertise-proof">
            <p className="label">From the Field</p>
            <ul>
              {current.proof.map((p) => (
                <li key={p}>
                  <CircleCheck size={16} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
