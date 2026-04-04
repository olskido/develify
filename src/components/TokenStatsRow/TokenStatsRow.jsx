import { BarChart3, Info, TrendingUp } from 'lucide-react'

export default function TokenStatsRow({ volume24h, volumeChange, liquidity, holders }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl border border-white/10 bg-[#161b22]/80 p-4 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-zinc-500">24H Volume</p>
            <p className="mt-1 font-display text-xl font-bold text-white">
              {volume24h}
            </p>
            <p className="mt-1 text-xs font-medium text-[#00ff66]">
              {volumeChange} from yesterday
            </p>
          </div>
          <BarChart3 className="h-5 w-5 text-zinc-600" />
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-[#161b22]/80 p-4 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-zinc-500">Liquidity</p>
            <p className="mt-1 font-display text-xl font-bold text-[#00ff66]">
              {liquidity}
            </p>
            <p className="mt-1 text-xs text-zinc-500">Locked on Raydium</p>
          </div>
          <TrendingUp className="h-5 w-5 text-zinc-600" />
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-[#161b22]/80 p-4 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-zinc-500">Holders</p>
            <p className="mt-1 font-display text-xl font-bold text-sky-400">
              {holders}
            </p>
            <p className="mt-1 text-xs text-zinc-500">Community verified</p>
          </div>
          <Info className="h-5 w-5 text-zinc-600" />
        </div>
      </div>
    </div>
  )
}
