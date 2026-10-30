/**
 * Single source of truth for every piece of resume-derived content on the site.
 * Everything here comes from the resume. Edit this file to update the portfolio;
 * the UI components only read from it.
 *
 * `icon` values are keys from src/components/icons.tsx.
 */

import type { IconName } from '../components/icons'

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Ashish Mishra',
  headline: ['SAP BASIS Consultant', 'SAP Technology', 'Cloud & Enterprise Platforms'],
  intro:
    'SAP BASIS professional with around 10 years of experience across enterprise SAP landscapes, cloud migration, S/4HANA transformation, SAP BTP and infrastructure modernization, including 4 years of technical leadership.',
  location: 'Regina, Saskatchewan, Canada',
  email: 'mishra.ashish0123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashish-mishra-99386ab3',
  linkedinLabel: 'linkedin.com/in/ashish-mishra-99386ab3',
  /** Optional. Leave empty to keep the phone number off the public site. */
  phone: '',
  /** Path inside /public. Replace the file to update the downloadable resume. */
  resumeFile: 'resume/Ashish-Mishra-Resume.pdf',
  resumeDownloadName: 'Ashish-Mishra-SAP-BASIS-Resume.pdf',
}

/* ------------------------------------------------------------------ */
/* Hero flow (animated landscape path)                                 */
/* ------------------------------------------------------------------ */

export const heroFlow: { label: string; detail: string; icon: IconName; items?: string[] }[] = [
  { label: 'SAP Systems', detail: 'SAP S/4HANA · SAP ECC · SAP HANA', icon: 'server' },
  {
    label: 'SAP BTP',
    detail: 'Platform, connectivity and operations',
    icon: 'cloudCog',
    items: ['SAP Cloud Connector', 'SAP Cloud ALM', 'SAP BTP Mobile Services'],
  },
  { label: 'SAP HANA HA/DR & Backup', detail: 'SUSE Linux clusters · Failover · AzAcSnap', icon: 'databaseBackup' },
  { label: 'SAP Security & Identity', detail: 'SSO · SNC · SAP IAS · SAP ETD', icon: 'shieldCheck' },
]

/* ------------------------------------------------------------------ */
/* Snapshot metrics (each one is backed by the resume)                 */
/* ------------------------------------------------------------------ */

export const metrics = [
  { value: '10+', label: 'Years in SAP BASIS', note: 'SAP BASIS since July 2016' },
  { value: '4 Years', label: 'Technical Leadership', note: 'Technical ownership, implementation and mentoring' },
  { value: 'Multiple', label: 'SAP Implementation & Support Projects', note: 'Implementation, integration, upgrade and operations' },
  { value: 'SAP + Cloud', label: 'Enterprise Technology', note: 'On-premises, Azure and SAP BTP' },
]

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  lead:
    'I build, run and modernize enterprise SAP landscapes, from installing ABAP and Java stacks to moving whole landscapes to Microsoft Azure and connecting them to SAP BTP.',
  body:
    'Over about ten years I have gone from hands-on SAP BASIS administration to technical leadership across multiple SAP implementation and support projects. Today I support SAP S/4HANA transformation and cloud adoption at SaskPower.',
  pillars: [
    {
      icon: 'server' as IconName,
      title: 'Build & Run SAP Landscapes',
      text: 'Installing and configuring SAP ABAP and Java systems on Unix, Linux and Windows, in single, distributed and high-availability clustered setups.',
      tags: ['SAP BASIS', 'SAP HANA', 'Solution Manager', 'SAP Gateway', 'SAP Fiori'],
    },
    {
      icon: 'route' as IconName,
      title: 'Modernize & Migrate',
      text: 'Upgrades and migrations across SAP landscapes, including an on-premises to Azure migration and support for the SAP ECC to S/4HANA conversion.',
      tags: ['Microsoft Azure', 'SAP S/4HANA', 'Upgrades', 'Migrations'],
    },
    {
      icon: 'cloudCog' as IconName,
      title: 'Cloud & SAP BTP',
      text: 'Hands-on with SAP BTP, Cloud Connector, Cloud ALM, SAP ETD Public Cloud and BTP mobile apps. Drove SAP backup and recovery setup with AzAcSnap.',
      tags: ['SAP BTP', 'Cloud Connector', 'Cloud ALM', 'SAP ETD'],
    },
    {
      icon: 'gauge' as IconName,
      title: 'Operate & Optimize',
      text: 'Troubleshooting system errors, tuning performance and running day-to-day operations across SAP and non-SAP tools.',
      tags: ['SAP S/4HANA', 'SAP CRM', 'SAP SRM', 'SAP Enterprise Portal', 'SAP BODS / BOBJ', 'SAP C4C', 'ServiceNow', 'Redwood RunMyJobs'],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* SAP BTP spotlight: technology-focused, no employer or client names  */
/* ------------------------------------------------------------------ */

export type BtpItem = {
  icon: IconName
  title: string
  category: string
  text: string
  points?: string[]
}

export const btpSpotlight: { intro: string; feature: BtpItem; items: BtpItem[] } = {
  intro:
    'Hands-on administration and implementation across SAP Business Technology Platform: platform administration, identity and SSO, hybrid connectivity, integration, mobile services, monitoring and security.',
  feature: {
    icon: 'settings',
    title: 'BTP Administration',
    category: 'Platform',
    text: 'Setting up and running the SAP BTP platform that applications and integrations depend on.',
    points: [
      'Creation and administration of SAP BTP subaccounts',
      'Configuration and management of BTP services',
      'Service instance and entitlement management',
      'BTP environment and service administration',
      'Configuration of the services required for SAP BTP applications and integrations',
    ],
  },
  items: [
    {
      icon: 'keyRound',
      title: 'SSO Through SAP BTP and Local User Certificates',
      category: 'Authentication',
      text: 'Single sign-on to on-premises SAP systems.',
      points: [
        'SSO for on-premises SAP S/4HANA and ABAP systems through an SAP BTP service',
        'Users are authenticated with their local user certificate',
        'Certificate-based SSO for SAP Fiori through SAP Business Client',
      ],
    },
    {
      icon: 'cable',
      title: 'SAP Cloud Connector',
      category: 'Connectivity',
      text: 'The secure link between on-premises SAP systems and SAP BTP.',
      points: [
        'Installation and upgrade of SAP Cloud Connector',
        'Configuration and integration with SAP BTP',
        'LDAP configuration',
        'High-availability setup and administration',
      ],
    },
    {
      icon: 'fingerprint',
      title: 'SAP IAS · SAML → OIDC',
      category: 'Identity',
      text: 'Set up SAP Cloud Identity Services (IAS) and moved the trust between SAP BTP and IAS from SAML to OIDC.',
    },
    {
      icon: 'activity',
      title: 'SAP Cloud ALM',
      category: 'Operations',
      text: 'Change Request Management, health monitoring of on-premises SAP systems, and SAP Cloud Connector monitoring.',
    },
    {
      icon: 'smartphone',
      title: 'SAP BTP Mobile Services',
      category: 'Mobile',
      text: 'Building and maintaining mobile applications on SAP BTP.',
      points: [
        'Built several mobile applications using SAP Build (Cloud Build)',
        'Upgraded SAP Asset Manager from 2105 to 2305 on both the BTP and BASIS side',
        'Supported vendor implementations of BTP mobile applications',
      ],
    },
    {
      icon: 'workflow',
      title: 'SAP Integration Suite',
      category: 'Integration',
      text: 'Integrated Redwood RunMyJobs with third-party applications through SAP BTP Integration Suite.',
    },
    {
      icon: 'code',
      title: 'BTP ABAP Environment',
      category: 'Platform',
      text: 'Set up the ABAP environment on SAP BTP.',
    },
    {
      icon: 'shieldAlert',
      title: 'SAP ETD Public Cloud',
      category: 'Security',
      text: 'Connected on-premises SAP systems to SAP Enterprise Threat Detection for security monitoring.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Core expertise                                                      */
/* ------------------------------------------------------------------ */

export const expertise: {
  id: string
  icon: IconName
  title: string
  summary: string
  items: string[]
  proof: string[]
}[] = [
  {
    id: 'basis',
    icon: 'server',
    title: 'SAP BASIS & Infrastructure',
    summary: 'The core platform: installing, configuring and administering SAP systems across operating systems and databases.',
    items: [
      'SAP BASIS Administration', 'SAP ABAP stack', 'SAP Java stack', 'SAP HANA', 'SAP ECC', 'SAP S/4HANA',
      'SAP Solution Manager', 'SAP Gateway', 'SAP Fiori', 'SAP Web Dispatcher', 'SAP Router',
      'SAP Transport Management', 'SAP Enterprise Portal',
    ],
    proof: [
      'Installed Solution Manager 7.2, SAP Gateway on NetWeaver 7.50, SAP PO 7.50, SAP BO 4.2, SAP SMP 3.0 and Web Dispatcher',
      'SAP HANA HA/DR on SUSE Linux clusters, plus HANA backup and restore (including AzAcSnap)',
      'Configured TMS, CUA, SAP Router and Enterprise Portal (SSL, SSO, ADS)',
    ],
  },
  {
    id: 'cloud',
    icon: 'cloudCog',
    title: 'Cloud & Modern SAP',
    summary: 'Connecting SAP landscapes to Microsoft Azure and SAP BTP services, with secure identity and cloud operations.',
    items: [
      'Microsoft Azure', 'SAP BTP', 'SAP Cloud Connector', 'SAP Cloud ALM', 'SAP ETD Public Cloud',
      'SAP Build', 'SAP BTP Mobile Services', 'BTP ABAP', 'SAP IAS',
    ],
    proof: [
      'Administered BTP subaccounts, services and entitlements. Set up IAS, SAP Build and the BTP ABAP environment',
      'Installed, upgraded and configured SAP Cloud Connector, including HA. Moved BTP ↔ IAS trust from SAML to OIDC',
      'Configured Solution Manager on Azure and set up Azure NSG rules with the network team',
    ],
  },
  {
    id: 'migration',
    icon: 'route',
    title: 'Migration & Transformation',
    summary: 'Moving and upgrading SAP landscapes safely, and preparing them for S/4HANA.',
    items: [
      'SAP landscape migration', 'SAP ECC → S/4HANA conversion support', 'SAP systems → Azure migration',
      'SAP upgrades', 'System refreshes', 'Disaster recovery',
    ],
    proof: [
      'Supported the implementation partner through a successful SAP ECC to S/4HANA conversion',
      'Upgraded SAP PO and migrated it from on-premises to Azure. Supported the SAP BW and CRM moves',
      'Ran S/4HANA readiness checks, Signavio Process Insights and ATC configuration',
    ],
  },
  {
    id: 'ops',
    icon: 'activity',
    title: 'Automation & Operations',
    summary: 'Keeping SAP running smoothly with monitoring, job scheduling, change control and performance tuning.',
    items: [
      'Redwood RunMyJobs', 'ServiceNow', 'Monitoring', 'Change management', 'ChaRM',
      'Performance analysis', 'HANA Mini Checks', 'EWA',
    ],
    proof: [
      'Set up Redwood RunMyJobs connections to SAP, including queues and process servers',
      'Managed incidents, change requests and problem tasks in ServiceNow',
      'Tuned performance based on HANA Mini Checks and EarlyWatch Alert reports',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Career timeline                                                     */
/* ------------------------------------------------------------------ */

export type Job = {
  id: string
  role: string
  company: string
  start: string
  end: string
  current?: boolean
  summary: string
  highlights: string[]
  groups: { title: string; items: string[] }[]
}

export const experience: Job[] = [
  {
    id: 'saskpower',
    role: 'Specialist',
    company: 'SaskPower',
    start: 'September 2024',
    end: 'Present',
    current: true,
    summary:
      'SAP technology specialist supporting the SAP S/4HANA conversion and extending the landscape with SAP BTP, Cloud ALM and cloud security services.',
    highlights: [
      'S/4HANA conversion', 'BTP SSO', 'SAP Cloud Connector', 'SAML → OIDC', 'RunMyJobs integrations',
      'BTP mobile apps', 'Cloud ALM', 'SAP Joule', 'BTP ABAP', 'SAP ETD', 'HA / cluster troubleshooting',
    ],
    groups: [
      {
        title: 'S/4HANA Transformation',
        items: [
          'Worked closely with the implementation partner on the SAP S/4HANA conversion project.',
          'Worked with several teams and the implementation partner to fix defects during the S/4HANA project.',
        ],
      },
      {
        title: 'Identity & SAP BTP',
        items: [
          'Set up SSO for SAP S/4HANA and ABAP systems through a BTP service, and SSO for Fiori using local user certificates with SAP Business Client.',
          'Moved the trust between SAP BTP and IAS from SAML to OIDC.',
          'Set up applications and services on SAP BTP, including IAS, SAP Build, SAP Joule and the BTP ABAP environment.',
          'Use SAP Joule with SAP Build and SAP BTP Mobile Services to build and maintain BTP applications.',
          'Integrated Redwood RunMyJobs and other third-party applications through SAP BTP Integration Suite.',
        ],
      },
      {
        title: 'Cloud Operations & Security',
        items: [
          'Set up SAP Cloud Connector in a high-availability configuration.',
          'Set up Change Request Management and health monitoring of on-premises SAP systems in SAP Cloud ALM.',
          'Use SAP Cloud ALM and Joule agents to create custom dashboards for monitoring SAP systems.',
          'Connected on-premises SAP systems to SAP Enterprise Threat Detection (ETD) Public Cloud.',
          'Resolved critical cluster and high-availability incidents on SAP and database servers.',
        ],
      },
    ],
  },
  {
    id: 'accenture',
    role: 'Team Lead',
    company: 'Accenture',
    start: 'March 2020',
    end: 'September 2024',
    summary:
      'Delivered and supported multiple SAP implementation, integration, upgrade and operations projects, contributing to system stability, technical improvements and successful delivery across complex SAP landscapes.',
    highlights: [
      'SAP implementation & support', 'SAP BTP', 'SAP Integration Suite', 'SAP Cloud ALM', 'Cloud Connector',
      'S/4HANA readiness', 'Signavio Process Insights', 'ATC', 'SNC / SSO', 'BTP mobile apps',
      'SAP PO upgrade', 'Azure migration', 'BW / CRM migration', 'Solution Manager', 'ChaRM', 'Retrofit',
      'System refreshes', 'CVI', 'Disaster recovery', 'Performance tuning', 'Security vulnerabilities',
      'Redwood RunMyJobs',
    ],
    groups: [
      {
        title: 'Cloud, BTP & S/4HANA Readiness',
        items: [
          'Delivered and supported multiple client projects using SAP BTP, SAP Integration Suite, SAP Cloud ALM and Cloud Connector.',
          'Ran S/4HANA Readiness Checks and conversion prep on my own, including Data Profiling via ALM, SAP Signavio Process Insights and ATC configuration.',
          'Upgraded SAP Cloud Connector, set up LDAP, and moved Cloud Connector monitoring into Cloud ALM to cut manual monitoring and catch issues early.',
          'Upgraded SAP Asset Manager BTP mobile apps from 2105 to 2305, on both the BTP and BASIS side.',
          'Worked with vendors to deploy BTP mobile apps such as Smart Meter Tracking and Document Easement Signing.',
          'Set up SNC and SSO across the SAP landscape.',
        ],
      },
      {
        title: 'Upgrades & Azure Migration',
        items: [
          'Upgraded the support pack level of SAP PO systems on premises.',
          'Migrated the upgraded SAP PO systems from on-premises to Azure.',
          'Worked with the team on the upgrade and Azure migration of SAP BW and SAP CRM systems.',
          'Identified the required ports and set up NSG rules in Azure with the network team.',
          'Handled post-upgrade and post-migration work for multiple SAP systems.',
          'Configured SAP Solution Manager on Azure.',
        ],
      },
      {
        title: 'Operations, Change & Resilience',
        items: [
          'Ran a complete end-to-end disaster recovery exercise.',
          'Led system refreshes and upgrades, including a refresh of Employee Central Payroll systems.',
          'Managed ChaRM in Solution Manager, plus the monthly change cycle and retrofit of changes across landscapes.',
          'Worked on the SAP CVI project, including data archiving, and retired legacy CRM systems.',
          'Tuned performance based on HANA Mini Checks and EWA reports, and fixed SAP vulnerabilities as they were released.',
          'Installed and configured SAP Router. Set up Redwood RunMyJobs connections to SAP, including queues and process servers.',
          'Managed incidents, change requests and problem tasks in ServiceNow.',
        ],
      },
      {
        title: 'Leadership & Delivery',
        items: [
          'Delivered project work accurately and on schedule.',
          'Worked with project teams on C4C, SAP SuccessFactors, mInventory Logistics and Codebook apps to fix issues and reduce risk at UAT and go-live.',
          'Worked with vendors on Celonis, BTA EDMS ECTR, Bill Print Redesign, Azure Data Factory integration, MDM and TSA projects.',
          'Did root-cause analysis and gave clients clear, timely fixes and documentation.',
          'Advised on tuning and optimizing SAP landscapes. Handled maintenance, problem handling and reporting for clients.',
          'Shared knowledge with other consultants and tracked daily project status.',
        ],
      },
    ],
  },
  {
    id: 'birlasoft',
    role: 'SAP Consultant',
    company: 'Birlasoft / KPIT',
    start: 'September 2018',
    end: 'March 2020',
    summary:
      'SAP BASIS consultant for Solution Manager, SAP HANA and day-to-day landscape operations.',
    highlights: [
      'SAP Solution Manager', 'SAP HANA', 'EWA', 'ChaRM', 'System refresh', 'Backup / restore',
      'SAP HANA installation', 'SAP HANA backup / restore', 'SAP Vertex patching',
    ],
    groups: [
      {
        title: 'Solution Manager',
        items: [
          'Installed SAP Solution Manager 7.2 and upgraded it to SP08.',
          'Did the basic system configuration of Solution Manager, plus EWA and Technical System Monitoring.',
          'Set up ChaRM in Solution Manager.',
          'Installed the HDB client for DBACOCKPIT in Solution Manager.',
        ],
      },
      {
        title: 'Database & Systems',
        items: [
          'Installed SAP HANA DB and handled HANA backup and restore.',
          'Refreshed systems using backup and restore on DB2.',
          'Applied monthly SAP Vertex patch updates.',
          'Applied digitally signed SAP Notes with TCI, and the SAP Support Backbone update.',
        ],
      },
      {
        title: 'Operations',
        items: [
          'Handled day-to-day support: daily monitoring reports, log and dump analysis, transports, Remedy tickets and user issues.',
        ],
      },
    ],
  },
  {
    id: 'npcl',
    role: 'SAP BASIS Administrator',
    company: 'Noida Power Company Limited',
    start: 'July 2016',
    end: 'August 2018',
    summary:
      'Hands-on SAP BASIS administration: installations, upgrades, system refreshes, configuration and security.',
    highlights: [
      'SAP installations', 'SAP Solution Manager', 'SAP Gateway', 'SAP PO', 'SAP BO', 'SAP SMP',
      'Web Dispatcher', 'Oracle', 'SAP ECC upgrade', 'SAP Router', 'System refresh', 'TMS',
      'Enterprise Portal', 'Security administration', 'SAP Fiori',
    ],
    groups: [
      {
        title: 'Installations & Upgrades',
        items: [
          'Installed Solution Manager 7.2, SAP Gateway on NetWeaver 7.50, SAP PO 7.50, SAP BO 4.2 SP4, SAP SMP 3.0, Diagnostic Agent 7.45/7.49, SAP Web Dispatcher and Oracle database.',
          'Upgraded SAP ECC for the 2017–18 Union Budget changes and Solution Manager 7.2 to SP5.',
          'Installed and updated add-ons with SAINT and SPAM.',
          'Installed and configured SAP Router.',
        ],
      },
      {
        title: 'Configuration',
        items: [
          'Did the basic configuration of Solution Manager 7.2 and the EWA report.',
          'Configured SAP TMS: domain controller, system landscape and transport routes.',
          'Configured CUA.',
          'Administered the Enterprise Portal: user management, RFCs, certificate keys, SSL, SSO and ADS configuration.',
          'Rolled out SAP Fiori apps for applying for and approving leave requests.',
        ],
      },
      {
        title: 'Administration & Support',
        items: [
          'Refreshed SAP ECC, SRM and BI systems using backup and restore. Exported and imported CRM and SRM systems with SWPM.',
          'Handled user and security administration: users, roles and role assignments.',
          'Created and scheduled batch jobs. Handled database administration.',
          'Handled SAP Service Marketplace work: certificates, new systems and remote connections.',
          'Worked with the vendor on Multichannel Foundation for IS-U.',
          'Handled day-to-day support: monitoring, log and short dump analysis, and user support.',
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Featured projects                                                   */
/* ------------------------------------------------------------------ */

export const projects: {
  icon: IconName
  title: string
  context: string
  role?: string
  tech: string[]
  description: string
  points: string[]
}[] = [
  {
    icon: 'layers',
    title: 'S/4HANA Conversion',
    context: 'SaskPower',
    role: 'SAP BASIS / Technology',
    tech: ['SAP S/4HANA', 'SAP BTP', 'SAP Fiori', 'SSO'],
    description:
      'Supported the implementation partner and project teams during the SAP S/4HANA conversion, including defect fixes and SSO setup.',
    points: [
      'Worked closely with the implementation partner through the conversion',
      'Fixed defects with project teams and the partner',
      'Set up SSO for S/4HANA through a BTP service, and for Fiori with SAP Business Client',
      'Earlier, at Accenture: ran S/4HANA readiness checks, Signavio Process Insights and ATC configuration',
    ],
  },
  {
    icon: 'cloud',
    title: 'SAP Landscape Migration to Azure',
    context: 'Accenture',
    role: 'SAP BASIS',
    tech: ['Microsoft Azure', 'SAP BASIS', 'SAP PO', 'SAP BW', 'SAP CRM', 'Solution Manager'],
    description:
      'Worked with the teams responsible for each system to move an entire on-premises SAP landscape to Microsoft Azure.',
    points: [
      'Upgraded SAP PO and migrated it to Azure',
      'Worked on the upgrade and Azure migration of SAP BW and SAP CRM',
      'Identified the required ports and set up Azure NSG rules with the network team',
      'Configured Solution Manager on Azure and handled post-migration work',
    ],
  },
  {
    icon: 'cloudCog',
    title: 'SAP BTP & Cloud Integration',
    context: 'SaskPower',
    role: 'SAP Technology',
    tech: ['SAP BTP', 'SAP Cloud Connector', 'SAP IAS', 'SAP Build', 'BTP ABAP'],
    description:
      'Set up SAP BTP services and identity so on-premises SAP connects securely to the cloud.',
    points: [
      'Set up IAS, SAP Build and the BTP ABAP environment',
      'Moved the BTP trust with IAS from SAML to OIDC',
      'Integrated Redwood RunMyJobs with third-party apps through BTP Integration Suite',
      'Set up SSO for S/4HANA and ABAP systems through a BTP service',
    ],
  },
  {
    icon: 'cable',
    title: 'SAP Cloud Connector',
    context: 'SaskPower · Accenture',
    tech: ['SAP Cloud Connector', 'SAP BTP', 'High availability', 'LDAP', 'SAP Cloud ALM'],
    description:
      'Made the link between on-premises SAP and SAP BTP resilient, easier to manage and easier to monitor.',
    points: [
      'Installation, upgrade and configuration with SAP BTP',
      'High-availability setup and administration (SaskPower)',
      'Upgraded Cloud Connector and set up LDAP (Accenture)',
      'Moved Cloud Connector monitoring into Cloud ALM to cut manual checks and catch issues early (Accenture)',
    ],
  },
  {
    icon: 'activity',
    title: 'SAP Cloud ALM',
    context: 'SaskPower · Accenture',
    tech: ['SAP Cloud ALM', 'Change Request Management', 'Health Monitoring'],
    description:
      'Used Cloud ALM as a central place for change control and health monitoring across the SAP landscape.',
    points: [
      'Change Request Management for on-premises SAP systems',
      'Health monitoring of on-premises SAP systems',
      'Cloud Connector monitoring',
      'Data profiling via ALM for S/4HANA readiness',
    ],
  },
  {
    icon: 'smartphone',
    title: 'BTP Mobile Applications',
    context: 'SaskPower · Accenture',
    tech: ['SAP BTP', 'SAP Build', 'SAP Asset Manager'],
    description:
      'Upgraded, deployed and maintained SAP BTP mobile apps, working across BTP and BASIS.',
    points: [
      'Upgraded SAP Asset Manager from 2105 to 2305',
      'Worked with vendors on Smart Meter Tracking and Document Easement Signing',
      'Build and maintain BTP mobile apps with SAP Build',
    ],
  },
  {
    icon: 'lifeBuoy',
    title: 'SAP HANA HA/DR & Backup',
    context: 'Across roles',
    tech: ['SAP HANA', 'SUSE Linux', 'HA/DR', 'AzAcSnap', 'Backup & restore'],
    description:
      'Keeping SAP HANA available and recoverable, from clustered HA/DR to tested backup and restore.',
    points: [
      'HA/DR implementation and administration for SAP HANA clusters running on SUSE Linux',
      'SAP HANA cluster administration and failover',
      'SAP HANA backup and restore, including Azure Application Consistent Snapshot (AzAcSnap)',
      'Ran a complete end-to-end disaster recovery exercise (Accenture)',
    ],
  },
  {
    icon: 'refreshCw',
    title: 'SAP PO Upgrade & Azure Migration',
    context: 'Accenture',
    tech: ['SAP PO', 'Microsoft Azure', 'SAP BASIS'],
    description:
      'Upgraded SAP Process Orchestration on premises, then moved it to Azure.',
    points: [
      'Upgraded the support pack level of SAP PO systems on premises',
      'Migrated the upgraded SAP PO systems to Azure',
      'Handled post-upgrade and post-migration work',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Applied AI                                                          */
/* ------------------------------------------------------------------ */

export const appliedAi: { intro: string; items: typeof projects } = {
  intro:
    'I build and learn with Claude and Claude Code, keep picking up new AI tools and skills, and bring them into my SAP work with security first.',
  items: [
    {
      icon: 'code',
      title: 'AI-Assisted Portfolio Web App',
      context: '2026',
      tech: ['Claude Code', 'React', 'TypeScript', 'Vite', 'GitHub Actions'],
      description:
        'This site: designed and shipped with Claude Code, with all content driven from one structured data file.',
      points: [
        'Automated CI/CD to GitHub Pages with GitHub Actions',
        'Accessible (keyboard navigation, reduced-motion support) and responsive from phone to desktop',
        'Traced a UI defect (content disappearing after a re-render) to its root cause, fixed it and verified the fix on desktop and mobile before release',
      ],
    },
    {
      icon: 'smartphone',
      title: 'Apps for Everyday Use',
      context: 'Ongoing',
      tech: ['Claude Code', 'Skills & Plugins', 'Code Review', 'Security Review'],
      description: 'Built and enhancing apps for everyday use, such as an expense tracker and a vehicle expense tracker.',
      points: [
        'Use Claude Code skills and plugins from build to deployment: design, code review, security review and release',
        'Security is the first requirement, not an afterthought',
      ],
    },
    {
      icon: 'bot',
      title: 'Claude in SAP BASIS & BTP Work',
      context: 'Ongoing',
      tech: ['Claude', 'Agentic Workflows', 'Prompt Design'],
      description: 'Using Claude to work faster and learn continuously, with human review before anything reaches a system.',
      points: [
        'Ramp up on new SAP BTP services, analyze error logs during troubleshooting, and draft technical documentation and runbooks',
        'Validate every output against SAP documentation and system behaviour before applying any change',
        'Keep learning new AI tooling: agentic workflows, Claude Code skills and tool integrations, and effective prompt design',
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Architecture visualization                                          */
/* ------------------------------------------------------------------ */

export type ArchNode = {
  id: string
  label: string
  sub?: string
  icon: IconName
  description: string
  evidence: { org: string; text: string }[]
  related: string[]
}

export const architecture: Record<string, ArchNode> = {
  users: {
    id: 'users', label: 'Enterprise Users', sub: 'Fiori · SAP Business Client', icon: 'users',
    description: 'Business users reach SAP through Fiori and SAP Business Client, signed in with single sign-on.',
    evidence: [{ org: 'SaskPower', text: 'Fiori SSO using local user certificates with SAP Business Client' }],
    related: ['fiori', 'ias'],
  },
  fiori: {
    id: 'fiori', label: 'SAP Fiori', icon: 'layoutGrid',
    description: 'The user experience layer for SAP applications.',
    evidence: [
      { org: 'NPCL', text: 'Rolled out Fiori leave request apps' },
      { org: 'SaskPower', text: 'Set up certificate-based SSO for Fiori' },
    ],
    related: ['users', 'gateway'],
  },
  gateway: {
    id: 'gateway', label: 'SAP Gateway', icon: 'network',
    description: 'Serves OData from SAP back-end systems to Fiori and other apps.',
    evidence: [{ org: 'NPCL', text: 'Installed SAP Gateway on NetWeaver 7.50' }],
    related: ['fiori', 'apps'],
  },
  webdisp: {
    id: 'webdisp', label: 'Web Dispatcher', icon: 'split',
    description: 'Routes and balances HTTP(S) traffic into the SAP systems.',
    evidence: [{ org: 'NPCL', text: 'Installed SAP Web Dispatcher' }],
    related: ['users', 'apps'],
  },
  router: {
    id: 'router', label: 'SAP Router', icon: 'waypoints',
    description: 'Secure network connection between SAP systems and SAP Support.',
    evidence: [
      { org: 'Accenture', text: 'Installed and configured SAP Router' },
      { org: 'NPCL', text: 'Installed and configured SAP Router' },
    ],
    related: ['basis'],
  },
  apps: {
    id: 'apps', label: 'SAP Applications', sub: 'S/4HANA · ECC · PO · BW · CRM', icon: 'boxes',
    description: 'The business applications I have converted, upgraded, migrated and supported.',
    evidence: [
      { org: 'SaskPower', text: 'Supported the SAP S/4HANA conversion' },
      { org: 'Accenture', text: 'SAP PO upgrade and Azure migration. SAP BW and CRM migration' },
      { org: 'NPCL', text: 'Upgraded SAP ECC. Refreshed ECC, SRM and BI' },
    ],
    related: ['basis', 'gateway', 'solman'],
  },
  solman: {
    id: 'solman', label: 'Solution Manager', sub: 'ChaRM · EWA', icon: 'listChecks',
    description: 'Central lifecycle management for on-premises landscapes: change control, monitoring and EarlyWatch Alerts.',
    evidence: [
      { org: 'Accenture', text: 'Configured Solution Manager on Azure. Managed ChaRM and retrofits' },
      { org: 'Birlasoft', text: 'Installed Solution Manager 7.2 and upgraded it to SP08. Set up EWA and ChaRM' },
    ],
    related: ['apps', 'monitoring'],
  },
  basis: {
    id: 'basis', label: 'SAP BASIS / Infrastructure', sub: 'ABAP · Java · Unix · Linux · Windows', icon: 'serverCog',
    description: 'The technical foundation I run: installing, configuring, upgrading and securing SAP systems in single, distributed and high-availability setups.',
    evidence: [
      { org: 'Career', text: 'Around 10 years in SAP BASIS across ABAP and Java stacks' },
      { org: 'Accenture', text: 'Led system refreshes and upgrades. Applied SAP security fixes' },
    ],
    related: ['apps', 'hana', 'ha', 'azure', 'scc', 'router'],
  },
  hana: {
    id: 'hana', label: 'SAP HANA', sub: 'plus Oracle · DB2', icon: 'database',
    description: 'In-memory database under modern SAP systems.',
    evidence: [
      { org: 'Birlasoft', text: 'Installed SAP HANA DB and handled backup and restore' },
      { org: 'Accenture', text: 'Tuned performance with HANA Mini Checks' },
    ],
    related: ['basis', 'dr'],
  },
  ha: {
    id: 'ha', label: 'HANA HA/DR', sub: 'SUSE Linux clusters', icon: 'hardDrive',
    description: 'SAP HANA and SAP application servers in high-availability clusters on SUSE Linux, with failover and disaster recovery.',
    evidence: [
      { org: 'SaskPower', text: 'Resolved critical cluster and HA incidents on SAP and DB servers' },
      { org: 'Career', text: 'HA/DR implementation and administration for SAP HANA clusters on SUSE Linux' },
      { org: 'Career', text: 'Installed SAP in high-availability clustered environments' },
    ],
    related: ['basis', 'dr'],
  },
  azure: {
    id: 'azure', label: 'Microsoft Azure', sub: 'Hosting · NSG · AzAcSnap', icon: 'cloud',
    description: 'Cloud infrastructure for the SAP landscape after migrating from on-premises.',
    evidence: [
      { org: 'Accenture', text: 'Migrated SAP PO, BW and CRM to Azure. Set up NSG rules' },
      { org: 'Career', text: 'Led SAP backup and recovery setup with AzAcSnap' },
    ],
    related: ['basis', 'dr'],
  },
  scc: {
    id: 'scc', label: 'SAP Cloud Connector', sub: 'On-premises ↔ BTP', icon: 'cable',
    description: 'The secure tunnel between on-premises SAP systems and SAP BTP.',
    evidence: [
      { org: 'SaskPower', text: 'Set up and administer Cloud Connector in high availability' },
      { org: 'Accenture', text: 'Upgraded it, set up LDAP and added Cloud ALM monitoring' },
    ],
    related: ['basis', 'btp', 'calm'],
  },
  btp: {
    id: 'btp', label: 'SAP BTP', sub: 'Business Technology Platform', icon: 'cloudCog',
    description: 'SAP’s cloud platform. I administer subaccounts, services and entitlements, and connect it to on-premises SAP.',
    evidence: [
      { org: 'SaskPower', text: 'Set up SAP BTP applications and services' },
      { org: 'Accenture', text: 'Worked with SAP BTP across client projects' },
    ],
    related: ['scc', 'ias', 'is', 'build', 'abap', 'calm'],
  },
  ias: {
    id: 'ias', label: 'SAP IAS', sub: 'Identity · OIDC', icon: 'fingerprint',
    description: 'SAP Cloud Identity Services. Handles authentication and SSO.',
    evidence: [{ org: 'SaskPower', text: 'Set up IAS and moved BTP ↔ IAS trust from SAML to OIDC' }],
    related: ['btp', 'users'],
  },
  is: {
    id: 'is', label: 'Integration Suite', icon: 'workflow',
    description: 'SAP BTP service for connecting SAP and third-party applications.',
    evidence: [
      { org: 'SaskPower', text: 'Integrated Redwood RunMyJobs with third-party apps through BTP IS' },
      { org: 'Accenture', text: 'Worked with SAP IS on client projects' },
    ],
    related: ['btp', 'rmj'],
  },
  build: {
    id: 'build', label: 'Mobile Services', sub: 'SAP Build · Asset Manager', icon: 'smartphone',
    description: 'SAP BTP Mobile Services, with mobile apps built using SAP Build (Cloud Build).',
    evidence: [
      { org: 'SaskPower', text: 'Build and maintain BTP mobile apps with SAP Build' },
      { org: 'Accenture', text: 'Upgraded SAP Asset Manager from 2105 to 2305' },
    ],
    related: ['btp'],
  },
  abap: {
    id: 'abap', label: 'BTP ABAP', icon: 'code',
    description: 'The ABAP environment on SAP BTP, for cloud-ready ABAP development.',
    evidence: [{ org: 'SaskPower', text: 'Set up the BTP ABAP environment' }],
    related: ['btp'],
  },
  calm: {
    id: 'calm', label: 'SAP Cloud ALM', icon: 'activity',
    description: 'Cloud-based application lifecycle management: change control and health monitoring.',
    evidence: [
      { org: 'SaskPower', text: 'Set up Change Request Management and health monitoring' },
      { org: 'Accenture', text: 'Monitored Cloud Connector from Cloud ALM' },
    ],
    related: ['scc', 'monitoring', 'basis'],
  },
  etd: {
    id: 'etd', label: 'SAP ETD', sub: 'Public Cloud', icon: 'shieldAlert',
    description: 'SAP Enterprise Threat Detection. Watches SAP logs for security threats.',
    evidence: [{ org: 'SaskPower', text: 'Connected on-premises SAP systems to ETD Public Cloud' }],
    related: ['basis'],
  },
  rmj: {
    id: 'rmj', label: 'Redwood RunMyJobs', icon: 'calendarClock',
    description: 'Enterprise job scheduling and automation for SAP.',
    evidence: [
      { org: 'Accenture', text: 'Set up SAP connections, queues and process servers' },
      { org: 'SaskPower', text: 'Integrated it with third-party apps through BTP IS' },
    ],
    related: ['is', 'basis'],
  },
  monitoring: {
    id: 'monitoring', label: 'Monitoring', sub: 'EWA · Mini Checks · ServiceNow', icon: 'gauge',
    description: 'Watching the landscape with proactive checks and managing incidents.',
    evidence: [
      { org: 'Accenture', text: 'Tuned performance with EWA and HANA Mini Checks. Worked in ServiceNow' },
      { org: 'Birlasoft', text: 'Set up Technical System Monitoring in Solution Manager' },
    ],
    related: ['calm', 'solman'],
  },
  dr: {
    id: 'dr', label: 'Disaster Recovery', sub: 'Backup & restore', icon: 'lifeBuoy',
    description: 'Recovering SAP systems and data after a major failure.',
    evidence: [
      { org: 'Accenture', text: 'Ran a complete end-to-end disaster recovery exercise' },
      { org: 'Career', text: 'Led SAP backup and recovery setup with AzAcSnap' },
    ],
    related: ['hana', 'azure', 'ha'],
  },
}

/** Layout of the diagram (ids from `architecture`). */
export const architectureLayout = {
  users: ['users'],
  access: ['fiori', 'gateway', 'webdisp', 'router'],
  landscape: {
    apps: ['apps', 'solman'],
    basis: 'basis',
    platform: ['hana', 'ha'],
    hosting: 'azure',
  },
  bridge: 'scc',
  btp: { core: 'btp', services: ['ias', 'is', 'build', 'abap'] },
  operations: ['calm', 'etd', 'rmj', 'monitoring', 'dr'],
}

/* ------------------------------------------------------------------ */
/* Technology ecosystem                                                */
/* ------------------------------------------------------------------ */

export const technologyGroups: { id: string; icon: IconName; title: string; items: string[] }[] = [
  {
    id: 'sap', icon: 'boxes', title: 'SAP',
    items: [
      'SAP S/4HANA', 'SAP ECC', 'SAP HANA', 'SAP Solution Manager', 'SAP PO', 'SAP BW', 'SAP CRM', 'SAP SRM',
      'SAP Fiori', 'SAP Gateway', 'SAP Enterprise Portal', 'SAP BODS', 'SAP BusinessObjects', 'SAP C4C',
      'SAP SuccessFactors', 'Employee Central Payroll', 'SAP Asset Manager', 'SAP SMP', 'SAP Vertex',
    ],
  },
  {
    id: 'cloud', icon: 'cloud', title: 'Cloud',
    items: ['SAP BTP', 'SAP Cloud Connector', 'SAP Cloud ALM', 'SAP BTP Mobile Services', 'SAP Build', 'BTP ABAP', 'SAP IAS', 'Microsoft Azure'],
  },
  {
    id: 'infra', icon: 'hardDrive', title: 'Infrastructure',
    items: [
      'Unix', 'Linux', 'SUSE Linux', 'Microsoft Windows', 'Oracle', 'DB2', 'SAP HANA HA/DR clusters', 'SAP Web Dispatcher',
      'SAP Router', 'Azure NSG', 'AzAcSnap',
    ],
  },
  {
    id: 'integration', icon: 'workflow', title: 'Integration',
    items: ['SAP Integration Suite', 'SAP Cloud Connector', 'SAP PO', 'SAP Gateway', 'Azure Data Factory integration', 'Multichannel Foundation (IS-U)'],
  },
  {
    id: 'monitoring', icon: 'gauge', title: 'Monitoring',
    items: ['SAP Cloud ALM', 'EarlyWatch Alert', 'HANA Mini Checks', 'Technical System Monitoring', 'DBACOCKPIT', 'ServiceNow'],
  },
  {
    id: 'automation', icon: 'calendarClock', title: 'Automation',
    items: ['Redwood RunMyJobs', 'Batch job management', 'ChaRM', 'SAP TMS', 'SAINT / SPAM', 'SWPM', 'SAP Readiness Check', 'ATC'],
  },
  {
    id: 'ai', icon: 'bot', title: 'AI & Dev Tools',
    items: ['Python', 'Claude', 'Claude Code', 'SAP Joule', 'Prompt Design', 'Git / GitHub', 'GitHub Actions', 'React / TypeScript'],
  },
  {
    id: 'security', icon: 'shieldCheck', title: 'Security',
    items: ['SSO', 'SNC', 'SAML', 'OIDC', 'SAP IAS', 'SAP ETD', 'LDAP', 'CUA', 'SSL / certificates', 'SAP vulnerability patching', 'User & role administration'],
  },
]

/* ------------------------------------------------------------------ */
/* Strengths                                                           */
/* ------------------------------------------------------------------ */

export const strengths: { icon: IconName; title: string; text: string }[] = [
  { icon: 'handshake', title: 'Technical Leadership', text: '4 years as a technical lead: owning SAP landscapes end to end, from design and implementation to problem solving and mentoring consultants.' },
  { icon: 'search', title: 'Troubleshooting & Analysis', text: 'Diagnosing system errors, dumps and critical cluster and HA incidents.' },
  { icon: 'target', title: 'Problem Solving', text: 'Fixing issues across projects to reduce risk at UAT and go-live.' },
  { icon: 'server', title: 'SAP Landscape Management', text: 'Refreshes, upgrades, transports and change cycles across full landscapes.' },
  { icon: 'users', title: 'Technical Coordination', text: 'Working with implementation partners, vendors and network teams.' },
  { icon: 'bookOpen', title: 'Knowledge Sharing', text: 'Taking part in knowledge transfer with other consultants.' },
  { icon: 'briefcase', title: 'Project Delivery', text: 'Delivering accurately and on schedule across SAP implementation, upgrade and support projects.' },
  { icon: 'scanSearch', title: 'Root Cause Analysis', text: 'Finding the real cause and documenting clear fixes in a timely way.' },
  { icon: 'gauge', title: 'Performance Optimization', text: 'Tuning based on HANA Mini Checks and EarlyWatch Alert reports.' },
]

/* ------------------------------------------------------------------ */
/* Credentials                                                         */
/* ------------------------------------------------------------------ */

/** Newest first. */
export const certifications = [
  {
    title: 'SAP Certified Technology Specialist - SAP S/4HANA Conversion and SAP System Upgrade',
    issuer: 'SAP',
    year: '2025',
  },
  {
    title: 'SAP Certified Specialist - Implementation Consultant - SAP S/4HANA Cloud Private Edition',
    issuer: 'SAP',
    year: '2025',
  },
  { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft Azure', year: '2020' },
]

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech), Computer Science',
    school: 'Dehradun Institute of Technology',
    location: 'Dehradun, India',
    years: '2012 – 2016',
  },
]

export const awards = {
  formal: [{ title: 'Accenture ACE Award', issuer: 'Accenture', date: 'October 2020' }],
  recognition: 'Multiple appreciation from client leads and directors',
}
