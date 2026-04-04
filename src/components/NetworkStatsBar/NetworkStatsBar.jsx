import { Zap } from 'lucide-react'
import { network } from '../../data/projects'

export default function NetworkStatsBar() {
  return null;
  <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2.5 text-xs sm:text-sm">
    <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider text-zinc-500">
      <Zap className="h-3.5 w-3.5 text-[#ffd700]" />
      Network stats
    </span>
    <span className="text-zinc-400">
      TPS:{' '}
      <span className="font-semibold text-[#4ade80]">{network.tps}</span>
    </span>
    <span className="text-zinc-400">
      SOL{' '}
      <span className="font-semibold text-white">${network.solUsd}</span>
    </span>
  </div>
    </div >
  )
}
