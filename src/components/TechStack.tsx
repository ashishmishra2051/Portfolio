import { useState } from 'react'
import { technologyGroups } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

export function TechStack() {
  const [filter, setFilter] = useState<string>('all')

  return (
    <Section
      id="technologies"
      index="07"
      eyebrow="Technology Ecosystem"
      title="Technologies & Tools I've Worked With"
      intro="Technologies and tools from my career, grouped by domain. Filter to focus on one area."
    >
      <div className="tech-filters" role="group" aria-label="Filter technologies" data-reveal>
        <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </button>
        {technologyGroups.map((g) => (
          <button key={g.id} type="button" aria-pressed={filter === g.id} onClick={() => setFilter(g.id)}>
            <Icon name={g.icon} size={15} />
            {g.title}
          </button>
        ))}
      </div>

      <div className="tech-groups" data-reveal>
        {technologyGroups.map((g) => {
          const dim = filter !== 'all' && filter !== g.id
          return (
            <div key={g.id} className={`tech-group${dim ? ' is-dim' : ''}${filter === g.id ? ' is-focus' : ''}`}>
              <h3>
                <Icon name={g.icon} size={16} />
                {g.title}
              </h3>
              <ul className="chips chips--tech">
                {g.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
