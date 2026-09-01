import NavBar from '@/components/ui/Navbar'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import SectionHeading from '@/components/ui/SectionHeading'
import TechMarquee from '@/components/ui/TechMarquee'
import ProjectCard from '@/components/ProjectCard'
import AnimateIn from '@/components/misc/AnimateIn'
import { ActiveSectionProvider } from '@/lib/ActiveSectionContext'
import { bagelfatone, roboto } from '@/lib/fonts'

export default function Home() {
  return (
    <ActiveSectionProvider>
      <main className='relative z-10 w-full'>
        <section className='mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:h-screen lg:min-h-0 lg:flex-row lg:gap-20 lg:px-10 lg:py-16'>
          {/* Sidebar */}
          <section className='flex flex-col lg:flex-1'>
            <Header />
            <NavBar />
            <Footer />
          </section>

          {/* Content */}
          <section className='hide-scrollbar flex flex-col scroll-smooth lg:flex-[1.4] lg:overflow-y-auto lg:pr-4'>
            {/* Hero */}
            <div className='py-8' data-section='about'>
              <AnimateIn>
                <p
                  className={`${roboto.className} font-mono text-sm tracking-[0.2em] text-cyan-400`}
                >
                  Hi, my name is
                </p>
              </AnimateIn>
              <AnimateIn>
                <h1
                  className={`${bagelfatone.className} mt-4 bg-gradient-to-r from-slate-50 via-slate-200 to-cyan-300/80 bg-clip-text text-4xl leading-tight text-transparent sm:text-6xl`}
                >
                  Swadhin Tandi.
                </h1>
              </AnimateIn>
              <AnimateIn>
                <h2
                  className={`${bagelfatone.className} mt-2 text-3xl text-slate-500 sm:text-5xl`}
                >
                  I build software.
                </h2>
              </AnimateIn>
              <AnimateIn>
                <p className='mt-6 max-w-xl text-lg leading-relaxed text-slate-400'>
                  Indie developer focused on scalable applications, developer
                  tools, and automation — exploring{' '}
                  <span className='text-slate-200'>full-stack development</span>,{' '}
                  <span className='text-slate-200'>cloud infrastructure</span>,
                  and <span className='text-slate-200'>cybersecurity</span>.
                </p>
              </AnimateIn>
              <AnimateIn>
                <div className='mt-8 flex flex-wrap items-center gap-4'>
                  <a
                    href='#projects'
                    className='rounded-lg border border-cyan-400/40 px-6 py-3 text-sm font-semibold tracking-wide text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]'
                  >
                    Check out my work
                  </a>
                </div>
              </AnimateIn>
            </div>

            <TechMarquee />

            {/* About */}
            <div className='flex flex-col gap-6 p-2' id='about' data-section='about'>
              <AnimateIn>
                <SectionHeading number='01' title='about me' />
              </AnimateIn>
              <AnimateIn>
                <p className='max-w-2xl leading-relaxed text-slate-400'>
                  I care about clean code, performance, and maintainability —
                  building secure APIs, reliable software, and interfaces that
                  feel effortless.
                </p>
              </AnimateIn>
              <AnimateIn>
                <p className='max-w-2xl leading-relaxed text-slate-400'>
                  Beyond the code, I{"'"}m constantly experimenting with new
                  technologies and taking things apart to understand how they
                  work beneath the surface.
                </p>
              </AnimateIn>
            </div>

            {/* Projects */}
            <div
              className='mt-16 flex flex-col gap-10 p-2 pb-8'
              id='projects'
              data-section='projects'
            >
              <AnimateIn>
                <SectionHeading number='02' title='projects' />
              </AnimateIn>
              <AnimateIn>
                <ProjectCard
                  title='Cinexa'
                  description='A Flask-based web application that explores JWT authentication, middlewares and nosql database integration built for learning.'
                  imageUrl='https://raw.githubusercontent.com/blueorionn/cinexa/main/cinexa/static/public/cover.png'
                  tags={['Python', 'Flask', 'Tailwindcss']}
                  externalLinks={{
                    github: 'https://github.com/blueorionn/cinexa',
                  }}
                />
              </AnimateIn>
              <AnimateIn>
                <ProjectCard
                  title='Crypticworld'
                  description='Crypticworld is a growing collection of browser-based tools for common security and encoding tasks.'
                  imageUrl='https://raw.githubusercontent.com/blueorionn/crypticworld/refs/heads/main/public/img/crypticworld-site-img.png'
                  tags={['Next.js', 'Cybersecurity', 'Encryption']}
                  externalLinks={{
                    github: 'https://github.com/blueorionn/crypticworld',
                  }}
                />
              </AnimateIn>
            </div>

            {/* Outro */}
            <AnimateIn>
              <div className='mt-16 mb-6 flex flex-col items-center gap-5 border-t border-white/5 pt-14 text-center'>
                <p
                  className={`${roboto.className} font-mono text-sm tracking-[0.2em] text-cyan-400`}
                >
                  What{"'"}s next?
                </p>
                <h2
                  className={`${bagelfatone.className} text-3xl text-slate-100 sm:text-4xl`}
                >
                  Let{"'"}s build something together
                </h2>
                <p className='max-w-md leading-relaxed text-slate-400'>
                  I{"'"}m currently open to new opportunities and interesting
                  projects. My inbox is always open — don{"'"}t be a stranger.
                </p>
                <a
                  href='mailto:swadhintandi@yahoo.com'
                  className='mt-2 rounded-lg border border-cyan-400/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]'
                >
                  Say hello
                </a>
                <p
                  className={`${roboto.className} mt-8 text-xs text-slate-600`}
                >
                  Designed &amp; built by Swadhin Tandi
                </p>
              </div>
            </AnimateIn>
          </section>
        </section>
      </main>
    </ActiveSectionProvider>
  )
}
