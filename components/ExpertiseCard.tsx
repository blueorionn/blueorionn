import { AppIcon } from './misc/AppIcon'

interface ExpertiseCardProps {
  title: string
  description: string
  tags: string[]
  displayIcon: { name: string; type?: string }
}

export default function ExpertiseCard({
  title,
  description,
  tags,
  displayIcon,
}: ExpertiseCardProps) {
  return (
    <>
      <div className='hover-force flex w-full gap-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/8 hover:shadow-lg hover:shadow-cyan-500/5 hover:backdrop-blur-xl sm:gap-8 sm:p-4'>
        <div className='hidden size-12 shrink-0 items-center justify-center sm:flex sm:size-20'>
          <AppIcon
            name={displayIcon.name}
            type={displayIcon.type}
            size={32}
            className='text-gray-400 sm:size-12'
          />
        </div>
        <div className='grow'>
          <h3 className='cursor-default py-0.5 text-lg text-gray-300'>
            {title}
          </h3>
          <p className='cursor-default py-0.5 text-base text-gray-400'>
            {description}
          </p>
          <div className='flex flex-wrap gap-2 py-2 sm:gap-4'>
            {tags.map((item) => {
              return (
                <span
                  className='rounded-full bg-teal-900 p-0.5 px-3 text-sm text-teal-400 sm:px-4'
                  key={item}
                >
                  {item}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
