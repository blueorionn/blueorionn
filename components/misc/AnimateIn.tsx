'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function AnimateIn({
  children,
  className = '',
  id,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if already visible on mount
    const rect = el.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (isInViewport) {
      setVisible(true)
      return
    }

    let observer: IntersectionObserver | null = null

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer?.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => {
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
