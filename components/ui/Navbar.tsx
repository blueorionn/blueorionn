'use client'

import Link from 'next/link'
import { useActiveSection } from '@/lib/ActiveSectionContext'

const navItems = [
  { label: 'ABOUT', href: '#about', section: 'about' },
  { label: 'EXPERTISE', href: '#expertise', section: 'expertise' },
  { label: 'PROJECTS', href: '#projects', section: 'projects' },
] as const

export default function NavBar() {
  const { activeSection } = useActiveSection()

  return (
    <nav className='hidden grow py-4 lg:flex'>
      <div className='my-12 flex flex-col gap-8'>
        {navItems.map(({ label, href, section }) => {
          const isActive = activeSection === section
          return (
            <Link
              key={section}
              className='group flex items-center gap-4'
              href={href}
            >
              <span
                className={`block h-px transition-all duration-300 ${
                  isActive
                    ? 'w-25 bg-cyan-400'
                    : 'w-12 bg-slate-400 group-hover:w-25'
                }`}
              />
              <span
                className={`text-sm font-bold transition-colors duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-slate-400 group-hover:text-slate-200'
                }`}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
