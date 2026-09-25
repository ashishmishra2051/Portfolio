import {
  Activity, Blocks, BookOpen, DatabaseBackup, Settings2, Boxes, Briefcase, Bot, Cable, CalendarClock, Cloud, CloudCog, Code, Database,
  Fingerprint, Gauge, Handshake, HardDrive, KeyRound, Layers, LayoutGrid, LifeBuoy, ListChecks,
  MonitorSmartphone, Network, RefreshCw, Route, ScanSearch, Search, Server, ServerCog, ShieldAlert,
  ShieldCheck, Smartphone, Split, Target, Users, Waypoints, Workflow,
  type LucideIcon, type LucideProps,
} from 'lucide-react'

const icons = {
  activity: Activity, blocks: Blocks, databaseBackup: DatabaseBackup, settings: Settings2, bookOpen: BookOpen, boxes: Boxes, briefcase: Briefcase, bot: Bot,
  cable: Cable, calendarClock: CalendarClock, cloud: Cloud, cloudCog: CloudCog, code: Code, database: Database,
  fingerprint: Fingerprint, gauge: Gauge, handshake: Handshake, hardDrive: HardDrive, keyRound: KeyRound,
  layers: Layers, layoutGrid: LayoutGrid, lifeBuoy: LifeBuoy, listChecks: ListChecks,
  monitorSmartphone: MonitorSmartphone, network: Network, refreshCw: RefreshCw, route: Route,
  scanSearch: ScanSearch, search: Search, server: Server, serverCog: ServerCog, shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck, smartphone: Smartphone, split: Split, target: Target, users: Users,
  waypoints: Waypoints, workflow: Workflow,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof icons

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name]
  return <Cmp aria-hidden="true" strokeWidth={1.6} {...props} />
}

/** LinkedIn mark (brand icons are not part of Lucide). */
export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}
