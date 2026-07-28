import Link from 'next/link'
import { AppIcon } from '@/components/misc/AppIcon'
import NavBar from '@/components/ui/Navbar'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import ExpertiseCard from '@/components/ExpertiseCard'
import ProjectCard from '@/components/ProjectCard'
import AnimateIn from '@/components/misc/AnimateIn'
import { ActiveSectionProvider } from '@/lib/ActiveSectionContext'
import { roboto } from '@/lib/fonts'

export default function Home() {
  return (
    <ActiveSectionProvider>
      <main className='w-full' style={{ backgroundColor: '#152331' }}>
        <section className='mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:h-screen lg:min-h-0 lg:flex-row lg:gap-16 lg:px-8 lg:py-16'>
          <section className='flex flex-col lg:flex-1'>
            <Header />
            <NavBar />
            <Footer />
          </section>
          <section className='hide-scrollbar flex flex-col scroll-smooth lg:flex-1 lg:overflow-y-auto'>
            <div className='p-2' id='about' data-section='about'>
              <h1 className='my-2.5 text-xl font-bold tracking-wide text-gray-200 uppercase lg:hidden'>
                about
              </h1>
              <AnimateIn>
                <p className='py-4 text-lg text-slate-400'>
                  I{"'"}m an indie developer passionate about building scalable
                  applications, developer tools, and automation solutions. I
                  enjoy exploring{' '}
                  <span className='text-gray-300'>full-stack development</span>,{' '}
                  <span className='text-gray-300'>cloud infrastructure</span>,{' '}
                  <span className='text-gray-300'>cybersecurity</span>, and
                  computer science while continuously learning new technologies
                  and solving real-world problems.
                </p>
              </AnimateIn>
              <AnimateIn>
                <p className='py-4 text-lg text-slate-400'>
                  I specialize in building scalable web applications, secure
                  APIs, and reliable software solutions using modern
                  technologies. With a focus on clean code, performance, and
                  maintainability, I enjoy creating practical solutions that
                  solve real-world problems and are built to scale.
                </p>
              </AnimateIn>
              <AnimateIn>
                <p className='py-4 text-lg text-slate-400'>
                  My interests extend beyond software development into cloud
                  infrastructure, cybersecurity, and computer science, where I
                  {"'"}m constantly exploring new technologies and expanding my
                  knowledge. I believe that great software comes from continuous
                  learning, experimentation, and a curiosity to understand how
                  things work beneath the surface.
                </p>
              </AnimateIn>
              <AnimateIn>
                <p className='py-4 text-lg text-slate-400'>
                  Whether I{"'"}m developing full-stack applications,
                  integrating complex systems, automating repetitive tasks, or
                  contributing to technical projects, my goal is to build
                  solutions that are efficient, scalable, and genuinely useful.
                </p>
              </AnimateIn>
            </div>
            <div
              className='my-8 flex flex-col gap-4 p-2'
              id='expertise'
              data-section='expertise'
            >
              <h1 className='my-2.5 text-xl font-bold tracking-wide text-gray-200 uppercase lg:hidden'>
                expertise
              </h1>
              <AnimateIn>
                <ExpertiseCard
                  title='Web Development'
                  description='I build robust, fast and responsive web applications that balance modern design with clean functionality. Every project is built with performance, accessibility, and maintainability in mind, ensuring it looks great and provides a seamless experience.'
                  tags={['React', 'Next.js', 'Django', 'Flask']}
                  displayIcon={{ name: 'website', type: 'gg' }}
                />
              </AnimateIn>
              <AnimateIn>
                <ExpertiseCard
                  title='API Development'
                  description='I develop secure, efficient, and well-structured APIs that enable seamless communication between applications, automate workflows, and provide a reliable backbone for modern software systems.'
                  tags={['Flask', 'FastAPI', 'Django', 'Express.js']}
                  displayIcon={{ name: 'api', type: 'hugeicons' }}
                />
              </AnimateIn>
              <AnimateIn>
                <ExpertiseCard
                  title='Integration'
                  description='Modern applications rely on multiple services working together. I specialize in integrating technologies such as Docker, SQL and NoSQL databases, and third-party APIs to create connected, scalable, and reliable systems that simplify operations and improve user experience.'
                  tags={['DB', 'Analytics', 'Live chat', 'Payment']}
                  displayIcon={{ name: 'api', type: 'mynaui' }}
                />
              </AnimateIn>
              <AnimateIn>
                <ExpertiseCard
                  title='Software Development'
                  description='Beyond web applications, I develop software solutions using Python and Node.js to automate workflows, process data, and solve real-world problems. I build web automation tools, perform scientific computing, handle file and I/O operations, and create meaningful data visualizations along with web scraping solutions and Progressive Web Applications (PWAs).'
                  tags={['Python', 'Automation', 'Node.js', 'PWA']}
                  displayIcon={{ name: 'software', type: 'eos-icons' }}
                />
              </AnimateIn>
            </div>
            <AnimateIn>
              <Link
                href={'/resume.pdf'}
                target='_blank'
                className='mt-8 inline-flex items-center gap-2 self-start p-2 text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-600'
              >
                <span>View Full Resume</span>
                <AppIcon name='external-link' size={16} />
              </Link>
            </AnimateIn>
            <div
              className='my-8 flex flex-col gap-4 p-2'
              id='projects'
              data-section='projects'
            >
              <h1 className='my-2.5 text-xl font-bold tracking-wide text-gray-200 uppercase lg:hidden'>
                projects
              </h1>

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
            <AnimateIn>
              <p
                className={`${roboto.className} mt-12 mb-4 text-center text-sm text-slate-500`}
              >
                Designed &amp; Built by Swadhin Tandi
              </p>
            </AnimateIn>
          </section>
        </section>
      </main>
    </ActiveSectionProvider>
  )
}
