interface SectionHeadingProps {
  number: string
  title: string
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className='flex items-center gap-4'>
      <h2 className='flex items-baseline gap-2 text-xl font-bold tracking-widest text-slate-100 uppercase sm:text-2xl'>
        <span className='font-mono text-base text-cyan-400 sm:text-lg'>{number}.</span>
        {title}
      </h2>
      <span className='block h-px max-w-48 grow bg-gradient-to-r from-slate-600/70 to-transparent' />
    </div>
  )
}
