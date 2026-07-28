import Link from 'next/link'
import { AppIcon } from '../misc/AppIcon'

export default function Footer() {
  const SOCIAL_LINKS = {
    GITHUB: 'https://github.com/blueorionn',
    X: 'https://x.com/SSwadhinTandi',
    BLUESKY: 'https://bsky.app/profile/sswadhinn.bsky.social',
    MEDIUM: 'https://medium.com/@blueorionn',
    MAIL: 'swadhintandi@yahoo.com',
  }

  return (
    <>
      <footer className='flex items-center gap-4'>
        <Link href={`${SOCIAL_LINKS.GITHUB}`} target='_blank'>
          <AppIcon
            name='brand-github'
            className='text-slate-400 transition-colors duration-300 hover:text-cyan-600'
          />
        </Link>
        <Link href={`${SOCIAL_LINKS.BLUESKY}`} target='_blank'>
          <AppIcon
            name='brand-bluesky'
            className='text-slate-400 transition-colors duration-300 hover:text-cyan-600'
          />
        </Link>
        <Link href={`${SOCIAL_LINKS.X}`} target='_blank'>
          <AppIcon
            name='brand-x'
            className='text-slate-400 transition-colors duration-300 hover:text-cyan-600'
          />
        </Link>
        <Link href={`${SOCIAL_LINKS.MEDIUM}`} target='_blank'>
          <AppIcon
            type='grommet-icons'
            name='medium'
            className='text-slate-400 transition-colors duration-300 hover:text-cyan-600'
          />
        </Link>
        <a href={`mailto:${SOCIAL_LINKS.MAIL}`}>
          <AppIcon
            name='mail'
            className='text-slate-400 transition-colors duration-300 hover:text-cyan-600'
          />
        </a>
      </footer>
    </>
  )
}
