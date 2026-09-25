import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { experience, type Job } from '../data/resume'
import { Section } from './Section'

export function Experience() {
  const [open, setOpen] = useState<Set<string>>(() => new Set(experience[0] ? [experience[0].id] : []))

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Career"
      title="Career Timeline"
      intro="About 10 years across utilities, consulting and enterprise SAP delivery. Expand a role for the details."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <TimelineItem key={job.id} job={job} isOpen={open.has(job.id)} onToggle={() => toggle(job.id)} />
        ))}
      </ol>
    </Section>
  )
}

function TimelineItem({ job, isOpen, onToggle }: { job: Job; isOpen: boolean; onToggle: () => void }) {
  const panelId = `job-${job.id}`
  // Tolerate incomplete entries: show whatever data exists instead of failing.
  const highlights = job.highlights ?? []
  const groups = (job.groups ?? []).filter((g) => g.items?.length)
  const hasDetails = groups.length > 0
  const visibleHighlights = isOpen ? highlights : highlights.slice(0, 8)
  const hidden = highlights.length - visibleHighlights.length
  const dates = [job.start, job.end].filter(Boolean).join(' – ')

  return (
    <li className={`tl-item${job.current ? ' tl-item--current' : ''}${isOpen ? ' is-open' : ''}`} data-reveal>
      <span className="tl-marker" aria-hidden="true" />
      <article className="tl-card card">
        <header className="tl-head">
          <div>
            {(dates || job.current) && (
              <p className="tl-dates mono">
                {dates}
                {job.current && <span className="tl-current">Current</span>}
              </p>
            )}
            <h3>{job.role}</h3>
            {job.company && <p className="tl-company">{job.company}</p>}
          </div>
        </header>
        {job.summary && <p className="tl-summary">{job.summary}</p>}
        {highlights.length > 0 && (
          <ul className="chips chips--sm" aria-label={`${job.company} highlights`}>
            {visibleHighlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
            {hidden > 0 && <li className="chip-more">+{hidden} more</li>}
          </ul>
        )}

        {hasDetails && (
          <>
            <button type="button" className="tl-toggle" aria-expanded={isOpen} aria-controls={panelId} onClick={onToggle}>
              {isOpen ? 'Hide Details' : 'Show Details'}
              <ChevronDown size={16} aria-hidden="true" />
            </button>

            {/* Always rendered so it can animate; `inert` keeps collapsed content out of tab order and screen readers. */}
            <div className="tl-details" id={panelId} inert={!isOpen}>
              <div className="tl-details-inner">
                <div className="tl-groups">
                  {groups.map((g) => (
                    <div key={g.title} className="tl-group">
                      <h4>{g.title}</h4>
                      <ul>
                        {g.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </article>
    </li>
  )
}
