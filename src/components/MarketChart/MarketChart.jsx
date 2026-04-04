import { ExternalLink, Zap } from 'lucide-react'

/**
 * Live DexScreener embed — height matches previous mock (~420px chart area).
 * `mintAddress`: Solana token mint (e.g. pump.fun mint).
 */
export default function MarketChart({ mintAddress }) {
  const dexUrl = mintAddress
    ? `https://dexscreener.com/solana/${mintAddress}`
    : null
  const embedUrl = mintAddress
    ? `${dexUrl}?embed=1&theme=dark&trades=0&info=0`
    : null

  return (
    <div className="overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117]">
      <div className="flex flex-col gap-1 border-b border-[#30363d] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-sm font-bold text-white">
            Market Performance
          </h3>
          <p className="text-xs text-zinc-500">
            Live chart via DexScreener
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {dexUrl && (
            <a
              href={dexUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-300 transition hover:bg-white/10"
            >
              Open on DexScreener
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#ffcc00]/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ffcc00]">
            <Zap className="h-3 w-3" />
            Live data
          </span>
        </div>
      </div>

      {embedUrl ? (
        <div className="relative h-[600px] w-full bg-[#0b0e11]">
          <iframe
            title="DexScreener"
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allow="clipboard-write; fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <div className="flex h-[600px] flex-col items-center justify-center gap-2 bg-[#0b0e11] px-4 text-center">
          <p className="text-sm text-zinc-500">
            Add a <span className="text-zinc-300">mintAddress</span> for this
            project in <code className="text-[#ffcc00]">projects.js</code> to
            load the live chart.
          </p>
        </div>
      )}
    </div>
  )
}
