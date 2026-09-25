import { useEffect, useRef, useState } from 'react'

// Self-hosted background video (brightened colour grade). Phones get the
// lighter 540p file; visitors who prefer reduced motion get the still poster.
export default function HeroVideo() {
  const ref = useRef(null)
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (reduced) {
      v.pause()
    } else {
      // Some browsers need a nudge even with muted autoplay.
      v.play().catch(() => {})
    }
  }, [reduced])

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="auto"
      poster="/video/hero-light-poster.jpg"
      aria-hidden="true"
    >
      <source src="/video/hero-light-540.mp4" type="video/mp4" media="(max-width: 700px)" />
      <source src="/video/hero-light-1080.mp4" type="video/mp4" />
    </video>
  )
}
