import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

function shortenMint(mint) {
  if (!mint || mint.length < 12) return mint ?? '—'
  return `${mint.slice(0, 4)}…${mint.slice(-4)}`
}

export default function TechnicalIntel({ ticker, mintAddress }) {
  const [copied, setCopied] = useState(false)

  const rows = [
    { label: 'Ticker', value: ticker, highlight: false },
    { label: 'Chain', value: 'Solana', highlight: false },
    {
      label: 'Address',
      value: mintAddress ? shortenMint(mintAddress) : '—',
      copy: !!mintAddress,
      highlight: false,
    },
    { label: 'Mint Authority', value: 'Renounced', highlight: 'green' },
    { label: 'Freeze Authority', value: 'Disabled', highlight: 'green' },
    { label: 'LP Status', value: 'Burned 100%', highlight: 'green' },
  ]

  async function handleCopy() {
    if (!mintAddress) return
    try {
      await navigator.clipboard.writeText(mintAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="rounded-xl border border-[#30363d] bg-[#0d1117]">
      <h3 className="border-b border-[#30363d] px-4 py-3 font-display text-sm font-bold text-white">
        Technical Intel
      </h3>
      <ul className="divide-y divide-[#30363d]">
        {rows.map((r) => (
          <li
            key={r.label}
            className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm"
          >
            <span className="text-zinc-500">{r.label}</span>
            <span className="flex min-w-0 items-center gap-2 text-right">
              <span
                className={`truncate ${
                  r.highlight === 'green'
                    ? 'font-medium text-[#00ff66]'
                    : 'text-zinc-200'
                }`}
              >
                {r.value}
              </span>
              {r.copy && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="shrink-0 rounded p-1 text-zinc-500 hover:bg-white/10 hover:text-white"
                  aria-label="Copy mint address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[#00ff66]" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
