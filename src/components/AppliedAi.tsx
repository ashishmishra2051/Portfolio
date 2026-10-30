import { appliedAi } from '../data/resume'
import { ProjectCard } from './Projects'
import { Section } from './Section'

export function AppliedAi() {
  return (
    <Section
      id="ai"
      index="06"
      eyebrow="Applied AI"
      title="Building and Learning with Claude"
      intro={appliedAi.intro}
    >
      <div className="projects projects--3">
        {appliedAi.items.map((p, i) => (
          <ProjectCard key={p.title} p={p} featured delay={i * 70} />
        ))}
      </div>
    </Section>
  )
}
