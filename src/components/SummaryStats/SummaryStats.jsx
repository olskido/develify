import { useLiveTokens } from '../../context/LiveTokensContext'

export default function SummaryStats() {
  const { stats } = useLiveTokens()

  return (
    <section className="border-t border-white/10 bg-[#0e0e10] py-10 lg:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-2 sm:gap-4 sm:px-6">
        <div className="rounded-xl border border-white/10 bg-[#141416] p-3 text-center sm:rounded-2xl sm:p-5">
          <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
            Launched
          </p>
          <p className="mt-1 font-display text-xl font-bold text-white sm:mt-2 sm:text-3xl">
            {stats.launched}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#141416] p-3 text-center sm:rounded-2xl sm:p-5">
          <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
            Bonded
          </p>
          <p className="mt-1 font-display text-xl font-bold text-[#4ade80] sm:mt-2 sm:text-3xl">
            {stats.bonded}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#141416] p-3 text-center flex flex-col justify-center sm:rounded-2xl sm:p-5">
          <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
            ATH
          </p>
          <p className="mt-1 font-display text-lg font-bold text-white sm:mt-2 sm:text-2xl">
            ${stats.athMc > 0 ? (stats.athMc >= 1000000 ? (stats.athMc / 1000000).toFixed(1) + 'M' : (stats.athMc / 1000).toFixed(0) + 'K') : '0'}
          </p>
        </div>
      </div>
    </section>
  )
}
