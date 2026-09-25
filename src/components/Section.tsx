import type { ReactNode } from 'react'

type Props = {
  id: string
  index?: string
  eyebrow: string
  title: string
  intro?: ReactNode
  className?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, intro, className = '', children }: Props) {
  const headingId = `${id}-title`
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={headingId}>
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">
            {index && <span className="eyebrow-index">{index}</span>}
            {eyebrow}
          </p>
          <h2 id={headingId}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
