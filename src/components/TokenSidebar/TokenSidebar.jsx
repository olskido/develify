import { Send } from 'lucide-react'
import JoinStrikeCard from '../JoinStrikeCard/JoinStrikeCard'
import TechnicalIntel from '../TechnicalIntel/TechnicalIntel'
import { social } from '../../data/projects'

export default function TokenSidebar({
  name,
  ticker,
  mintAddress,
  pumpFunUrl,
  xCommunityUrl,
}) {
  const tradeUrl = mintAddress
    ? `https://dexscreener.com/solana/${mintAddress}`
    : 'https://dexscreener.com'

  return (
    <aside className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
        <a
          href={social.twitter}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/20 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          Share on X
        </a>
        <a
          href={tradeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#ffcc00] py-2.5 text-sm font-bold text-black transition hover:bg-[#e6b800]"
        >
          Trade Now
        </a>
      </div>

      {xCommunityUrl && (
        <a
          href={xCommunityUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-[#30363d] bg-[#161b22] py-3 text-sm font-medium text-zinc-200 transition hover:border-[#ffcc00]/50"
        >
          {(name ?? ticker) + ' · X Community'}
        </a>
      )}

      <JoinStrikeCard pumpFunUrl={pumpFunUrl} />

      <TechnicalIntel ticker={ticker} mintAddress={mintAddress} />

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Connect with Commands
        </p>
        <a
          href={social.twitter}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#30363d] bg-[#161b22] py-3 text-sm font-medium text-zinc-200 transition hover:border-[#ffcc00]/50"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Twitter
        </a>
        <a
          href={social.telegram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#30363d] bg-[#161b22] py-3 text-sm font-medium text-zinc-200 transition hover:border-[#ffcc00]/50"
        >
          <Send className="h-4 w-4" />
          Telegram
        </a>
      </div>
    </aside>
  )
}
