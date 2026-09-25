import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Public URL of the deployed site, e.g. https://username.github.io/repo/
 * Set automatically by the GitHub Pages workflow. When empty (local builds),
 * URL-dependent tags and sitemap.xml are simply left out.
 */
const rawSiteUrl = process.env.SITE_URL?.trim() ?? ''
const siteUrl = rawSiteUrl ? rawSiteUrl.replace(/\/*$/, '/') : ''

function siteSeo(): Plugin {
  return {
    name: 'site-seo',
    transformIndexHtml(html) {
      const tags = siteUrl
        ? [
            `<link rel="canonical" href="${siteUrl}" />`,
            `<meta property="og:url" content="${siteUrl}" />`,
            `<meta property="og:image" content="${siteUrl}og-image.png" />`,
            `<meta property="og:image:width" content="1200" />`,
            `<meta property="og:image:height" content="630" />`,
            `<meta property="og:image:alt" content="Ashish Mishra, SAP BASIS Consultant: SAP Technology, Cloud and Enterprise Platforms" />`,
            `<meta name="twitter:image" content="${siteUrl}og-image.png" />`,
          ].join('\n    ')
        : ''
      return html.replace('<!-- SITE_URL_TAGS -->', tags)
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (siteUrl) robots.push('', `Sitemap: ${siteUrl}sitemap.xml`)
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' })

      if (siteUrl) {
        const today = new Date().toISOString().slice(0, 10)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
        })
      }
    },
  }
}

export default defineConfig({
  // Relative base works for both user sites (username.github.io)
  // and project sites (username.github.io/repo-name/).
  base: './',
  plugins: [react(), siteSeo()],
})
