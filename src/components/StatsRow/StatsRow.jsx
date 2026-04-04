import { useLiveTokens } from '../../context/LiveTokensContext'

export default function StatsRow() {
  const { stats } = useLiveTokens()

  return (
    <div className="hidden border-b border-white/10 bg-[#0e0e10] lg:block">
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-6 py-10">
        <div className="px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Launched
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-white">
            {stats.launched}
          </p>
        </div>
        <div className="px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Bonded
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-[#4ade80]">
            {stats.bonded}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            ATH
          </p>
          <p className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
            {stats.athMc}
          </p>
        </div>
      </div>
    </div>
  )
}
