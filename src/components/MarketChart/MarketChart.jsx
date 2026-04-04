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
          <p className="text-xs text-zinc-500">Live chart via DexScreener</p>
        </div>
      </div>
      <div className="relative h-[600px] w-full bg-[#0b0e11]">
        {embedUrl ? (
          <iframe
            title="DexScreener"
            src={embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allow="clipboard-write; fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex h-[600px] flex-col items-center justify-center gap-2 bg-[#0b0e11] px-4 text-center">
            <p className="text-sm text-zinc-500">Add a mintAddress for this project in projects.js to load the live chart.</p>
          </div>
        )}
      </div>
    </div>
  )
}
