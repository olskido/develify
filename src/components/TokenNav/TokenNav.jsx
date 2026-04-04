import { Link } from 'react-router-dom'
import { Activity, ArrowLeft, Send } from 'lucide-react'
import { social } from '../../data/projects'

export default function TokenNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0e12]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffcc00] text-black">
            <Activity className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-bold text-[#ffcc00] sm:text-base">
            develify Portfolio
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={social.twitter}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
            aria-label="X (Twitter)"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={social.telegram}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  )
}

export function BackLink() {
  return (
    <div className="mb-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-[#ffcc00]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>
    </div>
  )
}
