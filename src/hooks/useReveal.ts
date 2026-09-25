import { useEffect } from 'react'

/**
 * Marks every [data-reveal] element with `data-visible` as it scrolls into view.
 *
 * A data attribute is used rather than a class because React rewrites `className`
 * whenever a component re-renders with new classes (e.g. an expanded timeline item),
 * which would silently drop an added class and hide the element again.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const show = (el: Element) => el.setAttribute('data-visible', '')

    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => observer.observe(el))

    // Failsafe: if the observer never fires (e.g. a background tab or an in-app
    // browser), never leave on-screen or already-passed content invisible.
    const reveal = () =>
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) show(el)
      })
    const timer = window.setTimeout(reveal, 2500)
    window.addEventListener('scroll', reveal, { passive: true })

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
      window.removeEventListener('scroll', reveal)
    }
  }, [])
}
