'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type ActiveSectionContextType = {
  activeSection: string
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: '',
})

export function useActiveSection() {
  return useContext(ActiveSectionContext)
}

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        let bestId = activeSection
        let bestRatio = 0

        for (const entry of entries) {
          const id = entry.target.getAttribute('data-section') || ''
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            bestId = id
          }
        }

        if (bestId) {
          setActiveSection(bestId)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ActiveSectionContext.Provider value={{ activeSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}
