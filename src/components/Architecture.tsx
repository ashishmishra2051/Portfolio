import { useState } from 'react'
import { Info } from 'lucide-react'
import { architecture, architectureLayout as L, type ArchNode } from '../data/resume'
import { Icon } from './icons'
import { Section } from './Section'

const zoneOf: Record<string, string> = {}
const assign = (ids: string[], zone: string) => ids.forEach((id) => (zoneOf[id] = zone))
assign(L.users, 'Users')
assign(L.access, 'Access & Experience')
assign([...L.landscape.apps, L.landscape.basis, ...L.landscape.platform], 'SAP Landscape')
assign([L.landscape.hosting], 'Cloud Infrastructure')
assign([L.bridge], 'Hybrid Connectivity')
assign([L.btp.core, ...L.btp.services], 'SAP BTP')
assign(L.operations, 'Operations, Security & Resilience')

/** On stacked layouts the detail panel sits below the diagram; bring it into view after a tap. */
function revealDetailOnSmallScreens() {
  if (!window.matchMedia('(max-width: 1180px)').matches) return
  const panel = document.getElementById('arch-detail')
  if (!panel || panel.getBoundingClientRect().top < window.innerHeight - 120) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  panel.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' })
}

export function Architecture() {
  const [selected, setSelected] = useState<string>('basis')
  const current = architecture[selected]

  const isRelated = (id: string) =>
    id !== selected && (current.related.includes(id) || architecture[id].related.includes(selected))

  const node = (id: string, variant = '') => {
    const n = architecture[id]
    const state = id === selected ? 'is-active' : isRelated(id) ? 'is-related' : ''
    return (
      <button
        key={id}
        type="button"
        className={`arch-node ${variant} ${state}`}
        aria-pressed={id === selected}
        aria-controls="arch-detail"
        onMouseEnter={() => setSelected(id)}
        onFocus={() => setSelected(id)}
        onClick={() => {
          setSelected(id)
          revealDetailOnSmallScreens()
        }}
      >
        <span className="arch-node-icon">
          <Icon name={n.icon} size={16} />
        </span>
        <span className="arch-node-text">
          <strong>{n.label}</strong>
          {n.sub && <span>{n.sub}</span>}
        </span>
      </button>
    )
  }

  return (
    <Section
      id="architecture"
      index="07"
      eyebrow="Featured · Technical Architecture"
      title="The Enterprise SAP Stack I Work Across"
      intro="A conceptual map of the technologies in my experience, from end users to the SAP BASIS layer, Azure and SAP BTP. Hover over or select a component to see where I've worked with it."
      className="section--arch"
    >
      <div className="arch" data-reveal>
        <div className="arch-canvas glass" role="group" aria-label="Architecture components">
          <div className="arch-tier">{L.users.map((id) => node(id, 'arch-node--pill'))}</div>
          <span className="arch-link arch-link--v" aria-hidden="true" />

          <div className="arch-zone">
            <span className="zone-label">Access & Experience</span>
            <div className="arch-row arch-row--4">{L.access.map((id) => node(id))}</div>
          </div>
          <span className="arch-link arch-link--v" aria-hidden="true" />

          <div className="arch-core">
            <div className="arch-zone arch-zone--landscape">
              <span className="zone-label">SAP Landscape · On-Premises → Azure</span>
              <div className="arch-row arch-row--2">{L.landscape.apps.map((id) => node(id))}</div>
              {node(L.landscape.basis, 'arch-node--wide arch-node--primary')}
              <div className="arch-row arch-row--2">{L.landscape.platform.map((id) => node(id))}</div>
              {node(L.landscape.hosting, 'arch-node--wide arch-node--hosting')}
            </div>

            <div className="arch-bridge">
              <span className="arch-link arch-link--h" aria-hidden="true" />
              {node(L.bridge, 'arch-node--bridge')}
              <span className="arch-link arch-link--h" aria-hidden="true" />
            </div>

            <div className="arch-zone arch-zone--btp">
              <span className="zone-label">SAP BTP · Cloud</span>
              {node(L.btp.core, 'arch-node--wide arch-node--primary')}
              <div className="arch-row arch-row--2">{L.btp.services.map((id) => node(id))}</div>
            </div>
          </div>

          <span className="arch-link arch-link--v" aria-hidden="true" />
          <div className="arch-zone arch-zone--ops">
            <span className="zone-label">Operations, Security & Resilience</span>
            <div className="arch-row arch-row--5">{L.operations.map((id) => node(id))}</div>
          </div>
        </div>

        <ArchDetail node={current} zone={zoneOf[current.id]} onSelect={setSelected} />
      </div>

      <p className="arch-note">
        <Info size={15} aria-hidden="true" />
        This is a portfolio view of technologies I have worked with across roles. It is not the production
        architecture of any specific employer or client.
      </p>
    </Section>
  )
}

function ArchDetail({ node, zone, onSelect }: { node: ArchNode; zone: string; onSelect: (id: string) => void }) {
  return (
    <aside className="arch-detail glass" id="arch-detail" aria-live="polite">
      <p className="label">{zone}</p>
      <div className="arch-detail-title">
        <span className="icon-badge">
          <Icon name={node.icon} size={20} />
        </span>
        <div>
          <h3>{node.label}</h3>
          {node.sub && <p className="arch-detail-sub">{node.sub}</p>}
        </div>
      </div>
      <p className="arch-detail-desc">{node.description}</p>

      <p className="label">Where I've Worked With It</p>
      <ul className="arch-evidence">
        {node.evidence.map((e) => (
          <li key={e.text}>
            <span className="org-tag mono">{e.org}</span>
            <span>{e.text}</span>
          </li>
        ))}
      </ul>

      <p className="label">Connects To</p>
      <ul className="arch-related">
        {node.related.map((id) => (
          <li key={id}>
            <button type="button" onClick={() => onSelect(id)}>
              {architecture[id].label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
