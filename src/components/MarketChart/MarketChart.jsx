import { ExternalLink, Zap } from 'lucide-react'

/**
 * Live DexScreener embed — height matches previous mock (~420px chart area).
 * `mintAddress`: Solana token mint (e.g. pump.fun mint).
 */
export default function MarketChart({ mintAddress }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117]">
      <div className="flex flex-col gap-1 border-b border-[#30363d] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-sm font-bold text-white">
            Market Performance
          </h3>
          <p className="text-xs text-zinc-500">
            Network Trajectory
          </p>
        </div>
      </div>

      <div className="relative h-[600px] w-full bg-[#0b0e11] overflow-hidden">
        {/* Dynamic Glowing Cyber Grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 pointer-events-none opacity-20">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-t border-l border-[#00ff66]/30"></div>
          ))}
        </div>

        {/* Scaled Graphic Chart */}
        <svg
          className="absolute inset-0 h-full w-full opacity-80 mix-blend-screen"
          preserveAspectRatio="none"
          viewBox="0 0 1000 600"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ff66" stopOpacity="0.4" />
              <stop offset="90%" stopColor="#00ff66" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 0 550 Q 150 540, 200 480 T 400 350 T 600 280 T 750 150 L 1000 60"
            fill="none"
            stroke="#00ff66"
            strokeWidth="4"
            filter="url(#glow)"
            className="drop-shadow-2xl"
          />
          <path
            d="M 0 550 Q 150 540, 200 480 T 400 350 T 600 280 T 750 150 L 1000 60 L 1000 600 L 0 600 Z"
            fill="url(#chartGradient)"
          />
        </svg>

        {/* Technical crosshairs overlay */}
        <div className="absolute bottom-20 right-1/4 h-[400px] w-px bg-white/20 border-r border-dashed border-white/30" />
        <div className="absolute bottom-0 right-1/4 px-2 py-1 bg-white/10 backdrop-blur-sm text-[10px] text-white/50 border border-t-0 border-white/10 rounded-b">
          LATEST BLOCK
        </div>
      </div>
    </div>
  )
}
