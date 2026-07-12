'use client'

import { useEffect } from 'react'

export default function TouchHoverGuard() {
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouch) return

    const style = document.createElement('style')
    style.id = 'touch-hover-reset'
    style.textContent = `
      *:hover,
      .group:hover,
      .group:hover > * {
        transform: none !important;
        translate: none !important;
        background-color: transparent !important;
        background-image: none !important;
        border-color: transparent !important;
        box-shadow: none !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        color: inherit !important;
        width: auto !important;
        opacity: 1 !important;
        transition: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      const el = document.getElementById('touch-hover-reset')
      if (el) el.remove()
    }
  }, [])

  return null
}
