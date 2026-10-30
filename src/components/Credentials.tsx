import type { CSSProperties } from 'react'
import { Award, BadgeCheck, GraduationCap } from 'lucide-react'
import { awards, certifications, education } from '../data/resume'
import { Section } from './Section'

/** One card per certification, in the order listed in resume.ts (newest first). */
export function Certifications() {
  return (
    <>
      {certifications.map((c, i) => (
        <article
          key={c.title}
          className="card cred cred--cert"
          data-reveal
          style={{ '--d': `${i * 70}ms` } as CSSProperties}
        >
          <span className="icon-badge icon-badge--lg">
            <BadgeCheck size={24} aria-hidden="true" />
          </span>
          <p className="label">Certification</p>
          <div>
            <h3>{c.title}</h3>
            <p className="cred-sub">{c.issuer}</p>
            <p className="cred-year mono">{c.year}</p>
          </div>
        </article>
      ))}
    </>
  )
}

export function Education() {
  return (
    <article className="card cred" data-reveal style={{ '--d': '70ms' } as CSSProperties}>
      <span className="icon-badge icon-badge--lg">
        <GraduationCap size={24} aria-hidden="true" />
      </span>
      <p className="label">Education</p>
      {education.map((e) => (
        <div key={e.degree}>
          <h3>{e.degree}</h3>
          <p className="cred-sub">
            {e.school}, {e.location}
          </p>
          <p className="cred-year mono">{e.years}</p>
        </div>
      ))}
    </article>
  )
}

export function Awards() {
  return (
    <article className="card cred" data-reveal style={{ '--d': '140ms' } as CSSProperties}>
      <span className="icon-badge icon-badge--lg">
        <Award size={24} aria-hidden="true" />
      </span>
      <p className="label">Awards & Recognition</p>
      {awards.formal.map((a) => (
        <div key={a.title}>
          <h3>{a.title}</h3>
          <p className="cred-sub">{a.issuer}</p>
          <p className="cred-year mono">{a.date}</p>
        </div>
      ))}
      <p className="cred-note">{awards.recognition}.</p>
    </article>
  )
}

export function Credentials() {
  return (
    <Section id="certifications" index="10" eyebrow="Credentials" title="Certifications, Education & Recognition">
      <div className="creds">
        <Certifications />
        <Education />
        <Awards />
      </div>
    </Section>
  )
}
