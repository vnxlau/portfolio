import './App.css'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

const skills = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'Automation',
  'Home Assistant',
  'GitHub Actions',
  'Cloud',
  'APIs',
]

const projects = [
  {
    title: 'Personal Digital HQ',
    description:
      'A polished home base for professional identity, projects, writing, and contact links.',
    tags: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: 'Smart Home Automation',
    description:
      'Automation experiments that connect services, devices, and routines into practical workflows.',
    tags: ['Home Assistant', 'YAML', 'IoT'],
  },
  {
    title: 'Agentic Workflow Lab',
    description:
      'A sandbox for exploring AI-assisted development, productivity systems, and repeatable tooling.',
    tags: ['AI', 'TypeScript', 'Automation'],
  },
]

const experience = [
  {
    role: 'Builder & Technologist',
    company: 'Independent',
    dates: 'Now',
    summary:
      'Creating practical software, automation, and personal systems that turn ideas into usable products.',
  },
  {
    role: 'Portfolio Foundation',
    company: 'goncalovenceslau.pt',
    dates: '2026',
    summary:
      'Launching a clean internet-facing presence for projects, experiments, and professional context.',
  },
]

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a className="text-sm font-semibold tracking-[0.28em] text-cyan-300" href="#home">
            GV
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                className="transition hover:text-cyan-300"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.08fr_0.92fr]"
          id="home"
        >
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              goncalovenceslau.pt
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Goncalo Venceslau
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              A personal internet face for software, automation, AI-assisted workflows,
              and practical projects built with care.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="#projects"
              >
                View projects
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300/70 hover:text-cyan-200"
                href="mailto:hello@goncalovenceslau.pt"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-cyan-950/30">
              <div className="flex aspect-square items-center justify-center rounded-[1.5rem] border border-white/10 bg-slate-900/80 text-center">
                <div>
                  <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-fuchsia-400 text-4xl font-black text-slate-950">
                    GV
                  </div>
                  <p className="text-lg font-semibold text-white">Builder. Automator. Explorer.</p>
                  <p className="mt-2 text-sm text-slate-400">Photo or avatar placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" kicker="About" title="A clear home for who I am and what I build.">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-lg leading-8 text-slate-300">
                I use technology to turn messy ideas into useful systems. This site is a
                starting point for my public work: software experiments, automation projects,
                AI-assisted workflows, and notes from things I am learning.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Software', 'Automation', 'AI workflows'].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5" key={item}>
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" kicker="Skills" title="Modern tools for building fast, useful things.">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section id="projects" kicker="Projects" title="A starter showcase ready for real work.">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                key={project.title}
              >
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="Experience" title="A timeline you can expand as the story grows.">
          <div className="space-y-5">
            {experience.map((item) => (
              <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6" key={item.role}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-cyan-200">{item.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{item.dates}</p>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="Contact" title="Make it easy for people to reach you.">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              This contact area is ready for your preferred links. For now, it points to the
              professional email address for the domain.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-100"
                href="mailto:hello@goncalovenceslau.pt"
              >
                hello@goncalovenceslau.pt
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300/70"
                href="https://github.com/vnxlau"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300/70"
                href="https://www.linkedin.com/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Goncalo Venceslau. Built with React, Vite, TypeScript, and Tailwind CSS.
      </footer>
    </div>
  )
}

type SectionProps = {
  children: React.ReactNode
  id: string
  kicker: string
  title: string
}

function Section({ children, id, kicker, title }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id={id}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {kicker}
      </p>
      <h2 className="mb-10 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default App
