import './App.css'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

const skills = [
  'Engineering Management',
  'Team Leadership',
  'Java',
  'Spring Boot',
  'Quarkus',
  'Apache Kafka',
  'Kubernetes',
  'Azure AKS',
  'Google Kubernetes Engine',
  'PostgreSQL',
  'Microservices',
  'Digital Transformation',
  'Mentoring',
  'AI-assisted Engineering',
]

const projects = [
  {
    title: 'OMS Modernization',
    description:
      'Led the modernization of a business-critical order platform, migrating 10M+ objects from MongoDB to PostgreSQL with zero data loss. Built 4 AI-assisted validation tools that enabled 100% validation coverage and caught critical issues before go-live.',
    tags: ['Quarkus', 'PostgreSQL', 'Kafka', 'Azure AKS', 'AI Tooling'],
  },
  {
    title: 'TMS Greenfield Platform',
    description:
      'Drove architecture and delivery of a greenfield transport management system with a team of 5-8 engineers. Reached first production rollout in 9 months and established an architecture template reused across later platform initiatives.',
    tags: ['Java', 'Spring', 'Kafka', 'GKE', 'Microservices'],
  },
  {
    title: 'Cloud Migration and Team Scaling',
    description:
      'Led two engineering teams through Kubernetes standardization and Azure migration while maintaining business continuity. Improved delivery predictability with a structured workflow and WIP discipline.',
    tags: ['Leadership', 'Azure', 'Kubernetes', 'Delivery', 'Product'],
  },
]

const experience = [
  {
    role: 'Engineering Manager, Order Team',
    company: 'La Redoute Portugal',
    dates: '2025 - Present',
    summary:
      'Leading a 4-engineer product team responsible for core order processing. Focused on reliability, modernization, and measurable product impact.',
  },
  {
    role: 'Engineering Manager, Multi-team Scope',
    company: 'La Redoute Portugal',
    dates: '2022 - 2025',
    summary:
      'Managed 2 teams (~10 engineers), led cloud transformation initiatives, and developed internal leadership with promotion-focused coaching.',
  },
  {
    role: 'Tech Lead and Tech PM',
    company: 'La Redoute Portugal',
    dates: '2019 - 2022',
    summary:
      'Built and launched a greenfield cloud-native platform that became a company-wide architecture reference.',
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
              Engineering Manager | Leiria, Portugal
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Goncalo Venceslau
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              I lead engineering teams that modernize critical platforms, scale cloud-native
              systems, and deliver product impact. 13 years in software, 7+ years in
              leadership.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-full bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="#projects"
              >
                View flagship projects
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300/70 hover:text-cyan-200"
                href="mailto:goncalovenceslau@gmail.com"
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
                  <p className="text-lg font-semibold text-white">Build platforms. Grow people. Ship impact.</p>
                  <p className="mt-2 text-sm text-slate-400">Java | Kafka | Kubernetes | Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" kicker="About" title="I connect technical depth with people leadership.">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-lg leading-8 text-slate-300">
                I am an Engineering Manager at La Redoute focused on high-scale commerce
                systems and organizational growth. My work spans greenfield architecture,
                brownfield modernization, and team development that helps engineers grow into
                larger roles.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Cloud-native systems', 'Product delivery', 'Talent growth'].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5" key={item}>
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-2 font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" kicker="Skills" title="Leadership and platform engineering strengths.">
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

        <Section id="projects" kicker="Projects" title="Selected work with clear business outcomes.">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
                key={project.title}
              >
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 min-h-44 leading-7 text-slate-300">{project.description}</p>
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

        <Section id="experience" kicker="Experience" title="Leadership trajectory across delivery and transformation.">
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

        <Section id="contact" kicker="Contact" title="Open to great conversations and meaningful challenges.">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              If you are hiring for Engineering Manager roles where delivery quality, platform
              modernization, and team growth matter, I would be glad to connect.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-100"
                href="mailto:goncalovenceslau@gmail.com"
              >
                goncalovenceslau@gmail.com
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
                href="https://www.linkedin.com/in/goncalovenceslau/"
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
        © 2026 Goncalo Venceslau. Engineering leadership with a builder mindset.
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
