# Ashish Mishra: SAP BASIS Consultant Portfolio

This is my personal portfolio site: **SAP BASIS Consultant | SAP Technology | Cloud & Enterprise Platforms**.

It's built with **React, TypeScript and Vite**, uses **Lucide** icons and plain modern CSS (no UI framework), and deploys automatically to **GitHub Pages**.

```
src/
  components/     UI sections (Navbar, Hero, About, BtpSpotlight, Expertise, Experience,
                  Projects, Architecture, TechStack, Strengths, Credentials, Resume, Contact…)
  data/resume.ts  ← ALL resume content lives here
  hooks/          active-section tracking and scroll-reveal
  index.css       design system (colours, typography, layout, animation)
public/
  resume/Ashish-Mishra-Resume.pdf   downloadable resume
  og-image.png                      LinkedIn / social preview image (1200×630)
  favicon.svg
scripts/generate-resume-pdf.ts      rebuilds the resume PDF from data/resume.ts
.github/workflows/deploy.yml        GitHub Pages deployment
```

---

## 1. Installation

You need **Node.js 20.19+ or 22+** ([nodejs.org](https://nodejs.org)).

```bash
npm install
```

## 2. Local development

```bash
npm run dev
```

Open http://localhost:5173. Changes reload instantly.

## 3. Production build

```bash
npm run build     # type-checks, then builds into dist/
npm run preview   # serves dist/ locally to check the production build
```

## 4. GitHub repository setup

1. Create a new repository on GitHub. Either:
   - name it **`<your-username>.github.io`** to get the short URL `https://<your-username>.github.io/`, or
   - use any name (e.g. `portfolio`), and the site will be at `https://<your-username>.github.io/portfolio/`.
2. From this folder, push the code:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

`.gitignore` already excludes `node_modules`, `dist` and any `.docx` file, so the editable Word resume never gets published.

## 5. GitHub Pages setup

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`, or run the workflow by hand from the **Actions** tab.

Every push to `main` now builds and deploys the site automatically (`.github/workflows/deploy.yml`). The workflow sets the public URL for you, so the canonical link, Open Graph image, `robots.txt` and `sitemap.xml` all point at the right address. You don't need any secrets or tokens.

**Add it to LinkedIn:** go to Profile → *Edit intro* → **Website** and paste the URL. For a preview card, use *Featured → Add → Link*. To refresh LinkedIn's cached preview after you make changes, use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## 6. How to update resume content

Everything the site says comes from **`src/data/resume.ts`**. You don't need to touch the components:

| What | Where in `resume.ts` |
| --- | --- |
| Name, headline, intro, email, LinkedIn, location, phone | `profile` |
| Hero "landscape.flow" panel | `heroFlow` |
| Snapshot numbers | `metrics` |
| About text and pillars | `about` |
| SAP BTP spotlight | `btpSpotlight` |
| Expertise tabs | `expertise` |
| Career timeline (roles, dates, highlights, details) | `experience` |
| Project cards | `projects` |
| Architecture diagram (components, descriptions, evidence) | `architecture`, `architectureLayout` |
| Technology ecosystem | `technologyGroups` |
| Strengths | `strengths` |
| Certifications, education, awards | `certifications`, `education`, `awards` |

To add a new job, add an object at the top of `experience`. To show your phone number, fill in `profile.phone`. It's empty by default, so the number stays off the public site.

## 7. How to replace the resume PDF

The **Download Resume** buttons serve `public/resume/Ashish-Mishra-Resume.pdf`.

- **Use your own PDF:** export your resume from Word as a PDF and save it over `public/resume/Ashish-Mishra-Resume.pdf`, keeping the same name. To use a different file name, update `profile.resumeFile` in `src/data/resume.ts`.
- **Regenerate it from the site data:** `npm run resume:pdf` rebuilds the PDF from `resume.ts` with your installed Microsoft Edge or Google Chrome. Set `BROWSER_PATH` if the browser is somewhere unusual.

`profile.resumeDownloadName` controls the file name people see when they download it.

Only put a PDF in `public/`. Never commit the `.docx`.

## 8. How to customize website metadata

- **Title, description, Open Graph and Twitter tags, structured data (JSON-LD):** `index.html`
- **Canonical URL, `og:url`, `og:image`, `robots.txt`, `sitemap.xml`:** generated at build time from the `SITE_URL` environment variable (see `vite.config.ts`). GitHub Actions sets it automatically. For a custom domain, Pages reports that domain and it's used instead.
- **Social preview image:** replace `public/og-image.png` (1200×630 PNG).
- **Favicon:** `public/favicon.svg`
- **Colours and fonts:** the tokens at the top of `src/index.css`

---

### Accessibility & quality notes

- Semantic landmarks, one `h1`, ordered `h2`/`h3` headings, a skip link and visible focus states.
- Expertise tabs support arrow keys. Timeline sections use `aria-expanded`. Architecture nodes are buttons, so they work with keyboard and touch.
- All motion is subtle and switches off under `prefers-reduced-motion`.
- The layout is responsive from 320 px phones to large monitors, with no horizontal scrolling.
