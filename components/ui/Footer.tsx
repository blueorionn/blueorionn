import Link from 'next/link'
import { AppIcon } from '../misc/AppIcon'
import { roboto } from '@/lib/fonts'

export default function Footer() {
  const SOCIAL_LINKS = {
    GITHUB: 'https://github.com/blueorionn',
    X: 'https://x.com/blueorionn',
    MEDIUM: 'https://medium.com/@blueorionn',
    MAIL: 'swadhintandi@yahoo.com',
  }

  return (
    <footer className='flex flex-col gap-4'>
      <div className='flex items-center gap-5'>
        {(
          [
            { href: SOCIAL_LINKS.GITHUB, name: 'brand-github', type: 'tabler', label: 'GitHub' },
            { href: SOCIAL_LINKS.X, name: 'brand-x', type: 'tabler', label: 'X' },
            { href: SOCIAL_LINKS.MEDIUM, name: 'medium', type: 'grommet-icons', label: 'Medium' },
            { href: `mailto:${SOCIAL_LINKS.MAIL}`, name: 'mail', type: 'tabler', label: 'Email' },
          ] as const
        ).map(({ href, name, type, label }) => (
          <Link key={label} href={href} target='_blank' aria-label={label}>
            <AppIcon
              name={name}
              type={type}
              size={22}
              className='text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]'
            />
          </Link>
        ))}
      </div>
      <a
        href={`mailto:${SOCIAL_LINKS.MAIL}`}
        className={`${roboto.className} w-fit text-xs tracking-wider text-slate-600 transition-colors duration-300 hover:text-cyan-400`}
      >
        {SOCIAL_LINKS.MAIL}
      </a>
    </footer>
  )
}
