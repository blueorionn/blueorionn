import Link from 'next/link'
import { bagelfatone, roboto } from '@/lib/fonts'

export default function Header() {
  return (
    <header className='mb-10'>
      <h1
        className={`${bagelfatone.className} mb-4 text-4xl leading-tight text-slate-50 sm:text-5xl`}
      >
        <Link
          href={'https://swadhintandi.me'}
          className='transition-all duration-300 hover:text-cyan-300'
        >
          SWADHIN TANDI
        </Link>
      </h1>
      <h2
        className={`${roboto.className} mb-2 text-xl text-cyan-400/90`}
      >
        Software Engineer
      </h2>
      <h3 className='max-w-60 text-lg leading-relaxed text-slate-400 sm:max-w-xs'>
        Bringing ideas to life, one commit at a time.
      </h3>
    </header>
  )
}
