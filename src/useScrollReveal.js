import { useEffect } from 'react'

// Elements that fade up as they scroll into view. The hero is left alone so the
// first screen never waits on an animation.
const SELECTORS = [
  'main section:not(.hero) .section-head',
  'main section:not(.hero) > .container > .eyebrow',
  // Reveal hairline grids as one unit — animating cards individually would
  // expose the grid's line-coloured background while they move.
  'main .grid',
  'main .split > *',
  'main .contact-layout > *',
  'main .editorial-grid',
  'main .image-band',
  'main .framework',
  'main .list-item',
  'main .cta-box',
  'main .dark-panel',
  'main .filter-chips',
  'main .insight-card',
  'main .article-cover',
  'main .big',
].join(',')

export default function useScrollReveal(key) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    let observer
    const raf = requestAnimationFrame(() => {
      const all = Array.from(document.querySelectorAll(SELECTORS))
      // Skip anything nested inside another reveal target to avoid double motion.
      const targets = all.filter((el) => !all.some((other) => other !== el && other.contains(el)))

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )

      targets.forEach((el) => {
        if (el.classList.contains('reveal')) return
        // Stagger siblings in grids / rows so they cascade in.
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : []
        const idx = siblings.indexOf(el)
        if (siblings.length > 1 && idx > 0) el.style.transitionDelay = `${Math.min(idx, 7) * 80}ms`
        el.classList.add('reveal')
        observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      observer && observer.disconnect()
    }
  }, [key])
}
