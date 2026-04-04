export default function TokenHero({ ticker, currentCap, athTarget, imageUrl }) {
  return (
    <section className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-[320px]">
      <div className="absolute inset-0 z-0 bg-[#0d0e12]">
        <img
          src={imageUrl}
          alt={`${ticker} Hero`}
          className="w-full h-full object-cover object-top opacity-50 block"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/85 to-transparent pointer-events-none" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20">
        <h1 className="font-display text-4xl font-extrabold italic tracking-tight text-white sm:text-5xl lg:text-6xl">
          {ticker}
        </h1>
        <div className="mt-6 flex flex-wrap gap-6 text-sm sm:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Current Cap
            </p>
            <p className="mt-1 font-display text-xl font-bold text-[#ffcc00] sm:text-2xl">
              {currentCap}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              ATH Target
            </p>
            <p className="mt-1 font-display text-xl font-bold text-[#00ff66] sm:text-2xl">
              {athTarget}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
