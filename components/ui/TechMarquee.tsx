const SKILLS = [
  'Python',
  'TypeScript',
  'Next.js',
  'Flask',
  'FastAPI',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'Linux',
]

export default function TechMarquee() {
  const row = [...SKILLS, ...SKILLS]

  return (
    <div
      className='marquee-mask relative my-20 overflow-hidden border-y border-white/5 py-5'
      aria-hidden
    >
      <div className='marquee-track items-center gap-8'>
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className='flex items-center gap-8 font-mono text-sm tracking-widest whitespace-nowrap text-slate-600 uppercase'
          >
            {skill}
            <span className='size-1 rounded-full bg-cyan-400/40' />
          </span>
        ))}
      </div>
    </div>
  )
}
