import { profile } from './data/resume'

/** Resume PDF URL, resolved against Vite's base so it works on any GitHub Pages path. */
export const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`
