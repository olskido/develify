import { ExternalLink } from 'lucide-react'
import { useLiveTokens } from '../../context/LiveTokensContext'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function LaunchedProjects() {
  const { tokens } = useLiveTokens()

  return (
    <section className="bg-[#0a0a0a] py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              Launched Projects
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Verified developer track record ({tokens.length} tokens)
            </p>
          </div>
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ffd700] hover:underline"
          >
            PumpFun
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]">
          {tokens.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
