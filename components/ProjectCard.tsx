import Image from 'next/image'
import Link from 'next/link'
import { bagelfatone, roboto } from '@/lib/fonts'
import { AppIcon } from './misc/AppIcon'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  externalLinks: { github: string; url?: string }
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  externalLinks,
}: ProjectCardProps) {
  return (
    <div className='group hover-force flex w-full flex-col overflow-hidden rounded border border-white/8 bg-white/3 shadow-2xl shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-500/10'>
      <div className='relative w-full overflow-hidden max-sm:h-32 sm:aspect-video'>
        <Image
          src={imageUrl}
          alt='Project Cover Photo'
          fill
          quality={100}
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px'
        />
        <div className='pointer-events-none absolute inset-0 bg-gray-900/50 transition-opacity duration-300 group-hover:opacity-0' />
      </div>
      <div className='flex flex-col gap-3 p-4 sm:p-5'>
        <div className='flex items-start justify-between gap-3'>
          <h3
            className={`${bagelfatone.className} text-lg font-medium text-slate-200 transition-colors duration-300 group-hover:text-cyan-200`}
          >
            {title}
          </h3>
          <div className='mt-0.5 flex shrink-0 gap-3'>
            <Link href={externalLinks.github} target='_blank'>
              <AppIcon
                name='brand-github'
                size={18}
                className='text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400'
              />
            </Link>
            {externalLinks.url && (
              <Link href={externalLinks.url} target='_blank'>
                <AppIcon
                  name='external-link'
                  size={18}
                  className='text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400'
                />
              </Link>
            )}
          </div>
        </div>
        <p
          className={`${roboto.className} text-sm leading-relaxed text-slate-400`}
        >
          {description}
        </p>
        <div className='mt-1 flex flex-wrap gap-2'>
          {tags.map((item) => {
            return (
              <span
                key={item}
                className={`${roboto.className} rounded-full border border-cyan-300/10 px-3 py-0.5 font-mono text-xs text-slate-400 transition-colors duration-300 group-hover:border-cyan-300/25 group-hover:text-slate-300`}
              >
                {item}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
