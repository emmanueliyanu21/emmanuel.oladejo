'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const sibs = [...e.target.parentElement!.querySelectorAll('.reveal')]
            const delay = Math.min(sibs.indexOf(e.target as Element), 6) * 70
            setTimeout(() => e.target.classList.add('in'), delay)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
