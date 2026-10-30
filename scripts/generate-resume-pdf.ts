/**
 * Generates public/resume/Ashish-Mishra-Resume.pdf from src/data/resume.ts
 * using a locally installed Microsoft Edge or Google Chrome (headless).
 *
 *   npm run resume:pdf
 *
 * Optional: set BROWSER_PATH to point at a specific Chrome/Edge executable.
 * If you prefer your own designed PDF, just replace the file in public/resume/.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import {
  appliedAi, awards, certifications, education, experience, expertise, profile,
} from '../src/data/resume.ts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'public', profile.resumeFile)

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const summary = [
  'Around 10 years of experience in SAP BASIS, including 4 years of technical leadership.',
  'Installation and configuration of SAP systems (ABAP and Java) on Unix, Linux and Microsoft Windows in single, distributed and high-availability clustered environments.',
  'Upgrade and migration experience across SAP landscapes. Worked with the teams migrating an entire on-premises SAP landscape to Azure, and helped the implementation partner complete the SAP ECC to S/4HANA conversion.',
  'Hands-on with SAP BTP, SAP Cloud Connector, SAP Cloud ALM, SAP ETD Public Cloud, SAP BTP mobile apps and SAP S/4HANA.',
  'HA/DR implementation and administration for SAP HANA clusters on SUSE Linux, including cluster failover and SAP HANA backup and restore.',
  'Led the setup of backup and recovery for SAP solutions with AzAcSnap.',
  'Worked with SAP BODS, BOBJ, Solution Manager, SAP Gateway, SAP Fiori and SAP C4C, and non-SAP tools such as ServiceNow and Redwood RunMyJobs.',
  'Analyze and troubleshoot system errors and tune system performance.',
]

const skills = [
  'BASIS Administration', 'SAP HANA Administration', 'SAP BTP', 'SAP Cloud Connector', 'Redwood RunMyJobs',
  'SAP Implementation', 'SAP S/4HANA', 'Microsoft Azure', 'SAP Cloud ALM', 'Communication', 'Problem Solving',
  'Troubleshooting & Analysis', 'Python', 'Claude Code',
]

const html = `<!doctype html>
<html lang="en-CA"><head><meta charset="utf-8"><title>${esc(profile.name)} – Resume</title>
<style>
  @page { size: Letter; margin: 0.6in 0.65in; }
  * { box-sizing: border-box; }
  body { font-family: 'Segoe UI', Calibri, Arial, sans-serif; font-size: 10pt; line-height: 1.38; color: #1a2230; margin: 0; }
  h1 { font-size: 22pt; margin: 0; letter-spacing: -0.3px; color: #0b2545; }
  .headline { font-size: 11pt; color: #1d5fa3; font-weight: 600; margin: 2px 0 6px; }
  .contact { font-size: 9.5pt; color: #3b4758; }
  .contact a { color: #1d5fa3; text-decoration: none; }
  h2 { font-size: 10.5pt; text-transform: uppercase; letter-spacing: 1.2px; color: #0b2545;
       border-bottom: 1.5px solid #1d5fa3; padding-bottom: 3px; margin: 16px 0 8px; }
  ul { margin: 0; padding-left: 16px; }
  li { margin: 0 0 3px; }
  .skills { color: #2c3747; }
  .job { margin: 0 0 10px; page-break-inside: auto; }
  .job-head { display: flex; justify-content: space-between; gap: 12px; }
  .role { font-weight: 700; font-size: 10.5pt; }
  .org { color: #1d5fa3; font-weight: 600; }
  .dates { color: #4a5568; white-space: nowrap; font-size: 9.5pt; }
  h3 { font-size: 9pt; text-transform: uppercase; letter-spacing: .6px; color: #4a5568; margin: 6px 0 3px; }
  .row { display: flex; justify-content: space-between; gap: 12px; }
</style></head><body>
  <h1>${esc(profile.name)}</h1>
  <div class="headline">${esc(profile.headline.join(' | '))}</div>
  <div class="contact">${esc(profile.location)} &nbsp;·&nbsp;
    <a href="mailto:${profile.email}">${esc(profile.email)}</a> &nbsp;·&nbsp;
    <a href="${profile.linkedin}">${esc(profile.linkedinLabel)}</a>${profile.phone ? ` &nbsp;·&nbsp; ${esc(profile.phone)}` : ''}</div>

  <h2>Summary</h2>
  <ul>${summary.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

  <h2>Applied AI: Building and Learning with Claude</h2>
  ${appliedAi.items.map((p) => `<h3>${esc(p.title)}</h3><ul><li>${esc(p.description)}</li>${p.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>`).join('')}

  <h2>Skills</h2>
  <p class="skills">${skills.map(esc).join(' • ')}</p>
  <p class="skills"><strong>Technologies &amp; practices:</strong> ${esc(
    [...new Set(expertise.flatMap((e) => e.items))].join(' • '),
  )}</p>

  <h2>Licenses &amp; Certifications</h2>
  ${certifications.map((c) => `<div class="row"><span><strong>${esc(c.title)}</strong>, ${esc(c.issuer)}</span><span class="dates">${c.year}</span></div>`).join('')}

  <h2>Experience</h2>
  ${experience
    .map(
      (j) => `<div class="job">
    <div class="job-head"><div><span class="role">${esc(j.role)}</span>, <span class="org">${esc(j.company)}</span></div>
    <div class="dates">${esc(j.start)} – ${esc(j.end)}</div></div>
    ${j.groups.map((g) => `<h3>${esc(g.title)}</h3><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`).join('')}
  </div>`,
    )
    .join('')}

  <h2>Education</h2>
  ${education.map((e) => `<div class="row"><span><strong>${esc(e.degree)}</strong><br>${esc(e.school)}, ${esc(e.location)}</span><span class="dates">${esc(e.years)}</span></div>`).join('')}

  <h2>Honours &amp; Awards</h2>
  <ul>
    ${awards.formal.map((a) => `<li><strong>${esc(a.title)}</strong>, ${esc(a.issuer)} (${esc(a.date)})</li>`).join('')}
    <li>${esc(awards.recognition)}</li>
  </ul>
</body></html>`

function findBrowser() {
  const candidates = [
    process.env.BROWSER_PATH,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/microsoft-edge',
  ]
  const found = candidates.find((p) => p && existsSync(p))
  if (!found) throw new Error('No Chrome/Edge found. Set BROWSER_PATH to a Chromium-based browser.')
  return found
}

const tmp = join(tmpdir(), `resume-${Date.now()}`)
mkdirSync(tmp, { recursive: true })
const htmlPath = join(tmp, 'resume.html')
writeFileSync(htmlPath, html, 'utf8')
mkdirSync(dirname(out), { recursive: true })

execFileSync(findBrowser(), [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--user-data-dir=${join(tmp, 'profile')}`,
  `--print-to-pdf=${out}`,
  pathToFileURL(htmlPath).href,
], { stdio: 'ignore' })

rmSync(tmp, { recursive: true, force: true })
console.log(`Resume PDF written to ${out}`)
