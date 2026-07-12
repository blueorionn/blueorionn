import Link from 'next/link'
import { bagelfatone, roboto } from '@/lib/fonts'

export default function Header() {
  return (
    <>
      <header className='mb-8'>
        <h1
          className={`${bagelfatone.className} mb-4 text-4xl text-slate-50 sm:text-5xl`}
        >
          <Link href={'https://swadhintandi.me'}>SWADHIN TANDI</Link>
        </h1>
        <h2 className={`${roboto.className} mb-2 text-xl text-slate-300`}>
          Software Engineer
        </h2>
        <h3 className='mb-4 max-w-60 text-lg text-slate-400 sm:max-w-xs'>
          Bringing Ideas To Life
        </h3>
      </header>
    </>
  )
}
