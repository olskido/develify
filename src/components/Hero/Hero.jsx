import { BadgeCheck, Sparkles } from 'lucide-react'
import { profile, social } from '../../data/projects'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0a0a] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10]/60 via-[#0e0e10]/80 to-[#0a0a0a]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="flex flex-col items-center lg:order-2 lg:items-end">
          <div className="relative">
            <img
              src={profile.avatarUrl}
              alt=""
              className="h-36 w-36 rounded-full border-2 border-[#ffd700]/40 bg-[#1a1a1d] object-cover object-center sm:h-44 sm:w-44 lg:h-56 lg:w-56"
            />
            <span
              className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-[#0a0a0a] bg-[#4ade80]"
              title="Online"
            />
          </div>
        </div>

        <div className="text-center lg:order-1 lg:text-left">


          <div className="mb-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hi, I&apos;m{' '}
              <span className="text-[#ffd700]">{profile.name}</span>
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#ffd700]/15 px-2.5 py-0.5 text-xs font-semibold text-[#ffd700] ring-1 ring-[#ffd700]/40">
              <BadgeCheck className="h-3.5 w-3.5" />
              Verified Dev
            </span>
          </div>

          <p className="mx-auto mb-2 max-w-xl text-sm text-[#ffd700]/90 lg:mx-0">
            {profile.title}
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-zinc-400 lg:mx-0">
            {profile.bio}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd700] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c200]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </a>
            <a
              href={social.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
