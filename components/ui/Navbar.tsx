'use client'

import { useActiveSection } from '@/lib/ActiveSectionContext'

const navItems = [
  { number: '01', label: 'about', href: '#about', section: 'about' },
  { number: '02', label: 'projects', href: '#projects', section: 'projects' },
] as const

export default function NavBar() {
  const { activeSection } = useActiveSection()

  return (
    <nav className='hidden grow py-4 lg:flex'>
      <div className='my-12 flex flex-col gap-7'>
        {navItems.map(({ number, label, href, section }) => {
          const isActive = activeSection === section
          return (
            <a key={section} className='group flex items-center gap-4' href={href}>
              <span
                className={`block h-px transition-all duration-300 ${
                  isActive
                    ? 'w-25 bg-cyan-400'
                    : 'w-10 bg-slate-600 group-hover:w-25 group-hover:bg-cyan-400/60'
                }`}
              />
              <span
                className={`flex items-baseline gap-2 transition-colors duration-300 ${
                  isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-200'
                }`}
              >
                <span className='text-xs text-cyan-400/70'>{number}.</span>
                <span className='text-sm font-semibold tracking-widest uppercase'>
                  {label}
                </span>
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
