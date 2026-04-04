import { Link } from 'react-router-dom'
import { Activity, Send } from 'lucide-react'
import { social, profile } from '../../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#ffd700]/30 shadow-md">
                <img src={profile.avatarUrl || '/images/develify-avatar.png'} alt="Logo" className="h-full w-full object-cover" />
              </span>
              <span className="font-display font-bold text-[#ffd700]">
                develify Portfolio
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Building the next generation of Solana utilities and
              community-driven tokens.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>
                <Link to="/" className="hover:text-[#ffd700]">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ffd700]"
                >
                  PumpFun Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-[#ffd700]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X (Twitter)
              </a>
              <a
                href={social.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-[#ffd700]"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} develify Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
