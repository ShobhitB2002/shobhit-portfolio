'use client'
import { useEffect } from 'react'

export default function AnimationProvider({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = parseInt(el.dataset.delay || '0', 10)
            setTimeout(() => el.classList.add('visible'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )

    const scanAndObserve = () => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => observer.observe(el))
    }

    scanAndObserve()

    // MutationObserver to watch for tab/quest switches
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return children
}
