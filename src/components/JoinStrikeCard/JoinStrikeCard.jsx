import { ExternalLink } from 'lucide-react'

export default function JoinStrikeCard({ pumpFunUrl }) {
  const pump = pumpFunUrl || 'https://pump.fun'

  return (
    <div className="rounded-xl bg-[#ffcc00] p-5 text-black shadow-lg shadow-black/30">
      <h3 className="font-display text-center text-lg font-extrabold uppercase tracking-wide">
        Join the Strike
      </h3>
      <div className="mt-4 flex flex-col gap-3">

        <a
          href={pump}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border-2 border-black/20 bg-black/10 py-3 text-center text-sm font-semibold text-black transition hover:bg-black/20"
        >
          View on Pump
        </a>
      </div>
    </div>
  )
}
