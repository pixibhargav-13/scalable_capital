import { useEffect, useRef, useState } from 'react'

// Self-hosted background video. Phones get the lighter 540p file; visitors who
// prefer reduced motion get the still poster. `name` picks the clip in
// /public/video: 'hero-tower' (glass towers, Home) or 'hero-light' (city, About).
export default function HeroVideo({ name = 'hero-light' }) {
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
      poster={`/video/${name}-poster.jpg`}
      aria-hidden="true"
    >
      <source src={`/video/${name}-540.mp4`} type="video/mp4" media="(max-width: 700px)" />
      <source src={`/video/${name}-1080.mp4`} type="video/mp4" />
    </video>
  )
}
